import mongoose, { Schema, Document, Types } from "mongoose";


const seatSchema = new Schema({

    seatNumber: {
        type: Number,
        required: [true, "please provide seatNumber"]
    },
    seatType: {
        type: String,
        enum: ["regular", "firstClass", "premium"],
        required: [true, "please provide seat type"]
    },
    hallId: {
        type: Types.ObjectId,
        ref: "hall",
        required: [true, "please provide hallId"]
    },
    price: {
        type: Number,
        required: [true, "please provide price."]
    }

})

const Seat = mongoose.model("seat", seatSchema);
export default Seat