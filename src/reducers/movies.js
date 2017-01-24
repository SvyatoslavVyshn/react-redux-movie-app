import { RECEIVE_POPULAR_MOVIES_ERROR, RECEIVE_POPULAR_MOVIES } from '../constants/constants';

const initialState = {
    fetched: false,
    movies: [],
    error: null
};

function movies (state = initialState, action){
    switch(action.type) {
        case RECEIVE_POPULAR_MOVIES_ERROR: {
            return {
                ...state,
                fetched: false,
                error: action.payload
            }
            break;
        }
        case RECEIVE_POPULAR_MOVIES: {
            return{
                ...state,
                movies: [...state.movies, ...action.payload.results],
                fetched: true,
            }
            break;
        }
    }
    return state
}

export default movies;
