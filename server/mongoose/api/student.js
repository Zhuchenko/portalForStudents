import mongoose from 'mongoose'
import { StudentSchema } from '../schemas'
import passportLocalMongoose from 'passport-local-mongoose'

StudentSchema.plugin(passportLocalMongoose, {
    usernameUnique: false,
    usernameField: "_id"
});
export const Student = mongoose.model('Student', StudentSchema, 'students');

export const getStudentById = (studentId) => {
    return Student.findOne({ _id: studentId }).exec();
};

export const addStudent = (newStudent) => {
    return Student.create(newStudent)
        .then(student => {
            return student._id.toString();
        });
};

export const deleteStudent = (studentId) => {
    return Student.findByIdAndRemove(studentId).exec();
};