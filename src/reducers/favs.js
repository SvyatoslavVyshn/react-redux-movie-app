import { ADD_TO_FAV } from '../constants/constants';

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
    }
    return state
}

export default favs;
