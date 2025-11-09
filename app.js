const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");

const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/candela";

main()
  .then(() => {
    console.log("Connected to DataBase");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));

app.use(
  session({
    secret: "candelaSecret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy({ usernameField: "username" }, User.authenticate())
);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.user = req.user; // <-- Add this line
  next();
});

app.use(async (req, res, next) => {
  try {
    const communities = await Listing.distinct("community");
    res.locals.communities = communities;
    res.locals.selectedCommunity = req.query.community || null;
  } catch (err) {
    res.locals.communities = [];
    res.locals.selectedCommunity = null;
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Candela is live, go to other route to explore");
});

app.get("/listings", async (req, res) => {
  const { q, community } = req.query;
  let filter = {};

  if (q) {
    filter.$or = [
      { title: { $regex: q, $options: "i" } },
      { description: { $regex: q, $options: "i" } },
    ];
  }
  if (community) {
    filter.community = community;
  }

  const allListings = await Listing.find(filter);

  // Get all unique communities for the dropdown
  const communities = await Listing.distinct("community");

  res.render("listings/index.ejs", {
    allListings,
    communities,
    selectedCommunity: community,
  });
});

app.get("/listings/new", isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});

app.post("/listings", isLoggedIn, async (req, res) => {
  try {
    const newListing = new Listing(req.body.listing);
    newListing.seller = req.user._id; // Set seller to current user
    await newListing.save();
    res.redirect("/listings");
  } catch (err) {
    console.log(err);
    res.redirect("/listings/new");
  }
});

app.get("/listings/:id", isLoggedIn, async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate("seller");
  res.render("listings/show.ejs", { listing });
});

app.put("/listings/:id", isLoggedIn, isOwner, async (req, res) => {
  try {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.log(err);
    res.redirect("/listings");
  }
});

app.delete("/listings/:id", isLoggedIn, isOwner, async (req, res) => {
  try {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  } catch (err) {
    console.log(err);
    res.redirect("/listings");
  }
});

async function isOwner(req, res, next) {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing.seller.equals(req.user._id)) {
    req.flash("error", "You do not have permission!");
    return res.redirect("/profile");
  }
  next();
}

app.get("/listings/:id/edit", isLoggedIn, isOwner, async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

app.get("/signup", async (req, res) => {
  const communities = await Listing.distinct("community");
  res.render("users/signup.ejs", { communities });
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, community, password } = req.body;
    const user = new User({ username, email, community });
    await User.register(user, password);
    req.flash("success", "Signup successful! Please log in.");
    res.redirect("/login");
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
});

app.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("success", "Welcome back!");
    res.redirect("/listings");
  }
);

app.get("/profile", isLoggedIn, async (req, res) => {
  const myListings = await Listing.find({ seller: req.user._id });
  res.render("users/profile.ejs", { myListings });
});

// Edit form
app.get("/profile/:id/edit", isLoggedIn, isOwner, async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("users/edit.ejs", { listing });
});

// Update listing
app.put("/profile/:id", isLoggedIn, isOwner, async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect("/profile");
});

// Delete listing
app.delete("/profile/:id", isLoggedIn, isOwner, async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/profile");
});

app.post("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.flash("success", "You have logged out.");
    res.redirect("/login");
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "You must log in to view listing details.");
  res.redirect("/login");
}

const port = 8080;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
  console.log(`http://localhost:${port}/listings`);
});
