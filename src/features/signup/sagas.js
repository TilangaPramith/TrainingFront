import { call, put, takeLatest } from 'redux-saga/effects';
import { handleApiErrors } from '../lib/api-errors';
import { 
    SIGNUP_REQUESTING,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR
} from './constants';

// ${process.env.REACT_APP_API_URL}

const signupUrl = `${process.env.REACT_APP_API_URL}/registerUser`

function signupApi (email_address, password, first_name, last_name, address, mobile, company ) {
    console.log('come');
    return fetch(signupUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            email_address,
            password,
            first_name,
            last_name,
            address,
            mobile,
            company
        }),
    })
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch ((error) => {throw error})
}

function* signupFlow (action) {
    try {
        const {email_address, password, first_name, last_name, address, mobile, company } = action;
        const response = yield call(signupApi, email_address, password, first_name, last_name, address, mobile, company );
        yield put({ type: SIGNUP_SUCCESS, response })
    } catch (error) {
        yield put({ type: SIGNUP_ERROR, error })
    }
}

function* signupWatcher () {
    yield takeLatest(SIGNUP_REQUESTING, signupFlow)
}

export default signupWatcher;