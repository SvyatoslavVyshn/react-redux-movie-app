import { RECEIVE_POPULAR_MOVIES_ERROR, RECEIVE_POPULAR_MOVIES } from '../constants/constants';

const initialState = {
    fetching: false,
    fetched: false,
    movies: [],
    error: null,
};

function movies (state = initialState, action){
    switch(action.type) {
        case RECEIVE_POPULAR_MOVIES_ERROR: {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
            break;
        }
        case RECEIVE_POPULAR_MOVIES: {
            return{
                ...state,
                fetching: false,
                fetched: true,
                movies:action.payload
            }
            break;
        }
    }
    return state
}

export default movies;
