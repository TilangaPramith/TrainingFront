import SignupSage from './signup/sagas';

export default function* IndexSagas() {
    yield [
        SignupSage(),
    ]
}