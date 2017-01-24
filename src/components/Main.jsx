import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Favs from './Favs.jsx';

class Main extends Component{
    componentWillMount(){
        this.props.getPopularMovies();
        this.props.getGenres();
    }
    render(){
        return(
            <div>
                <Nav />
                <Favs />
                <div className="container">
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
        );
    }
}

export default Main;
