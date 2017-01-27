import React, { Component } from 'react';


class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            text: ''
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    
    handleTextChange(e){
       const query = e.target.value;
       this.setState({ text: query });
    }

    handleSearch(){
        this.props.onSearch(this.state.text);
    }

    render(){
        const { text } = this.state;
        return(
            <div className="search-bar">
                <div className="search-controls">
                    <input type="text" placeholder="Search Movie..." onChange={this.handleTextChange}/>
                    <button className="search-button" disabled={!text} onClick={this.handleSearch}>Search</button>
                </div>
            </div>
        );
    }
}


export default SearchBar;
