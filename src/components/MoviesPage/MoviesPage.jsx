import React, { Component } from 'react';
import MovieGrid from './MovieGrid.jsx';
import SearchBar from './SearchBar.jsx';
import Favs from '../Favs.jsx';

class MoviesPage extends Component{
    render(){
        const { movies, handleSearch, deleteFav } = this.props;
        const { genres } = this.props.genres;
        if(!movies || !genres){
            return <h1 className="text-center">LOADING...</h1>
        }else{
            return(   
                <div className="movies-page container-fluid">
                    <Favs deleteFav={deleteFav} />
                    <SearchBar onSearch={handleSearch} movies={movies}/>
                    <MovieGrid {...this.props} movies={movies}/>
                </div>
            );
        }
    }
}
export default MoviesPage;