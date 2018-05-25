var mongoose = require("mongoose");

var tempSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name can't be blank!"
    },
    completed: {
        type:Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var TempModel =  mongoose.model("TempModel", tempSchema);
module.exports = TempModel;