import {createStore, combineReducers, applyMiddleware} from 'redux';
import Dishes from './dishes';
import Leaders from './leaders';
import Comments from './comments';
import Feedback from './feedback';
import Promotions from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';
import {InitialFeedback} from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            leaders: Leaders,
            comments : Comments,
            promotions: Promotions,
            feedback: Feedback,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}