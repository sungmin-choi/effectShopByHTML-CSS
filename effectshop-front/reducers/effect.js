import produce from "immer";
import dummyData from "../dummyData";
export const initialized = {
    mainEffects:[],
    loadEffectsLoading:false,
    loadEffectsDone:false,
    loadEffectsError:null,
    firstLoadEffectsLoading:false,
    firstLoadEffectsDone:false,
    firstLoadEffectsError:null,
    loadEffectDetailLoading:false,
    loadEffectDetailDone:false,
    loadEffectDetailError:null,
    effectDetail:null,
    removeEffectsLoading:false,
    removeEffectsDone:false,
    removeEffectsError:null,
    searchEffectsLoading:false,
    searchEffectsDone:false,
    searchEffectsError:null,
    isSearch:false,
    addEffectsLoading:false,
    addEffectsDone:false,
    addEffectsError:null,
    hasMoreEffects:true,
    unLikeEffectLoading:false,
    unLikeEffectDone:false,
    unLikeEffectError:null,
    likeEffectLoading:false,
    likeEffectDone:false,
    likeEffectError:null,
}

const loadMoreEffects = () =>{
    let index =0;
    return function(num){
        const effects = dummyData.splice(index,index+num);
        index = index+num;
        return effects;
    }
}
export const loadEffects = loadMoreEffects();

export const SEARCH_EFFECTS_REQUEST = "SEARCH_EFFECTS_REQUSET";
export const SEARCH_EFFECTS_SUCCESS = "SEARCH_EFFECTS_SUCCESS";
export const SEARCH_EFFECTS_FAILURE = "SEARCH_EFFECTS_FAILURE";

export const LIKE_EFFECT_REQUEST = "LIKE_EFFECT_REQUEST";
export const LIKE_EFFECT_SUCCESS = "LIKE_EFFECT_SUCCESS";
export const LIKE_EFFECT_FAILURE = "LIKE_EFFECT_FAILURE";

export const UNLIKE_EFFECT_REQUEST = "UNLIKE_EFFECT_REQUEST";
export const UNLIKE_EFFECT_SUCCESS = "UNLIKE_EFFECT_SUCCESS";
export const UNLIKE_EFFECT_FAILURE = "UNLIKE_EFFECT_FAILURE";

export const LOAD_EFFECT_DETAIL_REQUEST = "LOAD_EFFECT_DETAIL_REQUEST";
export const LOAD_EFFECT_DETAIL_SUCCESS = "LOAD_EFFECT_DETAIL_SUCCESS";
export const LOAD_EFFECT_DETAIL_FAILURE = "LOAD_EFFECT_DETAIL_FAILURE";

export const ADD_EFFECTS_REQUEST = "ADD_EFFECTS_REQUEST";
export const ADD_EFFECTS_SUCCESS = "ADD_EFFECTS_SUCCESS";
export const ADD_EFFECTS_FAILURE = "ADD_EFFECTS_FAILURE";

export const FIRST_LOAD_EFFECTS_REQUEST = "FIRST_LOAD_EFFECTS_REQUEST";
export const FIRST_LOAD_EFFECTS_SUCCESS = "FIRST_LOAD_EFFECTS_SUCCESS";
export const FIRST_LOAD_EFFECTS_FAILURE = "FIRST_LOAD_EFFECTS_FAILURE";

export const LOAD_EFFECTS_REQUEST = "LOAD_EFFECTS_REQUEST";
export const LOAD_EFFECTS_SUCCESS = "LOAD_EFFECTS_SUCCESS";
export const LOAD_EFFECTS_FAILURE = "LOAD_EFFECTS_FAILURE";

export const REMOVE_EFFECTS_REQUEST = "REMOVE_EFFECTS_REQUEST";
export const REMOVE_EFFECTS_SUCCESS = "REMOVE_EFFECTS_SUCCESS";
export const REMOVE_EFFECTS_FAILURE = "REMOVE_EFFECTS_FAILURE";

