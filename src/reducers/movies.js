import { 
         RECEIVE_POPULAR_MOVIES_ERROR, RECEIVE_POPULAR_MOVIES, 
         RECEIVE_QUERY, RECEIVE_QUERY_ERROR, CANCEL_SEARCH 
        }  from '../constants/constants';

const initialState = {
    fetched: false,
    movies: [],
    error: null
};

function movies (state = initialState, action){
    switch(action.type) {
        case RECEIVE_POPULAR_MOVIES: {
            return{
                ...state,
                movies: [...state.movies, ...action.payload.results],
                fetched: true,
            }
            break;
        }
        case RECEIVE_POPULAR_MOVIES_ERROR: {
            return {
                ...state,
                fetched: false,
                error: action.payload
            }
            break;
        }
        case RECEIVE_QUERY: {
            return{
                ...state,
                fetched: true,
                movies: [...action.payload.results]
            }
            break;
        }
        case RECEIVE_QUERY_ERROR: {
            return{
                ...state,
                fetched: false,
                error: action.payload
            }
            break;
        }
        case CANCEL_SEARCH: {
            return{
                ...state,
                movies: []
            }
            break;
        }
    }
    return state
}

export default movies;
