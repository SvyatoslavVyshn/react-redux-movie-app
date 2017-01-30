import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends Component {
    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        const menu = document.querySelector('.navigation .nav-items-container');
        menu.classList.toggle('show-nav');
    }

    render(){
        const linkStyle = {
            color: '#000', 
            textDecoration:'none',
            padding: '10px'
        };
        return(
                <div className="navigation navbar-fixed-top">
                    <ul className="nav-items-container">
                        <li className="nav-item">
                            <IndexLink to="/" activeClassName="active" style={linkStyle}>
                                Welcome
                            </IndexLink>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" activeClassName="active" style={linkStyle}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/movies" activeClassName="active" style={linkStyle}>
                                Movies
                            </Link>
                        </li>
                    </ul>
                    <div className="hanle-expansion" onClick={this.toggleNav}>Menu</div>
                </div>
        );
    }
}

export default Nav;