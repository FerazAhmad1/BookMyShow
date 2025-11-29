import mongoose, { Schema, Document } from "mongoose";
const posterSchema = new Schema({
    posterType: {
        type: String,
        enum: ["main", "sub"]
    },
    link: String
});
// need to add arist reference 
const movieSchema = new Schema({
    title: {
        type: String,
        reuired: [true, "please provide name"],
        unique: true
    },
    duration: {
        type: String,
        required: [true, "please provide duration"]
    },
    poster: {
        type: [posterSchema],
        required: [true, "please provide link"],
        validate: function (val: []) {
            val.length <= 5
        }
    },
    languages: {
        type: [String],
        reuired: [true, "please provide languages"]
    },
    subtitle: {
        type: [String],
        reuired: [true, "please provide available subtile"],
        validate: function (val: [String]) {
            return val.length <= 5
        }
    },


});
const Movie = mongoose.model("movie", movieSchema);
export default Movie