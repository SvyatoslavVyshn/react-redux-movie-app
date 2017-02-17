import React, { Component } from 'react';
import MovieGrid from './MovieGrid.jsx';
import SearchBar from './SearchBar.jsx';
import Favs from './Favs.jsx';

class MoviesPage extends Component{

    constructor(props){
        super(props);

        this.state = {
            hasMore: true
        }

        this.handleLoadingStop = this.handleLoadingStop.bind(this);
        this.handleLoadingStart = this.handleLoadingStart.bind(this);
    }

    handleLoadingStop(){
        this.setState({hasMore: false});
    }

    handleLoadingStart(){
        this.setState({hasMore: true});
    }

    render(){
        const { movies, handleSearch, deleteFav, cancelSearch } = this.props;
        const { genres } = this.props.genres;
        if(!movies || !genres){
            return <h1 className="text-center">LOADING...</h1>
        }else{
            return(   
                <div className="movies-page container-fluid">
                    <Favs deleteFav={deleteFav} />
                    <SearchBar 
                    handleSearch={handleSearch} 
                    cancelSearch={cancelSearch} 
                    onLoadingStop={this.handleLoadingStop} 
                    onLoadingStart={this.handleLoadingStart}
                    />

                    <MovieGrid {...this.props} hasMore={this.state.hasMore} movies={movies} />
                </div>
            );
        }
    }
}


export default MoviesPage;