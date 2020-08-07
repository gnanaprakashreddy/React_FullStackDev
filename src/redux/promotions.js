import * as ActionTypes from './ActionTypes';

const Promotions = (state={isLoading:true ,errMess:null, promotions:[]}, action)=>{
    switch(action.type){
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading:false, errMess:null, promotions:action.payload}
        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoadign:true, errMess:null, promotins:[]}
        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading:false, errMess:action.payload}
        default:
            return state;
    }
}

export default Promotions