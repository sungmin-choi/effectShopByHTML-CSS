import { all,fork,takeLatest,put,delay,call} from "@redux-saga/core/effects";
import { LOG_IN_SUCCESS,LOG_IN_FAILURE,LOG_IN_REQUEST, GITHUB_REQUEST,
        LOG_OUT_REQUEST,LOG_OUT_SUCCESS,LOG_OUT_FAILURE,
        SIGN_UP_REQUEST,SIGN_UP_SUCCESS,SIGN_UP_FAILURE } from "../reducers/user";
import axios from "axios";

function logInAPI(data){//4
    return axios.post('/user/local',data)
}

function* logIn(action){//3
    try{
    const result = yield call(logInAPI,action.data);//call: 비동기에서 await 같은 개념이다.
    console.log(result.data);
    //yield delay(1000);  //백엔드 구축 안했을때 비동기 느낌 나기 위해서 1초딜레이 하고 실행.
    yield put({
        type:LOG_IN_SUCCESS,
        data:result.data
    })

    }catch(err){
        yield put({ // redux 액션으로 보내줌. put:dispatch라고 생각하면 편하다.
            type:LOG_IN_FAILURE,
            error:err.response.data,
        })
    }
}

function logOutAPI(){//4
    return axios.post('/user/logout');
}

function* logOut(){//3
    try{
    yield call(logOutAPI);//call: 비동기에서 await 같은 개념이다.

    //yield delay(1000);  //백엔드 구축 안했을때 비동기 느낌 나기 위해서 1초딜레이 하고 실행.
    yield put({
        type:LOG_OUT_SUCCESS,
    })
    }catch(err){
        yield put({ // redux 액션으로 보내줌. put:dispatch라고 생각하면 편하다.
            type:LOG_OUT_FAILURE,
            error:err.response.data,
        })
    }
}

function signUpAPI(data){//4
    return axios.post('/user',data)
}

function* signUp(action){//3
    try{
    const result = yield call(signUpAPI,action.data);
    //yield delay(1000);  //백엔드 구축 안했을때 비동기 느낌 나기 위해서 1초딜레이 하고 실행.
    yield put({
        type:SIGN_UP_SUCCESS,
    })
    }catch(err){
        yield put({ // redux 액션으로 보내줌. put:dispatch라고 생각하면 편하다.
            type:SIGN_UP_FAILURE,
            error:err.response.data,
        })
    }
}



function githubAPI(){//4
    return axios.get('/user/github')
}

function* github(action){//3
    try{
    //const result = yield call(githubAPI);
    //yield delay(1000);  //백엔드 구축 안했을때 비동기 느낌 나기 위해서 1초딜레이 하고 실행.
    yield put({
        type:LOG_IN_SUCCESS,
        //data:result.data,
    })
    }catch(err){
        yield put({ // redux 액션으로 보내줌. put:dispatch라고 생각하면 편하다.
            type:LOG_IN_FAILURE,
            error:err.response.data,
        })
    }
}



function* watchLogIn(){//2.
    yield takeLatest(LOG_IN_REQUEST,logIn); //take 한번만 실행되고 이벤트 삭제된다.
    // 이벤트 리스너 느낌을 준다.
}
function* watchLogOut(){//2.
    yield takeLatest(LOG_OUT_REQUEST,logOut); //take 한번만 실행되고 이벤트 삭제된다.
    // 이벤트 리스너 느낌을 준다.
}
function* watchSignUp(){//2.
    yield takeLatest(SIGN_UP_REQUEST,signUp); //take 한번만 실행되고 이벤트 삭제된다.
    // 이벤트 리스너 느낌을 준다.
}
function* watchGithub(){
    yield takeLatest(GITHUB_REQUEST,github);
}
export default function* userSaga(){//1
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
        fork(watchGithub),
    ])
}