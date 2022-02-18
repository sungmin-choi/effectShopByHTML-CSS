export const initialized = {
    isLoggedIn: false,
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

const reducer = (state = initialized, action) =>{
    switch(action.type){
        case "LOG_IN":
            return { //새로운 객체 반환.
                ...state,
                isLoggedIn:true,
                me:dummyUser
            }
        case "LOG_OUT":
            return {
                ...state,
                isLoggedIn:false,
                me:null
            }
        default:
            return state;
    }
}

export default reducer;