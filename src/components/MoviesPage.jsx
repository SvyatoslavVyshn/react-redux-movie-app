import React, { Component } from 'react';
import MovieGrid from './MovieGrid.jsx';
import SearchBar from './SearchBar.jsx';

class MoviesPage extends Component{
    render(){
        const { movies } = this.props;
        const { genres } = this.props.genres;
        if(!movies || !genres){
            return <h1 className="text-center">LOADING...</h1>
        }else{
            return(   
                <div className="movies-page">
                    <h1 className="text-center">Movies</h1>
                    <SearchBar />
                    <MovieGrid {...this.props} movies={movies}/>
                </div>
            );
        }
    }
}
export default MoviesPage;