import express from 'express'
import { Student } from '../mongoose/api/student'
import passport from 'passport'
import minimist from 'minimist'
import {StudentSchema} from "../mongoose/schemas";

const argv = minimist(process.argv.slice(2))
const serverConfig =
    argv.mode === 'production' ?
        require('../production.server.config')
        :
        require('../development.server.config')

const router = express.Router();

router.route('/login')
    .get((req, res) => {
        const _id =
            req.isAuthenticated() ?
                req.user._id
                :
                '';
        res.json({ _id })
    })
    .post((req, res) => {
        // todo: у allowedLogins нет нигде использования в качестве массива
        const allowedLogins = serverConfig.authorization.allowedLogins;
        if (allowedLogins && allowedLogins.length > 0 && !allowedLogins.includes(req.body._id)) {
            return res.status(403).end()
        }

        return Student.findOne({ _id: req.body._id }, (error, user) => {
            if (error) {
                return res.status(500).end()
            }
            if (user) {
                passport.authenticate('local')(req, res, () => {
                    res.json({ _id: req.user._id })
                });
            } else {
                const student = new Student({
                    _id: req.body._id,
                    name: `nameWith${req.body._id}`
                });
                Student.register(student, req.body.password, (error) => {
                    if (error) {
                        console.error(error);
                        return res.status(500).end()
                    }
                    passport.authenticate('local')(req, res, () => {
                        res.json({ _id: req.user._id })
                    })
                })
            }
        })
    })

router.route('/logout')
    .get((req, res) => {
        req.logout();
        req.session.destroy(() => {
            res.redirect('/')
        })
    })

export default router