import produce from "immer";
import dummyData from "../dummyData";
export const initialized = {
    mainEffects:[],
    loadEffectsLoading:false,
    loadEffectsDone:false,
    loadEffectsError:null,
    addEffectsLoading:false,
    addEffectsDone:false,
    addEffectsError:null,
    hasMoreEffects:true,
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


export const ADD_EFFECTS_REQUEST = "ADD_EFFECTS_REQUEST";
export const ADD_EFFECTS_SUCCESS = "ADD_EFFECTS_SUCCESS";
export const ADD_EFFECTS_FAILURE = "ADD_EFFECTS_FAILURE";

export const LOAD_EFFECTS_REQUEST = "LOAD_EFFECTS_REQUEST";
export const LOAD_EFFECTS_SUCCESS = "LOAD_EFFECTS_SUCCESS";
export const LOAD_EFFECTS_FAILURE = "LOAD_EFFECTS_FAILURE";

const reducer = (state=initialized,action) =>produce(state,(draft)=>{
    switch(action.type){
        case LOAD_EFFECTS_REQUEST:
            draft.loadEffectsLoading = true;
            draft.loadEffectsDone = false;
            break;
        case LOAD_EFFECTS_SUCCESS:
            draft.loadEffectsDone = true;
            draft.loadEffectsLoading = false;
            draft.mainEffects = draft.mainEffects.concat(action.data);
            draft.hasMoreEffects = draft.mainEffects.length<16;
            break;
        case LOAD_EFFECTS_FAILURE:
            draft.loadEffectsDone=false;
            draft.loadEffectsLoading=false;
            draft.loadEffectsError = action.error;
            break;
        case ADD_EFFECTS_REQUEST:
            draft.addEffectsLoading = true;
            draft.addEffectsDone = false;
            break;
        case ADD_EFFECTS_SUCCESS:
            draft.addEffectsDone = true;
            draft.addEffectsLoading = false;
            draft.mainEffects = draft.mainEffects.unshift(action.data);
            draft.hasMoreEffects = draft.mainEffects.length<16;
            break;
        case ADD_EFFECTS_FAILURE:
            draft.addEffectsDone=false;
            draft.addEffectsLoading=false;
            draft.addEffectsError = action.error;
            break;
        default:
            return;
    }
})


export default reducer