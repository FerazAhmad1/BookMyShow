import mongoose, { Schema, Types } from "mongoose";
export const timingSchema = {
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

}


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
    timings: [timingSchema],
    active: {
        type: Boolean,
        default: true,
        required: [true, "please provide active value "]
    }
})
const Show = mongoose.model("show", showsChema);
export default Show
