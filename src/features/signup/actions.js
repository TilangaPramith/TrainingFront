import { SIGNUP_REQUESTING } from  './constants';

const signupRequest = function signupRequest ({ email_address, password, first_name, last_name, address, mobile, company }) {
    return {
        type: SIGNUP_REQUESTING,
        email_address,
        password,
        first_name,
        last_name,
        address,
        mobile,
        company,
    }
}

export { signupRequest };