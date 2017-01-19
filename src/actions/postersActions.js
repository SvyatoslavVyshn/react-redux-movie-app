import { RECEIVE_POSTER, RECEIVE_POSTER_ERROR } from '../constants/constants';

import axios from 'axios';

export function getPosters (posterPath) {
    return function (dispatch){
        axios.get(`${POSTER_URL}${posterPath}`)
            .then( (res) => {
                dispatch({type: RECEIVE_POSTER, payload: res.data})
            })
            .catch( (err) => {
                dispatch({type: RECEIVE_POSTER_ERROR, payload: err})
            })
    }
}