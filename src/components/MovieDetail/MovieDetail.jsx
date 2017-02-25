import React, { Component } from 'react';
import Detail from './Detail.jsx';
import Recommendations from './Recommendations.jsx';


const MovieDetail = (props) => {
        const { movies, recommendations } = props;
        const { movieId } = props.params;
        const i = movies.findIndex( (movie) => movie.id == movieId );
        const movie = movies[i];
        if(!movies || !movie){
            return <h1 className="text-center">LOADING...</h1>
            }else{    
                return (
                    <div className="movie-detail">
                        <Detail 
                            addToFav={props.addToFav} 
                            movie={movie} 
                            detail={props.detail} 
                            getMoviesDetail={props.getMoviesDetail} 
                        />
                        <Recommendations 
                            movie={movie} 
                            recommendations={recommendations} 
                            getRecommendations={props.getRecommendations}
                        />
                    </div>
                );
            }
}

MovieDetail.propTypes = {
    movies: React.PropTypes.array
}


export default MovieDetail;
