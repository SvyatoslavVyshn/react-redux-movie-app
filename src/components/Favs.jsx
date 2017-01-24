import React, { Component } from 'react';
import { loadState } from '../localStorage.js';
import { Link } from 'react-router';

class Favs extends Component{
    constructor(props){
        super(props);

        this.state = {
            expanded: false
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
        return(
            <div className="favs">
                <button className="btn btn-block btn-success" onClick={this.handleFavsShow}>Your Favourites</button>
                <div className="fav-container container" style={ this.state.expanded ? {display: 'block'} : {display: 'none'} }>
                    {
                        favorites.favs.map( (fav, i) => <p key={i}><Link to={`movies/${fav.id}`}>{fav.title}</Link></p> )
                    }
                </div>
            </div>
        );
    }
}

export default Favs;
