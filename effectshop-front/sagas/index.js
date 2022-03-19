import {all,fork} from 'redux-saga/effects';
import userSaga from './user';
import effectSaga from './effect';
import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL
axios.defaults.withCredentials=true;
export default function* rootSaga(){
    yield all([
        fork(effectSaga),
        fork(userSaga),
    ]);
}