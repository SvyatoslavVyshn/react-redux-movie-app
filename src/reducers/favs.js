import { ADD_TO_FAV, DELETE_FAV } from '../constants/constants';

const initialState = [];

function favs (state = initialState, action){
    switch(action.type) {
        case ADD_TO_FAV: {
            return[
                ...state,
                action.item
            ]
            break;
        }
        case DELETE_FAV: {
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ]
        }
    }
    return state
}

export default favs;
