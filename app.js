require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./Models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

//custom middlewares
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);


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

app.get("/listings",  wrapAsync(async (req,res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
} ));

app.get("/listings/new", (req,res)=> {
    res.render("listings/new.ejs");
});

// create route
app.post("/listings", wrapAsync(async (req, res) => {
    if(!req.body.listing) {
        throw new ExpressError(400, "send valid data for listing");
    };
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect(`/listings/${newListing._id}`);
}));

//show route 

app.get("/listings/:id", wrapAsync(async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
} ));

//edit route

app.get("/listings/:id/edit",wrapAsync( async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
})); 

//update route

app.put("/listings/:id",wrapAsync ( async (req,res) => {
     if(!req.body.listing) {
        throw new ExpressError(400, "send valid data for listing");
    };
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect("/listings")
}))

//delete route 

app.delete("/listings/:id", wrapAsync(async (req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}))


app.all("/{*splat}", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// custom middleware
app.use((err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Something went wrong!";

    // 400 — Bad Request
    if (statusCode === 400) {
        message = "The information you submitted is not valid.";
    }

    // 401 — Unauthorized
    if (statusCode === 401) {
        message = "You need to log in to continue.";
    }

    // 403 — Forbidden
    if (statusCode === 403) {
        message = "You do not have permission to access this page.";
    }

    // 404 — Not Found
    if (statusCode === 404) {
        message = "The page or listing you are looking for could not be found.";
    }

    // 500 — Internal Server Error
    if (statusCode === 500) {
        message = "Something went wrong on our end. Please try again later.";
    }

    res.status(statusCode).render("listings/error.ejs", {
        statusCode,
        message
    });
});

app.listen(8080, () => {
    console.log("server is listening to 8080");
});
