
import mongoose from 'mongoose'

let appModel = mongoose.Schema({
    jsonType: String,
    jsonResult: {},
    updated_time: Date,
    created_time: Date,
});

let app = mongoose.model('app', appModel);
export default app