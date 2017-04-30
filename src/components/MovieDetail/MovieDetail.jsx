import React, { Component } from 'react';
import Detail from './Detail.jsx';
import Recommendations from './Recommendations.jsx';
import PropTypes from 'prop-types';

class MovieDetail extends Component {
        componentWillReceiveProps(nexProps){
            const { movieId } = this.props.params

            if( movieId !== nexProps.params.movieId){
                window.location.reload()
            }
        }
        
        render(){
            const { recommendations } = this.props;
            const { movieId } = this.props.params;  
                return (
                    <div className="movie-detail">
                        <Detail 
                            addToFav={this.props.addToFav}
                            movieId={movieId}
                            detail={this.props.detail} 
                            getMoviesDetail={this.props.getMoviesDetail} 
                        />
                        <Recommendations 
                            movieId={movieId} 
                            recommendations={recommendations} 
                            getRecommendations={this.props.getRecommendations}
                        />
                    </div>
                );
        }
}

MovieDetail.propTypes = {
    movies: PropTypes.array
}


export default MovieDetail;
