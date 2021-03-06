import { all,fork, takeLatest,put,delay,call} from "@redux-saga/core/effects";
import { LOAD_EFFECTS_REQUEST, LOAD_EFFECTS_SUCCESS,LOAD_EFFECTS_FAILURE,
         ADD_EFFECTS_REQUEST,ADD_EFFECTS_SUCCESS,ADD_EFFECTS_FAILURE ,
        REMOVE_EFFECTS_REQUEST,REMOVE_EFFECTS_SUCCESS,REMOVE_EFFECTS_FAILURE,
        LOAD_EFFECT_DETAIL_REQUEST,LOAD_EFFECT_DETAIL_SUCCESS,LOAD_EFFECT_DETAIL_FAILURE, 
        LIKE_EFFECT_REQUEST,LIKE_EFFECT_SUCCESS,LIKE_EFFECT_FAILURE, 
        UNLIKE_EFFECT_REQUEST,UNLIKE_EFFECT_SUCCESS,UNLIKE_EFFECT_FAILURE,
        SEARCH_EFFECTS_REQUEST,SEARCH_EFFECTS_SUCCESS,SEARCH_EFFECTS_FAILURE,
        FIRST_LOAD_EFFECTS_REQUEST,FIRST_LOAD_EFFECTS_SUCCESS,FIRST_LOAD_EFFECTS_FAILURE} from "../reducers/effect";
import { ADD_EFFECT_TO_ME,LOAD_MY_INFO_FAILURE,REMOVE_EFFECT_OF_ME} from "../reducers/user";
import axios from "axios";
function loadEffectsAPI(data){//4
    return axios.get(`/effects?lastId=${data || 0}`);
}

function* loadEffects(action){//3
    try{
    const result = yield call(loadEffectsAPI,action.lastId);//call: 비동기에서 await 같은 개념이다.
    //yield delay(1000);  //백엔드 구축 안했을때 비동기 느낌 나기 위해서 1초딜레이 하고 실행.

    yield put({
        type:LOAD_EFFECTS_SUCCESS,
        data: result.data,
    })
    }catch(err){
        console.error(err);
        yield put({ // redux 액션으로 보내줌. put:dispatch라고 생각하면 편하다.
            type:LOAD_EFFECTS_FAILURE,
            error:err.response.data,
        })
    }
}


function loadEffectAPI(data){//4
    return axios.get(`/effect/${data}`);
}

function* loadEffect(action){//3
    try{
    const result = yield call(loadEffectAPI,action.data);//call: 비동기에서 await 같은 개념이다.
    //yield delay(1000);  //백엔드 구축 안했을때 비동기 느낌 나기 위해서 1초딜레이 하고 실행.

    yield put({
        type:LOAD_EFFECT_DETAIL_SUCCESS,
        data: result.data,
    })
    }catch(err){
        console.error(err);
        yield put({ // redux 액션으로 보내줌. put:dispatch라고 생각하면 편하다.
            type:LOAD_EFFECT_DETAIL_FAILURE,
            error:err.response.data,
        })
    }
}

function firstLoadEffectsAPI(){//4
    return axios.get(`/effects/first`);
}

