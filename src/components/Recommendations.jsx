import React, { Component } from 'react';

class Recommendations extends Component{
    componentWillMount(){
        const { movie } = this.props;
        this.props.getRecommendations(movie.id);
    }
    render(){
        const { movie } = this.props;
        const { recommendations } = this.props;
        const posterURL = 'https://image.tmdb.org/t/p/w500/';

        if(!recommendations.results){
                return <h1 className="text-center">LOADING... </h1>
        }else{
            return(
                <div className="recommendations">
                    <h3 className="text-center recommendations-header">Recommendations</h3>
                    {recommendations.results ? recommendations.results.map( 
                        (result, i) => 
                            <div key={i} ref="grid">
                                <div className="single">
                                    <img src={`${posterURL}${result.poster_path}`} /> 
                                    <h5>{result.title}</h5>
                                </div>
                            </div>
                        ) : null 
                    }
                </div>
            )
        }
    }
}

export default Recommendations;
