import React, { Component } from 'react';

class Movie extends Component{
    render(){
        const { movie } = this.props;
        return(
            <div className="movie-container">
                <div className="col-md-4">
                    <div className="movie-info">
                        <h2 className="text-center title">{movie.title}</h2>
                        <img src="" alt="" className="poster"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;