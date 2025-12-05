import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt"

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    isAdmin: boolean;
    roles: [String]
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUser>({
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
    },
    isAdmin: {
        type: Boolean,
        reuired: [true, "please provide isAdmin value"],
        default: false
    },

    roles: [{
        type: String,
        enum: ["admin", "partner", "user"],
        default: "user"
    }]
})
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) next()
    const hashedPassword = await bcrypt.hash(this.password, 12);

    (this as any).confirmPassword = undefined
    this.password = hashedPassword
    next()
})
userSchema.methods.comparePassword = async function (candidatePassword: string) {
    console.log("this.password", this.password)
    return bcrypt.compare(candidatePassword, this.password)
}


const User = mongoose.model("User", userSchema);

export default User