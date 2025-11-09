# Candela

Simple marketplace web app built with Node.js, Express, EJS and MongoDB.  
Features: user signup/login (Passport local), add/edit/delete listings, search, community filter, flash messages.

## Prerequisites
- Node.js (v16+ recommended)
- npm
- MongoDB (local mongod) — or provide a MongoDB URI

## Quick start (macOS)

1. Clone / open project
```bash
cd /Users/manthan/Codes/Candela
```

2. Install dependencies
```bash
npm install
```

3. Create persistent MongoDB data folder (one-time)
```bash
mkdir -p ~/mongodb-data
```

4. Start mongod (new terminal — keep open)
```bash
mongod --dbpath ~/mongodb-data
# or use Homebrew service:
# brew services start mongodb-community@7.0
```

5. (Optional) Seed sample data
Stop your Node server first (if running). Then:
```bash
node init/init-index.js
```
Important: stop nodemon/server before running seeds, then restart server after seeding.

6. Start app (development)
```bash
npx nodemon app.js
# or
node app.js
```

7. Open in browser
```
http://localhost:8080/listings
```

## Environment
By default app connects to `mongodb://127.0.0.1:27017/candela`. You can set `MONGO_URL` in your environment and adapt `app.js` if desired:
```bash
export MONGO_URL="mongodb://127.0.0.1:27017/candela"
```

## Important files
- app.js — main application
- models/ — Mongoose models (User, Listing)
- views/ — EJS templates
- public/ — static assets
- init/ — seed data and init script
  - `init/init-index.js` — seeds users & listings (maps seller usernames → ObjectId)

## Notes & troubleshooting
- MongooseServerSelectionError: server selection timed out — ensure `mongod` is running and listening on `127.0.0.1:27017`.
- If you re-seed the DB, stop the server first, run the seed script, then restart the server to avoid stale connections.
- If new listings don't show under profile, confirm `app.post("/listings")` sets `newListing.seller = req.user._id` before saving.
- To inspect MongoDB:
```bash
mongosh
> show dbs
> use candela
> db.listings.find().pretty()
```

## Routes (main)
- GET /listings — list (supports ?q=search and ?community=Name)
- GET /listings/new — add form (requires login)
- POST /listings — create listing (sets seller from logged-in user)
- GET /listings/:id — show details
- GET /listings/:id/edit — edit form (owner only)
- PUT /listings/:id — update (owner only)
- DELETE /listings/:id — delete (owner only)
- GET /signup, POST /signup
- GET /login, POST /login
- GET /profile — user listings (requires login)

## Development tips
- Use nodemon for auto-restart:
```bash
npx nodemon app.js
```
- Keep `mongod` running in separate terminal.
- Stop server before running `node init/init-index.js`.

## Contributing
Fork, create a feature branch, open PR. Keep credentials and `mongodb-data/` out of commits (.gitignore).

## License
MIT
