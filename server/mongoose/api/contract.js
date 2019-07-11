import mongoose from 'mongoose'
import { ContractSchema } from '../schemas'
import getDiffBetweenTime from '../../utilities/getDiffBetweenTime'
import areEqualDates from '../../utilities/areEqualDates'

export const Contract = mongoose.model('Contract', ContractSchema, 'contracts')

export const getContractById = async (contractId) => {
    return Contract.findOne({ _id: contractId }).exec()
};

export const getActiveContractByStudent = async (_id) => {
    return Contract.findOne({ student: _id, status: 'Active' }).exec()
};

export const addContract = async (newContract) => {
    const contract = await Contract.create(newContract)
    return contract._id.toString();
};

export const updateContract = async (contractId, contractNewState) => {
    await Contract.updateOne({_id: contractId}, {
        $set: {
            ...contractNewState
        }
    }).exec();
    return contractId;
};

export const deleteContract = async (contractId) => {
    return Contract.findByIdAndRemove(contractId).exec();
};

export const addWorkday = async (contractId, date) => {
    const workday = {
        date: date,
        time: [],
        timeWorked: 0
    };

    await Contract.updateOne({ _id: contractId }, {
        $push:  {workdays: workday}
    }).exec();
};

export const updateWorkday = async (contractId, workdayId, workday) => {
    await Contract.updateOne({_id: contractId, 'workdays._id': workdayId}, {$set: {'workdays.$': workday}}).exec()
    return workdayId;
};

export const getWorkdayIdByDate = async (contractId, date) => {
    const contract = await Contract.findOne({_id: contractId}).exec();
    const workdays = await contract.workdays.filter((workday) => areEqualDates(workday.date, date));

    if(workdays.length === 0)
        return null;
    return workdays[0]._id.toString();
};

export const getWorkdayById = async (contractId, workdayId) => {
    const contract = await Contract.findOne({_id: contractId}).exec();
    const workdays = await contract.workdays.filter((workday) => workday._id.toString() === workdayId);

    if(workdays.length === 0)
        return null;
    return workdays[0];
};

export const addTime = async (contractId, workdayId, time) => {
    const diff = getDiffBetweenTime(time);
    const workday = await getWorkdayById(contractId, workdayId);

    await Contract.updateOne({_id: contractId, 'workdays._id': workdayId}, {$set: {"workdays.$.timeWorked": diff + workday.timeWorked}, $push: {"workdays.$.time": time}}).exec();

    return diff;
};

