import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import App from './components/App.jsx';
import AboutPage from './components/AboutPage.jsx';
import Welcome from './components/Welcome.jsx';
import MoviesPage from './components/MoviesPage';
import MovieDetail from './components/MovieDetail';

import './styles/main.less';

import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import store, { history } from './store';


ReactDOM.render(
    <Provider store={store}>
        <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
            <Route path="/" component={App} >
                <IndexRoute component={Welcome} />
                <Route path="about" component={AboutPage} />
                <Route path="movies" component={MoviesPage} />
                <Route path="movies/:movieId" component={MovieDetail} />
            </Route>
        </Router>
    </Provider>, document.getElementById('app'));
