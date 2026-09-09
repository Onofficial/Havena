const mongoose = require("mongoose");
require("dotenv").config();

const Listing = require("../Models/listing.js");
const { data } = require("./data.js");

main()
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(data);
    console.log("Data was initialized");
};

initDB();