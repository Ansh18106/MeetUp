import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    mail: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export default mongoose.model("user", userSchema);