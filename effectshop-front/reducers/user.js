import produce from "immer";

export const initialized = {
    githubLoading:false, //깃허브 로그인 시도중
    logInLoading:false, //로그인 시도중
    logInDone: false,
    logInError:null,
    logOutLoading:false, //로그인 시도중
    logOutDone: false,
    logOutError:null,
    signUpLoading:false, //회원가입 시도중
    signUpDone: false,
    signUpError:null,
    loadMyInfoLoading:false, //유저정보 로드 시도중
    loadMyInfoDone: false,
    loadMyInfoError:null,
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

export const GITHUB_REQUEST = 'GITHUB_REQUEST';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const ADD_EFFECT_TO_ME = 'ADD_EFFECT_TO_ME';
export const REMOVE_EFFECT_OF_ME = 'REMOVE_EFFECT_TO_ME';

const reducer = (state = initialized, action)=>produce(state,(draft)=>{
    switch(action.type){
        case ADD_EFFECT_TO_ME:
            draft.me.Effects.unshift(action.data);
            break;
        case REMOVE_EFFECT_OF_ME:
            draft.me.Effects = draft.me.Effects.filter((effect)=>effect.id!==Number(action.data));
            break;           
        case GITHUB_REQUEST:
            draft.githubLoading=true;
            break;

        case SIGN_UP_REQUEST:
            draft.signUpLoading=true;
            draft.signUpDone = false;
            draft.signUpError = null;
            break;
        case SIGN_UP_SUCCESS:
            draft.signUpDone=true;
            draft.signUpLoading=false;
            draft.signUpError = null;

            draft.githubLoading = false;
            break;         
        case SIGN_UP_FAILURE:
            draft.signUpDone=false;
            draft.signUpLoading=false;
            draft.signUpError=action.error;

            draft.githubLoading = false;
            break;     
        case LOG_IN_REQUEST:
            draft.logInLoading=true;
            draft.logInDone = false;
            draft.logInError = null;
            break;
        case LOG_IN_SUCCESS:
            draft.logInDone=true;
            draft.logInLoading=false;
            draft.logInError = null;
            draft.logOutDone = false;
            draft.me=action.data; 

            draft.githubLoading = false;
            break;         
        case LOG_IN_FAILURE:
            draft.logInDone=false;
            draft.logInLoading=false;
            draft.me = null;
            draft.logInError=action.error;
            break;          
        case LOG_OUT_REQUEST:
            draft.logOutLoading=true;
            draft.logOutDone=false;
            draft.logOutError = null;
            break;
        case LOG_OUT_SUCCESS:
            draft.logOutDone=true;
            draft.logOutLoading=false;
            draft.logOutError = null;
            draft.logInDone = false;
            draft.me=null;
            break;
        case LOG_OUT_FAILURE:
            draft.logOutDone=false;
            draft.logOutLoading=false;
            draft.logOutError=action.error;
            break;
        case LOAD_MY_INFO_REQUEST:
            draft.loadMyInfoLoading=true;
            draft.loadMyInfoDone=false;
            draft.loadMyInfoError = null;
            break;
        case LOAD_MY_INFO_SUCCESS:
            draft.loadMyInfoDone=true;
            draft.loadMyInfoLoading=false;
            draft.loadMyInfoError = null;
            draft.logInDone = true;
            draft.me=action.data;
            break;
        case LOAD_MY_INFO_FAILURE:
            draft.loadMyInfoDone=false;
            draft.loadMyInfoLoading=false;
            draft.loadMyInfoError=action.error;
            draft.me=null;
            break;
        default:
            break;
    }
})

export default reducer;