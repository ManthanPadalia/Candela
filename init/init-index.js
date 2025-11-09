const mongoose = require("mongoose");
const User = require("../models/user");
const Listing = require("../models/listing");
const userData = require("./data-users");
const listingData = require("./data-listings");

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

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    await User.deleteMany({});

    // Register users and build a username -> ObjectId map
    const users = [];
    for (const user of userData.data) {
      const { username, email, community, password } = user;
      const newUser = new User({ username, email, community });
      await User.register(newUser, password);
      users.push(newUser);
    }
    const userMap = {};
    users.forEach((user) => {
      userMap[user.username] = user._id;
    });

    // Replace seller username with ObjectId in listings
    const listingsWithSellerId = listingData.data.map((listing) => ({
      ...listing,
      seller: userMap[listing.seller],
    }));

    await Listing.insertMany(listingsWithSellerId);
    console.log("Sample listings and users were initialized");
  } catch (err) {
    console.log("Error during initialization:", err.message);
  }
};

initDB();
