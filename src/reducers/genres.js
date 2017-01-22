import { RECEIVE_GENRES, RECEIVE_GENRES_ERROR } from '../constants/constants';

const initialState = {
    fetched: false,
    genres: {},
    error: null
};

function genres (state = initialState, action){
    switch(action.type) {
        case RECEIVE_GENRES: {
            return{
                ...state,
                fetched: true,
                genres:action.payload
            }
            break;
        }
        case RECEIVE_GENRES_ERROR: {
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

export default genres;