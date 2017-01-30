import React, { Component } from 'react';

class AboutPage extends Component{
    render(){
        return(
            <div className="about-page">
                <div className="about-info">
                    <h1 className="about-header">About</h1>
                    <div className="about-content">
                        <p className="about-description">
                            This is movie app created for searching movies using outside API with such tools as:
                        </p>
                        <ul className="used-tools">
                            <li className="tool"><a href="http://lesscss.org/">Less</a></li>
                            <li className="tool"><a href="https://facebook.github.io/react/">React</a></li>
                            <li className="tool"><a href="https://github.com/ReactTraining/react-router">React-Router</a></li>
                            <li className="tool"><a href="http://redux.js.org/docs/introduction/">Redux</a></li>
                            <li className="tool"><a href="https://github.com/gaearon/redux-thunk">Redux-thunk</a></li>
                            <li className="tool"><a href="https://github.com/CassetteRocks/react-infinite-scroller">React Infinite Scroller</a></li>
                            <li className="tool"><a href="http://getbootstrap.com/">Bootstrap</a></li>
                            <li className="tool"><a href="http://fontawesome.io/">Font Awesome</a></li>
                            <li className="tool"><a href="https://github.com/mzabriskie/axios">Axios</a></li>
                            <li className="tool"><a href="https://babeljs.io/">Babel</a></li>
                            <li className="tool"><a href="https://webpack.github.io/">Webpack</a></li>
                            <li className="tool"><a href="https://webpack.github.io/docs/webpack-dev-server.html">Webpack Dev Server</a></li>
                            <li className="tool"><a href="https://www.themoviedb.org/">The Movie Db API</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;