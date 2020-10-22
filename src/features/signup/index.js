import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import Messages from '../notifications/Messages';
import Errors from '../notifications/Errors';

import { signupRequest } from './actions';

class Signup extends Component {

    // pass prototype for validations

    static propTypes = {
        handleSubmit: PropTypes.func,
        signupRequest: PropTypes.func,
        signup: PropTypes.shape({
            requesting: PropTypes.bool,
            successful: PropTypes.bool,
            messages: PropTypes.array,
            errors: PropTypes.array,
        }),
    }

    submit = (values) => {
        this.props.signupRequest(values);
    }

    render () {

        const {
            handleSubmit,
            signup: {
                requesting,
                successful,
                messages,
                errors,
            },
        } = this.props;

        return (
            <div className='signup'>
                <form className='data-form' onSubmit={handleSubmit(this.submit)} >
                    <h1>Signup</h1>
                    <label htmlFor='email'>Email</label>
                    <Field
                        name='email_address'
                        type='email'
                        id='email_address'
                        className='email_address'
                        label='Email'
                        component='input'
                    />
                    <label htmlFor='password'>password</label>
                    <Field
                        name='password'
                        type='password'
                        id='password'
                        className='password'
                        label='Password'
                        component='input'
                    />
                    <label htmlFor='first_name'>First Name</label>
                    <Field
                        name='first_name'
                        type='text'
                        id='first_name'
                        className='first_name'
                        label='FirstName'
                        component='input'
                    />
                    <label htmlFor='last_name'>Last Name</label>
                    <Field
                        name='last_name'
                        type='text'
                        id='last_name'
                        className='last_name'
                        label='LastName'
                        component='input'
                    />
                    <label htmlFor='address'>Address</label>
                    <Field
                        name='address'
                        type='text'
                        id='address'
                        className='address'
                        label='Address'
                        component='input'
                    />
                    <label htmlFor='mobile'>Mobile Number</label>
                    <Field
                        name='mobile'
                        type='text'
                        id='mobile'
                        className='mobile'
                        label='Mobile'
                        component='input'
                    />
                    <label htmlFor='company'>Company</label>
                    <Field
                        name='company'
                        type='text'
                        id='company'
                        className='company'
                        label='Company'
                        component='input'
                    />
                    <button action='submit'>SIGNUP</button>
                </form>

                <div className='auth-messages'>
                    {!requesting && !!errors.length && (
                        <Errors message='Failure to signup due to: ' errors={errors}/>
                    )}
                    {!requesting && !!messages.length && (
                        <Messages messages={messages} />
                    )}
                    {!requesting && successful && (
                        <div>
                            Signup successful! <Link to='/login'>Click here to Login </Link>
                        </div>
                    )}
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    signup: state.signup,
})

const connected = connect(mapStateToProps, { signupRequest })(Signup);

const formed = reduxForm({
    form: 'signup',
})(connected);

export default formed;
