import { RECEIVE_POPULAR_MOVIES, RECEIVE_POPULAR_MOVIES_ERROR,

         RECEIVE_DETAIL, RECEIVE_DETAIL_ERROR,

         RECEIVE_RECOMMENDATIONS, RECEIVE_RECOMMENDATIONS_ERROR,

         RECEIVE_GENRES, RECEIVE_GENRES_ERROR,

         ADD_TO_FAV, RECEIVE_QUERY,

         RECEIVE_QUERY_ERROR, DELETE_FAV,

         CANCEL_SEARCH } from '../constants/constants';

import axios from 'axios';

const API_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "5d9af60e2f284c1aa7133ac326b0cbd4";


//Get Popular Movies Function

export function getPopularMovies (page) {
    return function(dispatch) {
        axios.get(`${API_URL}popular?api_key=${API_KEY}&language=en-US&page=${page}`)
            .then((res) => {
                dispatch({type:RECEIVE_POPULAR_MOVIES, payload: res.data})
            })
            .catch((err) => {
                dispatch({type: RECEIVE_POPULAR_MOVIES_ERROR, payload: err})
            })
    }
}

//Get Movies Detail Function

export function getMoviesDetail (movieID) {
    return function(dispatch) {
        axios.get(`${API_URL}${movieID}?api_key=${API_KEY}&language=en-US`)
            .then((res) => {
                dispatch({type:RECEIVE_DETAIL, payload: res.data})
            })
            .catch((err) => {
                dispatch({type: RECEIVE_DETAIL_ERROR, payload: err})
            })
    }
}


// Get Recommendations Function

export function getRecommendations (movieID) {
    return function(dispatch) {
        axios.get(`${API_URL}${movieID}/recommendations?api_key=${API_KEY}&language=en-US`)
            .then((res) => {
                dispatch({type: RECEIVE_RECOMMENDATIONS, payload: res.data})
            })
            .catch((err) => {
                dispatch({type: RECEIVE_RECOMMENDATIONS_ERROR, payload: err})
            })
    }
}

// Function for Getting Genres

export function getGenres () {
    return function(dispatch) {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            .then((res) => {
                dispatch({type: RECEIVE_GENRES, payload: res.data})
            })
            .catch((err) => {
                dispatch({type: RECEIVE_GENRES_ERROR, payload: err})
            })
    }
}

//Function For Adding Favorites

export function addToFav (item){
    return{
        type: ADD_TO_FAV,
        item
    }
}


// Deleting Favs Function

export function deleteFav (i){
    return{
        type: DELETE_FAV,
        i
    }
}

//Searching Function

export function handleSearch (query) {
    return function(dispatch) {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`)
            .then((res) => {
                dispatch({type: RECEIVE_QUERY, payload: res.data})
            })
            .catch((err) => {
                dispatch({type: RECEIVE_QUERY_ERROR, payload: err})
            })
    }
}
