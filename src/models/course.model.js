import mongoose from 'mongoose';

const CourseSchema = new mongoose.model({
    name: String,
    points: Number
});

export default mongoose.model('Course', CourseSchema);