import DISHES from '../shared/dishes';
import LEADERS from '../shared/leaders';
import COMMENTS from '../shared/comments';
import PROMOTIONS from '../shared/promotions';

export const initialState = {
    dishes : DISHES,
    comments : COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS,
    
};

export const Reducer =(state=initialState, action)=>{
    return state;
};