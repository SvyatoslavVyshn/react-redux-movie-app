import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main.jsx';

function mapStateToProps (state) {
  return {
    movies: state.movies.movies,
    detail: state.detail.detail,
    recommendations: state.recommendations.recommendations,
    genres: state.genres.genres,
    favs: state.favs
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;