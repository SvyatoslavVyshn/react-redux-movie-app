import React, { Component } from 'react';
import Nav from './Nav.jsx';

class Main extends Component{
    render(){
        return(
            <div>
                <Nav />
                <div className="container">
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
        );
    }
}

export default Main;
