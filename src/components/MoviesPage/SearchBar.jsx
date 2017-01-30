import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            isText: false
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleBtnTextChange = this.handleBtnTextChange.bind(this);
    }

    handleBtnTextChange(e){
        const val = e.target.value;
        val.length > 0 ? this.setState({isText: true}) : this.setState({isText: false});
    }

    handleSearch(e){
        e.preventDefault();
        const query = this.refs.query.value;
        this.props.onSearch(query);
    }

    render(){
        const { isText } = this.state;
        const buttonText = isText ? 'Search' : 'Enter Movie';
        const status = !isText;
        const styleActive = {
            cursor: 'pointer',
            backgroundColor: '#5CD172'
        };
        const styleDisabled = {
            cursor: 'not-allowed',
            backgroundColor: '#d3d3d3'
        };
        const style = isText ? styleActive : styleDisabled;
        return(
            <div className="search-bar">
                <div className="search-controls">
                    <form onSubmit={this.handleSearch}>
                        <input type="text" placeholder="Search Movie..." ref="query" onChange={this.handleBtnTextChange}/>
                        <button type="submit" disabled={status} className="search-button" style={style}>{buttonText}</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default SearchBar;
