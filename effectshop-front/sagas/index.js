import {all,fork} from 'redux-saga/effects';
import userSaga from './user';
import effectSaga from './effect';
import axios from 'axios';
//"http://api.effectshop-htmlcss.ml"
axios.defaults.baseURL = "http://api.effectshop-htmlcss.ml"
axios.defaults.withCredentials=true;
export default function* rootSaga(){
    yield all([
        fork(effectSaga),
        fork(userSaga),
    ]);
}