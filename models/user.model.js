
import mongoose from 'mongoose'

let userModel = mongoose.Schema({
    username: String,
    password: String,
    updated_time: Date,
    created_time: Date,
});

let user = mongoose.model('user', userModel);
export default user