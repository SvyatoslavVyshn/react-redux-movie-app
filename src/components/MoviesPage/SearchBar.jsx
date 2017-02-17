import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            isText: false,
            text: ''
        }

        this.handleMovieSearch = this.handleMovieSearch.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSearchActive = this.handleSearchActive.bind(this);
        this.handleEmptySearch = this.handleEmptySearch.bind(this);
    }

    handleTextChange(e){
        const { movies } = this.props;
        this.setState({text: e.target.value});
        this.state.text.length > 0 ? this.setState({isText: true}) : this.setState({isText: false});
    }

    handleMovieSearch(e){
        e.preventDefault();
        this.setState({error: null});
        this.props.handleSearch(this.state.text);
        this.props.onLoadingStop();
    }

    handleSearchActive(){
        this.setState({text: '', error:''});
        this.props.cancelSearch();
        this.props.onLoadingStart();
    }

    handleEmptySearch(e){
        e.preventDefault();
        this.setState({error: 'Please, enter movie name!'});
    }

    render(){ 
        const { isText, text } = this.state;
        const handler = text ? this.handleMovieSearch : this.handleEmptySearch;
        const styleX = text.length > 0 ? { display: 'block' } : {display: 'none'}
        return(
            <div className="search-bar">
                <div className="search-controls">
                    <form onSubmit={handler}>
                        <input type="text" 
                        placeholder="Search Movie..." 
                        value={text}
                        onChange={this.handleTextChange}/>
                        
                        <span className="clear" style={styleX} onClick={this.handleSearchActive}>X</span>

                        <button type="submit" className="search-button"> Search </button>
                    </form>
                </div>
                {this.state.error && <h6 className="error">{this.state.error}</h6>}
            </div>
        );
    }
}

SearchBar.propTypes = {
    handleSearch: React.PropTypes.func.isRequired,
}


export default SearchBar;
