import React, { Component } from 'react';

class Genres extends Component{
    render(){
        const { genres } = this.props;
        const { genreID } = this.props;
        const genre = genres.filter( (genre) => genre.id === genreID );
        return(
            <div className="genres">
            <p>{genre[0].name}</p>
            </div>
        );
    }
}

export default Genres;
