import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide name"]
    },
    email: {
        type: String,
        required: [true, "please provide email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "please provide password"],
        min: 8
    },
    confirmPassword: {
        type: String,
        required: [true, "please providde confim password"],
        validate: function (val: string) {

            return this.password === val
        }
    }
})

const User = mongoose.model("User", userSchema)

export default User