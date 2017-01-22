import React, { Component } from 'react';

class Recommendations extends Component{
    componentDidMount(){
        const { movie } = this.props;
        this.props.getRecommendations(movie.id);
    }
    render(){
        const { recommendations } = this.props;
        const posterURL = 'https://image.tmdb.org/t/p/w500/';
        if(!recommendations.results){
                return <h1 className="text-center">LOADING... </h1>
        }else{
            return(
                <div className="recommendations">
                    {recommendations.results ? recommendations.results.map( 
                        (result, i) => 
                            <div className="single" key={i}>
                                <div className="col-md-4">
                                    <h5>{result.title}</h5>
                                    <img src={`${posterURL}${result.poster_path}`} /> 
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
