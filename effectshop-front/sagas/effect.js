import { all,fork, takeLatest,put,delay,call} from "@redux-saga/core/effects";
import { LOAD_EFFECTS_REQUEST, LOAD_EFFECTS_SUCCESS,LOAD_EFFECTS_FAILURE,
         ADD_EFFECTS_REQUEST,ADD_EFFECTS_SUCCESS,ADD_EFFECTS_FAILURE } from "../reducers/effect";
import {loadEffects} from '../reducers/effect'
import axios from "axios";
function loadEffectAPI(data){//4
    return axios.post('/api/login',data)
}

function* loadEffect(action){//3
    try{
    //const result = yield call(logInAPI,action.data);//call: 비동기에서 await 같은 개념이다.
    yield delay(1000);  //백엔드 구축 안했을때 비동기 느낌 나기 위해서 1초딜레이 하고 실행.
    yield put({
        type:LOAD_EFFECTS_SUCCESS,
        data: loadEffects(4),
    })
    }catch(err){
        console.log(err);
        yield put({ // redux 액션으로 보내줌. put:dispatch라고 생각하면 편하다.
            type:LOAD_EFFECTS_FAILURE,
            error:err.response.data,
        })
    }
}


function addEffectAPI(data){//4
    return axios.post('/effect',data)
}

function* addEffect(action){//3
    try{
    const result = yield call(addEffectAPI,action.data);//call: 비동기에서 await 같은 개념이다.
    //yield delay(1000);  //백엔드 구축 안했을때 비동기 느낌 나기 위해서 1초딜레이 하고 실행.
    yield put({
        type:ADD_EFFECTS_SUCCESS,
        data: result.data
    })
    }catch(err){
        console.error(err);
        yield put({ // redux 액션으로 보내줌. put:dispatch라고 생각하면 편하다.
            type:ADD_EFFECTS_FAILURE,
            error:err.response.data,
        })
    }
}


function* watchLoadEffects(){
    yield takeLatest(LOAD_EFFECTS_REQUEST,loadEffect);
}
function* watchAddEffects(){
    yield takeLatest(ADD_EFFECTS_REQUEST,addEffect);
}


export default function* effectSaga(){
    yield all([
        fork(watchLoadEffects),
        fork(watchAddEffects),
    ])
}