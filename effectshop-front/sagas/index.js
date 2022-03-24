import {all,fork} from 'redux-saga/effects';
import userSaga from './user';
import effectSaga from './effect';
import axios from 'axios';
axios.defaults.baseURL = process.env.NODE_ENV==="development"? "https://api.effectshop-htmlcss.ml":"http://localhost:3065"
axios.defaults.withCredentials=true;
export default function* rootSaga(){
    yield all([
        fork(effectSaga),
        fork(userSaga),
    ]);
}