require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Listing = require("./Models/listing");

main()
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);


}





app.get("/", (req,res) => {
    res.send("Hi, i am root")
})





app.listen(8080, () => {
    console.log("server is listening to 8080");
});