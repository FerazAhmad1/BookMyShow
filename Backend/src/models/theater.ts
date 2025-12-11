import mongoose, { Document, Schema, ObjectId, Types } from "mongoose";
const adressSchema = new Schema({
    buildingNumber: {
        type: String,
        required: true
    },
    buildingName: {
        type: String,
        required: true
    },
    floorNumber: {
        type: Number,
        reuired: true
    },
    landMark: {
        type: String,
        reuired: true
    },
    street: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        reuired: true
    },
    state: {
        type: String,
        reuired: true
    },
    country: {
        type: String,
        required: true
    }

})
const theaterSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "please provide theater name"]
    },
    address: {
        type: adressSchema,
        reuired: [true, "please provide address"]
    },
    ownerId: {
        type: Types.ObjectId,
        ref: "user",
        required: [true, "please provide ownerId"]
    }
})
const Theater = mongoose.model("theater", theaterSchema);
export default Theater
