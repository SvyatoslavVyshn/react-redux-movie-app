import React, { Component } from 'react';
import { loadState } from '../../localStorage.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Favs extends Component{
    constructor(props){
        super(props);

        this.state = {
            expanded: false,
        };

        this.handleFavsShow = this.handleFavsShow.bind(this);
    }

    handleFavsShow(){
        this.setState({
            expanded: !this.state.expanded
        })
    }

    renderFavs(){
        const favorites = loadState();
        const posterURL = 'https://image.tmdb.org/t/p/w300/';
        return favorites.favs.map( (fav, i) =>
            <div className="fav" key={i}>
                <Link to={`/movies/${fav.id}`}>
                  <img src={`${posterURL}${fav.poster_path}`}/>
                  <p>{fav.title}</p>
                </Link>
                <span className="delete" onClick={this.props.deleteFav.bind(null, i)}>X</span>
            </div> )
    }

    render(){
        const favorites = loadState();
        return(
            <div className="favs">
                <button className="btn btn-block btn-success" onClick={this.handleFavsShow}>Your Favorites</button>
                <div className="fav-container container" style={ this.state.expanded ? {display: 'block'} : {display: 'none'} }>
                       {favorites.favs.length == 0 && <h5 className="text-center placeholder">Nothing here yet...</h5>}

                       {this.renderFavs()}
                </div>
            </div>
        );
    }
}

Favs.propTypes = {
    deleteFav: PropTypes.func
}

export default Favs;
