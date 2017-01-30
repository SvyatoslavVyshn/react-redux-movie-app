import { RECEIVE_DETAIL, RECEIVE_DETAIL_ERROR } from '../constants/constants';

const initialState = {
    fetched: false,
    detail: {},
    error: null
};

function detail (state = initialState, action){
    switch(action.type) {
        case RECEIVE_DETAIL: {
            return{
                ...state,
                fetched: true,
                detail:action.payload
            }
            break;
        }
        case RECEIVE_DETAIL_ERROR: {
            return{
                ...state,
                fetched: true,
                error: action.payload
            }
            break;
        }
    }
    return state
}

export default detail;
