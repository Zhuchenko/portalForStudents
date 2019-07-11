import mongoose from 'mongoose'

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Schema.Types.ObjectId;

// todo: have to keep subtraction time in schema
export const StudentSchema = new Schema({
    _id: String,
    name: String,
    password: String,
    workdays: [{
        type: String,
        ref: 'Workday'
    }],
    // contracts: [{
    //     type: String,
    //     ref: 'Contract'
    // }]
});

export const ContractSchema = new Schema({
    number: {
        type: String,
        unique: true,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    startingDay: {
        type: Date,
        required: true
    },
    endingDay: {
        type: Date,
        required: true
    },
    hoursPerWeek: {
        type: Number,
        required: true
    },
    // todo: ссылку на коллекцию workdays мы можем получить здесь через ее привязку к students
    // workdays: [{
    //     type: String,
    //     ref: 'Workday'
    // }],
    student: {
        type: String,
        ref: 'Student'
    },
});

export const WorkDaysSchema = new Schema({
    _id: String,
    times: [{
        startTime: Date,
        finishTime: Date
    }],
    student: {
        type: String,
        ref: 'Student'
    }
});