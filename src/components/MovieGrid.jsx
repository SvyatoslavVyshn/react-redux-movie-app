import React, {Component} from 'react';
import Movie from './Movie.jsx';


class MovieGrid extends Component{
    render(){
        const { movies } = this.props;
        const { genres } = this.props.genres;
        return (
            <div className="MovieGrid">
                { movies.results.map( (movie, i) => <Movie movie={movie} genres={genres} i={i} key={i} /> ) }
            </div>
            );
        }
}

export default MovieGrid;