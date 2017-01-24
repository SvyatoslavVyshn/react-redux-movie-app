import React, { Component } from 'react';
import { Link } from 'react-router';
import Genres from './Genres.jsx';

class Movie extends Component{

    render(){
        const { movie } = this.props;
        const { genres } = this.props;
        const { i } = this.props;
        const posterURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        const style = {textDecoration: "none"};
        return(
                <div className="col-md-6">
                    <div className="movie-info">
                        <button className="btn btn-info btn-block fav-btn" onClick={this.props.addToFav.bind(null, movie)}>
                            <span className="glyphicon glyphicon-heart"></span> Add to favoutite
                        </button>
                        <Link to={`/movies/${movie.id}`} style={style} >
                            <h2 className="text-center title">{movie.title}</h2>
                            <img src={posterURL} alt="" className="poster"/>
                        </Link>
                        {movie.genre_ids.map( (genreID, i) => <Genres key={i} genreID={genreID} genres={genres} /> )}   
                    </div>
                </div>
        );
    }
}

export default Movie;