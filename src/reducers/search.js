import { RECEIVE_QUERY, RECEIVE_QUERY_ERROR } from '../constants/constants';

const initialState = {
    fetched: false,
    movies: [],
    error: null
};

function search (state = initialState, action){
    switch(action.type) {
        case RECEIVE_QUERY: {
            return{
                ...state,
                fetched: true,
                movies: action.payload.results
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
    }
    return state
}

export default search;
