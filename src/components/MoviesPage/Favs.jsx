import React, { Component } from 'react';
import { loadState } from '../../localStorage.js';


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

    render(){
        const favorites = loadState();
        const posterURL = 'https://image.tmdb.org/t/p/w300/';
        const { deleteFav } = this.props;
        return(
            <div className="favs">
                <button className="btn btn-block btn-success" onClick={this.handleFavsShow}>Your Favorites</button>
                <div className="fav-container container" style={ this.state.expanded ? {display: 'block'} : {display: 'none'} }>
                       
                       {favorites.favs.length == 0 && <h5 className="text-center placeholder">Nothing here yet...</h5>}
                       
                       {favorites.favs.map( (fav, i) => <div className="fav" key={i}>
                                                            <img src={`${posterURL}${fav.poster_path}`}/>
                                                            <p>{fav.title}</p>
                                                            <span className="delete" onClick={deleteFav.bind(null, i)}>X</span>
                                                        </div> )}
                </div>
            </div>
        );
    }
}

export default Favs;
