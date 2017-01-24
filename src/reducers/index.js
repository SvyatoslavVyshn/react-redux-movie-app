import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movies from './movies';
import detail from './detail';
import recommendations from './recommendations';
import genres from './genres';
import favs from './favs';

const rootReducer = combineReducers({movies, favs, detail, recommendations, genres, routing: routerReducer});

export default rootReducer;
