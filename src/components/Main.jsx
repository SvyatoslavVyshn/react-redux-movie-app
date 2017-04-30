import React, { Component } from 'react';
import Nav from './Nav.jsx';

class Main extends Component{
    componentWillMount(){
        this.props.getPopularMovies();
        this.props.getGenres();
    }
    render(){
        return(
            <div>
                <Nav />
                    {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}

export default Main;
