import {all,fork} from 'redux-saga/effects';
import userSaga from './user';
import effectSaga from './effect';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3065'

export default function* rootSaga(){
    yield all([
        fork(effectSaga),
        fork(userSaga),
    ]);
}