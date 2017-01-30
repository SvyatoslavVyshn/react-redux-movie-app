import React, {Component} from 'react';
import Movie from './Movie.jsx';
import InfiniteScroll from 'react-infinite-scroller';

class MovieGrid extends Component{
    render(){
        const { movies } = this.props;
        const { genres } = this.props.genres;
        const { addToFav } = this.props;
        return (
            <InfiniteScroll
                pageStart={1}
                loadMore={this.props.getPopularMovies}
                hasMore={true}
                threshold={200}
                loader={<h1 className="text-center">Loading ...</h1>}>

                <div className="movie-grid">
                    { movies.map( (movie, i) => <Movie movie={movie} addToFav={addToFav} genres={genres} i={i} key={i} /> ) }
                </div>
            </InfiniteScroll> 
            );
        }
}

export default MovieGrid;