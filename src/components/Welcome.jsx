import React, { Component } from 'react';
import { Link } from 'react-router';

const Welcome = () => {
        const style = { color: '#fff', fontSize: '15px', textDecoration: 'none' }
        return(
            <div className="welcome-page">
                <div className="welcome-block">
                    <h1 className="welcome-header">Welcome</h1>
                    <p className="welcome-message one">
                        This is Movie App <i className="fa fa-film fa-lg"></i>
                    </p>
                    <p className="welcome-message two">
                        If you are searching for new movies to watch, then you will find it useful!
                    </p>
                    <Link to="/movies" style={style}><button className="btn btn-info">Get Started</button></Link>
                </div>
                <div className="features-block">
                    <h1 className="features-header">Features</h1>
                    <div className="features-container">
                        <div className="feature">
                            <i className="fa fa-search fa-5x"></i>
                            <p className="feature-description">
                                Search for movies!
                                You can search for movies by usinig search bar on "Movies" page.
                            </p>
                        </div>
                        <div className="feature">
                            <i className="fa fa-heart fa-5x"></i>
                            <p className="feature-description">
                                Add to favorite!
                                Use button "Add to favorite" to add movie to fav list.
                            </p>
                        </div>
                        <div className="feature">
                            <i className="fa fa-info-circle fa-5x"></i>
                            <p className="feature-description">
                                Learn details!
                                Click on movie you want to learn about, and you will see it's details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Welcome;
