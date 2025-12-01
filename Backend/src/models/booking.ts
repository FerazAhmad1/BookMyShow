import mongoose, { Schema, Types } from "mongoose";

const bookingSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: "user",
        required: [true, "please provide userId"]
    },
    seatId: [
        {
            type: Types.ObjectId,
            ref: "seat",
            required: true
        }
    ],
    hallId: {
        type: Types.ObjectId,
        ref: "hall",
        required: [true, "hallId is a required field"]

    },
    paymentStatus: {
        type: Number,
        enum: [0, 1],
        required: [true, "please provide paymentStatus"]
    },
    showId: {
        type: Types.ObjectId,
        ref: "show",
        required: [true, "please provide showId"]
    },
    showTimingId: {
        type: Types.UUID,
        required: [true, "please provide show timingId"]
    },
    amount: {
        type: Number,
        required: [true, "please provide amount"]
    }
});

const Booking = mongoose.model("booking", bookingSchema);
export default Booking;
