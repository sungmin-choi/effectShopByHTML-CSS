import {all,fork} from 'redux-saga/effects';
import userSaga from './user';
import effectSaga from './effect';
import axios from 'axios';

axios.defaults.baseURL = "http://13.125.96.64"
axios.defaults.withCredentials=true;
export default function* rootSaga(){
    yield all([
        fork(effectSaga),
        fork(userSaga),
    ]);
}