import express from 'express'
import { Student } from '../mongoose/api/student'
import passport from 'passport'

const router = express.Router();

router.route('/signup')
    .post((req, res) => {
            return Student.findOne({email: req.body.email}, (error, user) => {
                if (error) {
                    return res.status(500).end();
                }
                if (user) {
                    return res.status(422).end();
                } else {
                    let student = new Student({email: req.body.email, username: req.body.username});
                    student.generateHash(req.body.password);

                    return student.save()
                        .then(() => {
                            return passport.authenticate('local', { session: false }, (err, passportUser) => {
                                if(err) {
                                    return res.status(500).end();
                                }
                                if(passportUser) {
                                    return res.json({ username: passportUser.username });
                                }
                                return res.status(400).info;
                            })(req, res);
                        });
                }
            })
    });

router.route('/signin')
    .get((req, res) => {
        const username =
            req.isAuthenticated() ?
                req.user.username
                :
                '';
        res.json({ username })
    })
    .post((req, res) => {
        return passport.authenticate('local', { session: false }, (err, passportUser) => {
            if(err) {
                return res.status(500).end();
            }
            if(passportUser) {
                return res.json({ username: passportUser.username });
            }
            return res.status(400).info;
        })(req, res);
    });

router.route('/signout')
    .get((req, res) => {
        req.logout();
        req.session.destroy(() => {
            res.redirect('/')
        })
    });

export default router