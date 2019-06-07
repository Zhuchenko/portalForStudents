import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import * as actions from '../actions'
import classNames from './scss/signInForm.module.scss'

class SignUpForm extends Component {
    handleChangedEmail = (event) => {
        const email = event.target.value;
        this.props.enterEmail({email});
    };

    handleChangedPassword = (event) => {
        const password = event.target.value;
        this.props.enterPassword({password});
    };

    handleChangedUsername = (event) => {
        const username = event.target.value;
        this.props.enterUsername({username});
    };

    signUp = () => {
        const {email, password, username} = this.props;
        this.props.signup({email, password, username});
    };

    render() {
        const {email, password, username, hideForm} = this.props;
        const {signIn__form, signIn__input, signIn__button} = classNames;
        const signIn__button_panel = classNames['signIn__button-panel'];

        return (
            <div className={signIn__form}>
                <input
                    type='text'
                    placeholder="email"
                    onChange={this.handleChangedEmail}
                    value={email}
                    className={signIn__input}/>
                <input
                    type='text'
                    placeholder="username"
                    onChange={this.handleChangedUsername}
                    value={username}
                    className={signIn__input}/>
                <input
                    type='text'
                    placeholder="password"
                    onChange={this.handleChangedPassword}
                    value={password}
                    className={signIn__input}/>

                <div className={signIn__button_panel}>
                    <button onClick={this.signUp} className={signIn__button}>Sign up</button>
                    <button onClick={hideForm} className={signIn__button}>Cancel</button>
                </div>
            </div>
        )
    }
}

SignUpForm.propTypes = {
    signup: PropTypes.func.isRequired,
    hideForm: PropTypes.func.isRequired,
    enterEmail: PropTypes.func.isRequired,
    enterPassword: PropTypes.func.isRequired,
    enterUsername: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
};

export default connect(state => ({
    email: state.authorization.email,
    password: state.authorization.password,
    username: state.authorization.username
}), actions)(SignUpForm)