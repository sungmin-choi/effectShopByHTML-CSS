import {all,fork} from 'redux-saga/effects';
import userSaga from './user';
import effectSaga from './effect';
export default function* rootSaga(){
    yield all([
        fork(effectSaga),
        fork(userSaga),
    ]);
}