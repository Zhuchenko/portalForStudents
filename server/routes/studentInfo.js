import express from 'express'
import authenticationCheckMiddleware from "../middlewares/authenticationCheck";
import { getWorkdaysForMonth, getWorkdaysForMonthWithTimestamps } from "../mongoose/api/workdays";


const router = express.Router();

router.route('/workdays')
    .all(authenticationCheckMiddleware)
    .post((req, res) => {
        (async () => {
            const workdays = await getWorkdaysForMonth(req.body._id);
            res.json(workdays);
        })();
    });

router.route('/detailedWorkdays')
    .all(authenticationCheckMiddleware)
    .post((req, res) => {
        (async () => {
            const workdays = await getWorkdaysForMonthWithTimestamps(req.body._id);
            res.json(workdays);
        })();
    });

export default router;