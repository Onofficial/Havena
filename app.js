require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./Models/listing");
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));

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

//index route 

app.get("/listings", async (req,res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
} );

app.get("/listings/new", (req,res)=> {
    res.render("listings/new.ejs");
});

// create route
app.post("/listings", async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect(`/listings/${newListing._id}`);
});

//show route 

app.get("/listings/:id", async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
} );


app.listen(8080, () => {
    console.log("server is listening to 8080");
});
