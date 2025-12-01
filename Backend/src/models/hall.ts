import mongoose, { Schema, Document, Types } from "mongoose";

const hallSchema = new Schema({
    name: {
        type: String,
        required: [true, "plese provide hall name"]
    },
    theaterId: {
        type: Types.ObjectId,
        ref: "theater",
        required: [true, "please provide theaterId"]
    },
    sound: {
        type: String,
        required: [true, "please provide sound type for sound"]
    },
    ac: {
        type: Boolean,
        default: true,
        required: [true, "please provide true if hall have ac or false if hall does not have ac "]
    },
    numberOfSeats: {
        type: Number,
        required: [true, "please provide total number of seat present in hall"]
    },
    seatArrangeMent: [{
        sectionName: {
            type: String,
            required: [true, "please provide sectionName "]
        },
        totalSeats: {
            type: Number,
            required: [true, 'provide totalSeaats for the section']
        },
        leftColumn: {
            type: Number,
            required: [true, "please provide leftColumn value "]
        },
        rightColumn: {
            type: Number,
            required: [true, "please provide rightColumn value"]
        },
        leftRow: {
            type: Number,
            required: [true, "please provide leftRow value"]
        },
        rightRow: {
            type: Number,
            required: [true, "please provide rightRow value"]
        }

    }]
});

const Hall = mongoose.model("hall", hallSchema);
export default Hall;