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
    Effects:[{id:'1',nickname:'sungmin-choi'},{id:'2',nickname:'sungmin-choi'},
    {id:'3',nickname:'sungmin-choi'},{id:'4',nickname:'sungmin-choi'}]
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';


const reducer = (state = initialized, action) =>{
    switch(action.type){
        case LOG_IN_REQUEST:
            return { //새로운 객체 반환.
                ...state,
                logInLoading:true,
                logInDone:false,
                me:null,
            }
        case LOG_IN_SUCCESS:
            return {
                ...state,
                logInDone:true,
                logInLoading:false,
                logOutDone:false,
                me:dummyUser
            }
        case LOG_IN_FAILURE:
            return {
                ...state,
                logInDone:false,
                logInLoading:false,
                logInError:action.data
            }
        case LOG_OUT_REQUEST:
            return { //새로운 객체 반환.
                ...state,
                logOutLoading:true,
                logOutDone:false,
            }
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                logOutDone:true,
                logOutLoading:false,
                logInDone:false,
                me:null
            }
        case LOG_OUT_FAILURE:
            return {
                ...state,
                logOutDone:false,
                logOutLoading:false,
                logOutError:action.data
            }
        default:
            return state;
    }
}

export default reducer;