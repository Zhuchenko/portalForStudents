import mongoose from 'mongoose'
import crypto from 'crypto'

const { Schema } = mongoose;

export const StudentSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    _hash: {
        type: String
    },
    _salt: {
        type: String
    }
});

StudentSchema.methods.generateHash = function(password) {
    this._salt = crypto.randomBytes(16).toString('hex');
    this._hash = crypto.pbkdf2Sync(password, this._salt, 10000, 512, 'sha512').toString('hex');
};

StudentSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this._salt, 10000, 512, 'sha512').toString('hex');
    return this._hash.toString() === hash.toString();
};

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
    workdays: [{
        date: {
            type: Date,
            unique: true,
            required: true
        },
        time: [{
            startingTime: String,
            endingTime: String,
        }],
        timeWorked: Number
    }],
    student:{
        type: String,
        required: true,
    },
});