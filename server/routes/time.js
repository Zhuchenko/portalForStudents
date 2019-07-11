import express from 'express'
import authenticationCheckMiddleware from '../middlewares/authenticationCheck'
import { addStartTime, addFinishTime} from "../mongoose/api/workdays";

const router = express.Router();

router.route('/start')
    .all(authenticationCheckMiddleware)
    .post((req, res) => {
        (async () => {
            await addStartTime(req.body._id);
            res.end();
        })();
    });

router.route('/finish')
    .all(authenticationCheckMiddleware)
    .post((req, res) => {
        (async() =>{
            await addFinishTime(req.body._id);
            res.end();
        })();
    });

export default router