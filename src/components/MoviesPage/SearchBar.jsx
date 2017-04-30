import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            text: ''
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSearchActive = this.handleSearchActive.bind(this);
    }

    handleTextChange(e){
        this.setState({text: e.target.value});
        if(this.state.text){
            this.props.handleSearch(this.state.text);
            this.props.onLoadingStop();
        }
    }

    handleSearchActive(){
        this.setState({text: '', error:''});
        this.props.onLoadingStart();
        this.props.cancelSearch();
    }

    render(){ 
        const { text } = this.state;
        const styleX = text.length > 0 ? { display: 'block' } : {display: 'none'}
        return(
            <div className="search-bar">
                <div className="search-controls">
                        <input type="text" 
                        placeholder="Search Movie..." 
                        value={text}
                        onChange={this.handleTextChange}
                        maxLength="40"/>
                        
                        <span className="clear" style={styleX} onClick={this.handleSearchActive}>X</span>
                </div>
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