function* firstLoadEffects(){//3
    try{
    const result = yield call(firstLoadEffectsAPI);//call: 비동기에서 await 같은 개념이다.
    //yield delay(1000);  //백엔드 구축 안했을때 비동기 느낌 나기 위해서 1초딜레이 하고 실행.

    yield put({
        type:FIRST_LOAD_EFFECTS_SUCCESS,
        data: result.data,
    })
    }catch(err){
        console.error(err);
        yield put({ // redux 액션으로 보내줌. put:dispatch라고 생각하면 편하다.
            type:FIRST_LOAD_EFFECTS_FAILURE,
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
    yield put({
        type:ADD_EFFECT_TO_ME,
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


function removeEffectAPI(data){//4
    return axios.delete(`/effect/${data}`);
}

function* removeEffect(action){//3
    try{
    const result = yield call(removeEffectAPI,action.data);//call: 비동기에서 await 같은 개념이다.
    //yield delay(1000);  //백엔드 구축 안했을때 비동기 느낌 나기 위해서 1초딜레이 하고 실행.
    yield put({
        type:REMOVE_EFFECTS_SUCCESS,
        data: result.data
    })
    yield put({
        type:REMOVE_EFFECT_OF_ME,
        data: action.data
    })
    }catch(err){
        console.error(err);
        yield put({ // redux 액션으로 보내줌. put:dispatch라고 생각하면 편하다.
            type:REMOVE_EFFECTS_FAILURE,
            error:err.response.data,
        })
    }
}


function likeEffectAPI(data){//4
    return axios.patch(`/effect/${data}/like`);
}

function* likeEffect(action){//3
    try{
    const result = yield call(likeEffectAPI,action.data);//call: 비동기에서 await 같은 개념이다.
    //yield delay(1000);  //백엔드 구축 안했을때 비동기 느낌 나기 위해서 1초딜레이 하고 실행.

    yield put({
        type:LIKE_EFFECT_SUCCESS,
        data: result.data,
    })
    }catch(err){
        console.error(err);
        yield put({ // redux 액션으로 보내줌. put:dispatch라고 생각하면 편하다.
            type:LIKE_EFFECT_FAILURE,
            error:err.response.data,
        })
    }
}


function unLikeEffectAPI(data){//4
    return axios.delete(`/effect/${data}/like`);
}

function* unLikeEffect(action){//3
    try{
    const result = yield call(unLikeEffectAPI,action.data);//call: 비동기에서 await 같은 개념이다.
    //yield delay(1000);  //백엔드 구축 안했을때 비동기 느낌 나기 위해서 1초딜레이 하고 실행.

    yield put({
        type:UNLIKE_EFFECT_SUCCESS,
        data: result.data,
    })
    }catch(err){
        console.error(err);
        yield put({ // redux 액션으로 보내줌. put:dispatch라고 생각하면 편하다.
            type:UNLIKE_EFFECT_FAILURE,
            error:err.response.data,
        })
    }
}

function searchEffectsAPI(data){//4
    return axios.get(`/effects/search?keyword=${data}`);
}

function* searchEffects(action){//3
    try{
    const result = yield call(searchEffectsAPI,action.data);//call: 비동기에서 await 같은 개념이다.
    //yield delay(1000);  //백엔드 구축 안했을때 비동기 느낌 나기 위해서 1초딜레이 하고 실행.

    yield put({
        type:SEARCH_EFFECTS_SUCCESS,
        data: result.data,
    })
    }catch(err){
        console.error(err);
        yield put({ // redux 액션으로 보내줌. put:dispatch라고 생각하면 편하다.
            type:SEARCH_EFFECTS_FAILURE,
            error:err.response.data,
        })
    }
}




function* watchLoadEffects(){
    yield takeLatest(FIRST_LOAD_EFFECTS_REQUEST,firstLoadEffects);
}
function* watchFirstLoadEffects(){
    yield takeLatest(LOAD_EFFECTS_REQUEST,loadEffects);
}
function* watchAddEffect(){
    yield takeLatest(ADD_EFFECTS_REQUEST,addEffect);
}
function* watchRemoveEffect(){
    yield takeLatest(REMOVE_EFFECTS_REQUEST,removeEffect);
}
function* watchLoadEffect(){
    yield takeLatest(LOAD_EFFECT_DETAIL_REQUEST,loadEffect);
}
function* watchLikeEffect(){
    yield takeLatest(LIKE_EFFECT_REQUEST, likeEffect);
}
function* watchUnLikeEffect(){
    yield takeLatest(UNLIKE_EFFECT_REQUEST, unLikeEffect);
}
function* watchSearchEffects(){
    yield takeLatest(SEARCH_EFFECTS_REQUEST,searchEffects);
}
export default function* effectSaga(){
    yield all([
        fork(watchLoadEffects),
        fork(watchFirstLoadEffects),
        fork(watchAddEffect),
        fork(watchRemoveEffect),
        fork(watchLoadEffect),
        fork(watchLikeEffect),
        fork(watchUnLikeEffect),
        fork(watchSearchEffects),
    ])
}