const reducer = (state=initialized,action) =>produce(state,(draft)=>{
    switch(action.type){
        case REMOVE_EFFECTS_REQUEST:
            draft.removeEffectsLoading = true;
            draft.removeEffectsDone = false;
            break;
        case REMOVE_EFFECTS_SUCCESS:
            draft.removeEffectsDone = true;
            draft.removeEffectsLoading = false;
            //draft.mainEffects = draft.mainEffects.concat(action.data);
            //draft.hasMoreEffects = draft.mainEffects.length<16;
            break;
        case REMOVE_EFFECTS_FAILURE:
            draft.removeEffectsDone=false;
            draft.removeEffectsLoading=false;
            draft.removeEffectsError = action.error;
            break;
        case FIRST_LOAD_EFFECTS_REQUEST:
            draft.firstLoadEffectsLoading = true;
            draft.firstLoadEffectsDone = false;
            draft.mainEffects =[];
            draft.effectDetail = null;
            draft.isSearch = false;
            break;
        case FIRST_LOAD_EFFECTS_SUCCESS:
            draft.firstLoadEffectsDone = true;
            draft.firstLoadEffectsLoading = false;
            draft.mainEffects.push(...action.data);
            draft.hasMoreEffects = action.data.length === 4;
            break;
        case FIRST_LOAD_EFFECTS_FAILURE:
            draft.firstLoadEffectsDone=false;
            draft.firstLoadEffectsLoading=false;
            draft.firstLoadEffectsError = action.error;
            break;
        case LOAD_EFFECTS_REQUEST:
            draft.loadEffectsLoading = true;
            draft.loadEffectsDone = false;
            draft.effectDetail = null;
            draft.isSearch = false;
            break;
        case LOAD_EFFECTS_SUCCESS:
            draft.loadEffectsDone = true;
            draft.loadEffectsLoading = false;
            draft.mainEffects = draft.mainEffects.concat(action.data);
            draft.hasMoreEffects = action.data.length === 4;
            break;
        case LOAD_EFFECTS_FAILURE:
            draft.loadEffectsDone=false;
            draft.loadEffectsLoading=false;
            draft.loadEffectsError = action.error;
            break;
        case SEARCH_EFFECTS_REQUEST:
            draft.searchEffectsLoading = true;
            draft.searchEffectsDone = false;
            draft.searchEffectsError = null;
            draft.hasMoreEffects = true;
            break;
        case SEARCH_EFFECTS_SUCCESS:
            draft.searchEffectsDone = true;
            draft.searchEffectsLoading = false;
            draft.mainEffects = [...action.data];
            draft.searchEffectsError = null;
            draft.isSearch = true;
            break;
        case SEARCH_EFFECTS_FAILURE:
            draft.searchEffectsDone=false;
            draft.searchEffectsLoading=false;
            draft.searchEffectsError = action.error;
            break;
        case LOAD_EFFECT_DETAIL_REQUEST:
            draft.loadEffectDetailLoading = true;
            draft.loadEffectDetailDone = false;
            draft.effectDetail = null;
            break;
        case LOAD_EFFECT_DETAIL_SUCCESS:
            draft.loadEffectDetailDone = true;
            draft.loadEffectDetailLoading = false;
            draft.effectDetail = action.data;
            break;
        case LOAD_EFFECT_DETAIL_FAILURE:
            draft.loadEffectDetailDone=false;
            draft.loadEffectDetailLoading=false;
            draft.effectDetail =null;
            draft.loadEffectDetailError = action.error;
            break;
        case ADD_EFFECTS_REQUEST:
            draft.addEffectsLoading = true;
            draft.addEffectsDone = false;
            break;
        case ADD_EFFECTS_SUCCESS:
            draft.addEffectsDone = true;
            draft.addEffectsLoading = false;
            draft.mainEffects.unshift(action.data);
            break;
        case ADD_EFFECTS_FAILURE:
            draft.addEffectsDone=false;
            draft.addEffectsLoading=false;
            draft.addEffectsError = action.error;
            break;
        case LIKE_EFFECT_REQUEST:
            draft.likeEffectLoading = true;
            draft.likeEffectDone = false;
            draft.likeEffectError = false;
            draft.unLikeEffectError = false;
            break;
        case LIKE_EFFECT_SUCCESS:
            const effect = draft.mainEffects.find((v)=>v.id === action.data.EffectId);
            effect.Likers.push({id:action.data.UserId});
            draft.likeEffectDone = true;
            draft.likeEffectLoading = false;
            break;
        case LIKE_EFFECT_FAILURE:
            draft.likeEffectDone=false;
            draft.likeEffectLoading=false;
            draft.likeEffectError = action.error;
            break;
        case UNLIKE_EFFECT_REQUEST:
            draft.unLikeEffectLoading = true;
            draft.unLikeEffectDone = false;
            draft.likeEffectError = false;
            draft.unLikeEffectError = false;
            break;
        case UNLIKE_EFFECT_SUCCESS:{
            const effect = draft.mainEffects.find((v)=>v.id === action.data.EffectId);
            effect.Likers = effect.Likers.filter((v)=>v.id !== action.data.UserId);
            draft.unLikeEffectDone = true;
            draft.unLikeEffectLoading = false;
            break;
        }
        case UNLIKE_EFFECT_FAILURE:
            draft.unLikeEffectDone=false;
            draft.unLikeEffectLoading=false;
            draft.unLikeEffectError = action.error;
            break;
        default:
            return;
    }
})


export default reducer