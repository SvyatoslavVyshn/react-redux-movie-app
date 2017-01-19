import { RECEIVE_POPULAR_MOVIES, 
         RECEIVE_POPULAR_MOVIES_ERROR, 
         RECEIVE_POSTER, 
         RECEIVE_POSTER_ERROR } from '../constants/constants';

import axios from 'axios';

const API_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "5d9af60e2f284c1aa7133ac326b0cbd4";
const POSTER_URL = "https://image.tmdb.org/t/p/w500/"; 

export function getPopularMovies () {
    return function(dispatch) {
        axios.get(`${API_URL}popular?api_key=${API_KEY}&language=en-US`)
            .then((res) => {
                dispatch({type:RECEIVE_POPULAR_MOVIES, payload: res.data})
            })
            .catch((err) => {
                dispatch({type: RECEIVE_POPULAR_MOVIES_ERROR, payload: err})
            })
    }
}

