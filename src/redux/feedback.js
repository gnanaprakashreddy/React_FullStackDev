import * as ActionTypes from './ActionTypes';

const Feedback = (state={feedback:[]},action)=>{
    switch(action.type){
        case ActionTypes.ADD_FEEDBACK:
            var f = action.payload;
            return { ...state, feedback: state.feedback.concat(f)};
        default:
            return state;
    }
}

export default Feedback;