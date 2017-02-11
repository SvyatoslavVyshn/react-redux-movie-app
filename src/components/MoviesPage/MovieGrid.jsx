import React, {Component} from 'react';
import Movie from './Movie.jsx';
import InfiniteScroll from 'react-infinite-scroller';

class MovieGrid extends Component{
    render(){
        const { movies, addToFav } = this.props;
        const { genres } = this.props.genres;
        return (
            <InfiniteScroll
                pageStart={1}
                loadMore={this.props.getPopularMovies}
                hasMore={true}
                loader={<h1 className="text-center">Loading ...</h1>}
                isReverse={false}>

                <div className="movie-grid">
                    { movies.map( (movie, i) => <Movie movie={movie} addToFav={addToFav} genres={genres} i={i} key={i} /> ) }
                    { movies.length === 0 && <h2 className="text-center">Not Found...</h2> }
                </div>
            </InfiniteScroll> 
            );
        }
}

MovieGrid.propTypes = {
    movies: React.PropTypes.array.isRequired,
    hasMore: React.PropTypes.bool,
    addToFav: React.PropTypes.func
}


export default MovieGrid;
