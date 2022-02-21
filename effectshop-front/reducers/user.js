import produce from "immer";

export const initialized = {
    logInLoading:false, //로그인 시도중
    logInDone: false,
    logInError:null,
    logOutLoading:false, //로그인 시도중
    logOutDone: false,
    logOutError:null,
    me:null,
    signUpData:{},
    loginData:{}
}

const dummyUser = {
    nickname:'sungmin-choi',
    email:'nameja306@naver.com',
    id:'1',
    Effects:[{id:'2',nickname:'sungmin-choi'},{id:'3',nickname:'sungmin-choi'},
            {id:'4',nickname:'sungmin-choi'}]
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';


const reducer = (state = initialized, action)=>produce(state,(draft)=>{
    switch(action.type){
        case LOG_IN_REQUEST:
            draft.logInLoading=true;
            draft.logInDone = false;
            break;
        case LOG_IN_SUCCESS:
            draft.logInDone=true;
            draft.logInLoading=false;
            draft.logOutDone=false;
            draft.me=dummyUser; 
            break;         
        case LOG_IN_FAILURE:
            draft.logInDone=false;
            draft.logInLoading=false;
            draft.logInError=action.error;
            break;          
        case LOG_OUT_REQUEST:
            draft.logOutLoading=true;
            draft.logOutDone=false;
            break;
        case LOG_OUT_SUCCESS:
            draft.logOutDone=true;
            draft.logOutLoadin=false;
            draft.logInDone=false;
            draft.me=null;
            break;
        case LOG_OUT_FAILURE:
            draft.logOutDone=false;
            draft.logOutLoading=false;
            draft.logOutError=action.error;
            break;
        default:
            break;
    }
})

export default reducer;