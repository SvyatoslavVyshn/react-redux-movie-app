import { ADD_TO_FAV, DELETE_FAV } from '../constants/constants';

const initialState = [];

function hidePopup () {
  let popup = document.getElementById('myPopup');
    popup.classList.remove("show");
}

function addFav (action) {
  let popup = document.getElementById('myPopup');
    popup.classList.add("show");
    setTimeout(hidePopup, 4000);
    return action.item;
}

function favs (state = initialState, action){
    switch(action.type) {
        case ADD_TO_FAV: {
            return[
                ...state,
                addFav(action)
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
