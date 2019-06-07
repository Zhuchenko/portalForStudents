import mongoose from 'mongoose'
import { StudentSchema } from '../schemas'
import passportLocalMongoose from 'passport-local-mongoose'
const passport = require('passport');
const LocalStrategy = require('passport-local');

StudentSchema.plugin(passportLocalMongoose);
export const Student = mongoose.model('Student', StudentSchema, 'students')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, (email, password, done) => {
    Student.findOne({ email })
        .then((student) => {
            if(!student || !student.validatePassword(password)) {
                return done(null, false, { errors: { 'email or password': 'is invalid' } });
            }
            return done(null, student);
        }).catch(done);
}));

export const getStudentById = (studentId) => {
    return Student.findOne({ _id: studentId }).exec();
};

export const addStudent = (newStudent) => {
    return Student.create(newStudent)
        .then(student => {
            return student;
        });
};

export const deleteStudent = (studentId) => {
    return Student.findByIdAndRemove(studentId).exec();
};