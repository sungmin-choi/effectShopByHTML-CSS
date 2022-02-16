export const initialized = {
    isLoggedIn: false,
    user:null,
    signUpData:{},
    loginData:{}
}

const reducer = (state = initialized, action) =>{
    switch(action.type){
        case "LOG_IN":
            return { //새로운 객체 반환.
                ...state,
                isLoggedIn:true,
                user:action.data,
            }
        case "LOG_OUT":
            return {
                ...state,
                isLoggedIn:false,
                user:null
            }
        default:
            return state;
    }
}

export default reducer;