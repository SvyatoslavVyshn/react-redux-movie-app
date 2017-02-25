import React, { Component } from 'react';

const Genres = (props) => {
        const { genres, genreID } = props;
        const genre = genres.filter( (genre) => genre.id === genreID );
            if(genres){
                return(
            <div className="genres">
                <p>{genre[0].name}</p>
            </div>
            );
            }else{
                <div className="genres">
                    <p>None</p>
                </div>
            }
}

export default Genres;
