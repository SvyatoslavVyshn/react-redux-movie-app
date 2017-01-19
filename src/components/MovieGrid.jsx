import React, {Component} from 'react';
import Movie from './Movie.jsx';


class MovieGrid extends Component{
    constructor(props){
        super(props);
    
        this.getMovies = this.getMovies.bind(this); 
    }

    getMovies(){
        this.props.getPopularMovies();
    }

    render(){
        const { movies } = this.props;
        if(!movies.results){
            return <button onClick={this.getMovies} className="btn btn-primary btn-block">Get Movies</button>
        }
        return (
            <div className="MovieGrid">
                { movies.results.map( (movie, i) => <Movie movie={movie} i={i} key={i} /> ) }
            </div>
        );
    }
}

export default MovieGrid;