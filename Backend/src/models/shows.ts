import mongoose, { Schema, Types } from "mongoose";



const showsChema = new Schema({
    hallId: [{
        type: Types.ObjectId,
        ref: "hall",
        reuired: [true, "please provide hallId"]
    }],
    movieId: {
        type: Types.ObjectId,
        ref: "movie"
    },
    timings: [{
        timingId: {
            type: Types.UUID,
            required: [true, "please provide timingId"]
        },
        start: {
            type: String,
            required: [true, "please provide start time"]
        },
        end: {
            type: String,
            required: [true, "please provide end time"]
        },
        active: {
            type: Boolean,
            defalut: true,
            required: [true, "please provide timing active value "]
        }

    }],
    active: {
        type: Boolean,
        default: true,
        required: [true, "please provide show "]
    }
})
const Show = mongoose.model("show", showsChema);
export default Show