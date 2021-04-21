import mongoose from 'mongoose';

const StudentSchema = new mongoose.model({
    firstName: String,
    lasteName: String,
    yearOfBirth: Number,
    address: String
});

export default mongoose.model('Student', StudentSchema);