import React, { Component } from 'react';
import Detail from './Detail.jsx';
import Recommendations from './Recommendations.jsx';


class MovieDetail extends Component{
    render(){
        const { movies, recommendations } = this.props;
        const { movieId } = this.props.params;
        const i = movies.findIndex( (movie) => movie.id == movieId );
        const movie = movies[i];
        if(!movies){
            return <h1 className="text-center">LOADING...</h1>
            }else{    
                return (
                    <div className="movie-detail">
                        <Detail addToFav={this.props.addToFav} movie={movie} detail={this.props.detail} getMoviesDetail={this.props.getMoviesDetail} />
                        <Recommendations movie={movie} recommendations={recommendations} getRecommendations={this.props.getRecommendations}/>
                    </div>
                );
            }
        }
}

export default MovieDetail;
