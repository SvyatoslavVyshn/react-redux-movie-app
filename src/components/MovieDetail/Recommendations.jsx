import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class Recommendations extends Component{
    componentWillMount(){
        const { movieId } = this.props;
        this.props.getRecommendations(movieId);
    }
    render(){
        const { movieId } = this.props;
        const { recommendations } = this.props;
        const posterURL = 'https://image.tmdb.org/t/p/w500/';
        const style = {textDecoration: "none"};   
            return(
                <div className="recommendations">
                    <h3 className="text-center recommendations-header">Recommendations</h3>
                    {recommendations.results ? recommendations.results.map( 
                        (result, i) => 
                            <div key={i} ref="grid">
                                <Link to={`/movies/${result.id}`} style={style} >
                                    <div className="single">
                                        <img src={`${posterURL}${result.poster_path}`} /> 
                                        <h5>{result.title}</h5>
                                    </div>
                                </Link>
                            </div>
                        ) : <h6 className="text-center">Loading...</h6>
                    }
                </div>
            )
    }
}

Recommendations.propTypes = {
    movieId: PropTypes.string,
    getRecommendations: PropTypes.func
}

export default Recommendations;
