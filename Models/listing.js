const mongoose = require("mongoose");
const schema = mongoose.Schema;


const  ListingSchema = new schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        set : (v) => v === ""? "default link" : v , 
    },
    price : {
        type : Number,

    },
    location : {
        type : String,

    }, 
    country : {
        type : String,
    },
});


const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;
