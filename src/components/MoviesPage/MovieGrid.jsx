import React, {Component} from 'react';
import Movie from './Movie.jsx';
import InfiniteScroll from 'react-infinite-scroller';

const MovieGrid = (props) => {
    
        const { movies, addToFav, hasMore } = props;
        const { genres } = props.genres;
        const load = hasMore ? props.getPopularMovies : () => movies
        return (
            <InfiniteScroll
            initialLoad={hasMore}
            pageStart={1}
            loadMore={load}
            hasMore={hasMore}
            loader={<h1 className="text-center">Loading ...</h1>}>
               
                <div className="movie-grid">
                    { movies.map( (movie, i) => <Movie movie={movie} addToFav={addToFav} genres={genres} i={i} key={i} /> ) }
                    { movies.length === 0 && <h2 className="text-center">Not Found...</h2> }
                </div>
            </InfiniteScroll> 
            );
}

MovieGrid.propTypes = {
    movies: React.PropTypes.array.isRequired,
    hasMore: React.PropTypes.bool,
    addToFav: React.PropTypes.func
}


export default MovieGrid;
