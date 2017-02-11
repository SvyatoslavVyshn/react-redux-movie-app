import React, { Component } from 'react';
import { Link } from 'react-router';
import Genres from './Genres.jsx';

class Movie extends Component{

    render(){
        const { movie } = this.props;
        const { genres } = this.props;
        const { i } = this.props;
        const posterURL = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'images/image-not.jpg';
        const style = {textDecoration: "none"};
        return(
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="movie-info">
                        <button className="btn btn-info btn-block fav-btn" onClick={this.props.addToFav.bind(null, movie)}>
                            <span className="glyphicon glyphicon-heart"></span> Add to favorites
                        </button>
                        <Link to={`/movies/${movie.id}`} style={style} >
                            <h2 className="text-center title">{movie.title}</h2>
                            {movie.genre_ids.map( (genreID, i) => <Genres key={i} genreID={genreID} genres={genres} /> )}      
                            <img src={posterURL} alt="" className="poster"/>   
                        </Link>
                    </div>
                </div>
        );
    }
}

Movie.propTypes = {
    movie: React.PropTypes.object.isRequired,
    genres: React.PropTypes.array.isRequired
}

export default Movie;