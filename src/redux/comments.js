import COMMENTS from '../shared/comments';
import * as ActionTypes from './ActionTypes';

const Comments = (state=COMMENTS, action)=>{
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.id;
            comment.date = new Date().toISOString();
            return state.concat(comment);

        default:
            return state;
    }
}

export default Comments