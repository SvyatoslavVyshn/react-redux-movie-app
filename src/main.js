import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App.jsx';
import AboutPage from './components/AboutPage.jsx';
import Welcome from './components/Welcome.jsx';
import MoviesPage from './components/MoviesPage.jsx';
import MovieDetail from './components/MovieDetail.jsx';

import './styles/main.less';

import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import store, { history } from './store';

//ignoreScrollBehavior
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} >
                <IndexRoute component={Welcome} />
                <Route path="about" component={AboutPage} />
                <Route path="movies" component={MoviesPage} />
                <Route path="movies/:movieId" component={MovieDetail} />
            </Route>
        </Router>
    </Provider>, document.getElementById('app'));
