import { all,fork,takeLatest,put,delay} from "@redux-saga/core/effects";
import { LOG_IN_SUCCESS,LOG_IN_FAILURE,LOG_IN_REQUEST } from "../reducers/user";
import axios from "axios";

function logInAPI(data){//4
    return axios.post('/api/login',data)
}

function* logIn(action){//3
    try{
    //const result = yield call(logInAPI,action.data);//call: 비동기에서 await 같은 개념이다.

    yield delay(1000);  //백엔드 구축 안했을때 비동기 느낌 나기 위해서 1초딜레이 하고 실행.
    yield put({
        type:LOG_IN_SUCCESS,
        data:action.data
    })

    }catch(err){
        yield put({ // redux 액션으로 보내줌. put:dispatch라고 생각하면 편하다.
            type:LOG_IN_FAILURE,
            data:err.response.data,
        })
    }
}

function* watchLogIn(){//2.
    yield takeLatest(LOG_IN_REQUEST,logIn); //take 한번만 실행되고 이벤트 삭제된다.
    // 이벤트 리스너 느낌을 준다.
}

export default function* userSaga(){//1
    yield all([
        fork(watchLogIn),
    ])
}