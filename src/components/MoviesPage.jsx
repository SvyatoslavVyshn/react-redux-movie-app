import React, { Component } from 'react';
import MovieGrid from './MovieGrid.jsx';
import SearchBar from './SearchBar.jsx';

class MoviesPage extends Component{
    render(){
        return(
            <div className="movies-page">
                <h1 className="text-center">Movies</h1>
                <SearchBar />
                <MovieGrid {...this.props} />
            </div>
        );
    }
}

export default MoviesPage;