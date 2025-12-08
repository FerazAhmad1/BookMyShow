import mongoose, { Schema, Document } from "mongoose";
const posterSchema = new Schema({
    posterType: {
        type: String,
        enum: ["main", "sub"]
    },
    link: String
});
// need to add arist reference;
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
        validate: {
            validator: (val: [String]) => val.length > 0 && val.length <= 5,
            message: "there will at least one poster link and maximum Five poster link is allowed "
        }
    },
    languages: {
        type: [String],
        required: [true, "please provide languages"]
    },
    subtitle: {
        type: [String],
        required: [true, "please provide available subtile"],
        validate: {
            validator: (val: [String]) => {
                return val.length <= 5
            },
            message: "only Five subtitles are allowed"
        }
    },
    active: {
        type: Boolean,
        default: false
    }
});
const Movie = mongoose.model("movie", movieSchema);
export default Movie