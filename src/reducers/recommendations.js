import { RECEIVE_RECOMMENDATIONS, RECEIVE_RECOMMENDATIONS_ERROR } from '../constants/constants';

const initialState = {
    fetched: false,
    recommendations: {},
    error: null
};

function detail (state = initialState, action){
    switch(action.type) {
        case RECEIVE_RECOMMENDATIONS: {
            return{
                ...state,
                fetched: true,
                recommendations: action.payload
            }
            break;
        }
        case RECEIVE_RECOMMENDATIONS_ERROR: {
            return{
                ...state,
                fetched: true,
                recommendations: action.payload
            }
            break;
        }
    }
    return state
}

export default detail;