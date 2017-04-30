import React from 'react';

const AboutPage = () => {
        const tools = [
            {name: 'Less', href: 'http://lesscss.org/'},
            {name: 'React', href: 'https://facebook.github.io/react/'},
            {name: 'React-Router', href: 'https://github.com/ReactTraining/react-router'},
            {name: 'Redux', href: 'http://redux.js.org/docs/introduction/'},
            {name: 'Redux-thunk', href: 'https://github.com/gaearon/redux-thunk'},
            {name: 'React Infinite Scroller', href: 'https://github.com/CassetteRocks/react-infinite-scroller'},
            {name: 'Bootstrap', href: 'http://getbootstrap.com/'},
            {name: 'Font Awesome', href: 'http://fontawesome.io/'},
            {name: 'Axios', href: 'https://github.com/mzabriskie/axios'},
            {name: 'Babel', href: 'https://babeljs.io/'},
            {name: 'Webpack', href: 'https://webpack.github.io/'},
            {name: 'Webpack Dev Server', href: 'https://webpack.github.io/docs/webpack-dev-server.html'},
            {name: 'The Movie Db API', href: 'https://www.themoviedb.org/'}
        ]

        return(
            <div className="about-page">
                    <h1 className="about-header">About</h1>
                    <div className="about-content">
                        <p className="about-description">
                            This is movie app created for searching movies using outside API with such tools as:
                        </p>
                        <ul className="used-tools">
                            {
                                tools.map( (tool, i) => 
                                    <li className="tool" key={i}>
                                        <a href={tool.href}>
                                            {tool.name}
                                        </a> 
                                    </li>
                                )
                            }
                        </ul>
                    </div>
            </div>
        );
}

export default AboutPage;