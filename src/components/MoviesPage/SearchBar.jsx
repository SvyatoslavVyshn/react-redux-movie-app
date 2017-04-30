import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            text: '',
            showErr: false
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSearchActive = this.handleSearchActive.bind(this);
        this.handleMovieSearch = this.handleMovieSearch.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleTextChange(e){
        this.setState({text: e.target.value})
    }

    handleMovieSearch(e){
        e.preventDefault();
        this.props.handleSearch(this.state.text);
        this.props.onLoadingStop();
        this.setState({error: null})
    }

    handleSearchActive(){
        this.setState({text: '', error:''});
        this.props.onLoadingStart();
        this.props.cancelSearch();
    }

    handleError(){
        this.setState({error: 'Enter Movie Name', showErr:true})
    }

    render(){ 
        const { text, showErr } = this.state;
        const styleX = text.length > 0 ? { display: 'block' } : {display: 'none'}
        const styleErr = showErr ? { display: 'block' } : {display: 'none'}
        return(
            <div className="search-bar">
                <div className="search-controls">
                        <form onSubmit={ text ? this.handleMovieSearch : this.handleError}>
                            <input type="text" 
                            placeholder="Search Movie..." 
                            value={text}
                            onChange={this.handleTextChange}
                            />
                        </form>
                        <span className="clear" style={styleX} onClick={this.handleSearchActive}>X</span>
                </div>
                <p className="error" style={styleErr}>{this.state.error}</p>
            </div>
        );
    }
}

SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    onLoadingStart: PropTypes.func,
    onLoadingStop: PropTypes.func
}


export default SearchBar;
