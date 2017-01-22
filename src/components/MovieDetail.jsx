import React, { Component } from 'react';
import Detail from './Detail.jsx';
import Recommendations from './Recommendations.jsx';

class MovieDetail extends Component{
    componentDidMount(){
        this.props.getPopularMovies();
    }
    render(){
        const { movies, recommendations } = this.props;
        if(!movies.results){
            return <h1 className="text-center">LOADING...</h1>
            }else{
                const { movieId } = this.props.params;
                const i = movies.results.findIndex( (movie) => movie.id == movieId );
                const movie = movies.results[i];
                
                return (
                    <div className="movie-detail">
                        <Detail movie={movie} detail={this.props.detail} getMoviesDetail={this.props.getMoviesDetail} />
                        <Recommendations movie={movie} recommendations={recommendations} getRecommendations={this.props.getRecommendations}/>
                    </div>
                );
            }
        }
}

export default MovieDetail;
