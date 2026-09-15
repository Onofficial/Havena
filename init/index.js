const mongoose = require("mongoose");
const path = require("path");

// This script is commonly run from the `init` folder, while `.env` lives in
// the project root. Resolve it from this file instead of the current terminal
// directory.
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const Listing = require("../Models/listing.js");
const { data } = require("./data.js");

const initDB = async () => {
    await Listing.deleteMany({});
    const listings = data.map((listing) => ({
        ...listing,
        image: typeof listing.image === "string" ? listing.image : listing.image.url,
    }));
    await Listing.insertMany(listings);
    console.log("Data was initialized");
};

async function main() {
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is missing. Add it to the project-root .env file.");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
    await initDB();
    await mongoose.disconnect();
}

main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
