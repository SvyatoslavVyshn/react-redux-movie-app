import React from 'react';
import PropTypes from 'prop-types';

const Genres = (props) => {
        const { genres, genreID } = props;
        return(
            <div className="genres">
                {genres.map( (genre, i) => { if(genre.id === genreID) return <p key={i}>{genre.name}</p> } ) }
            </div>
        );
}

Genres.propTypes = {
    genres: PropTypes.array.isRequired,
    genreID: PropTypes.number.isRequired
}

export default Genres;
