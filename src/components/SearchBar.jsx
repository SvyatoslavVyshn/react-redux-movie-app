import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            text: ''
        }

        this.handleSearch = this.handleSearch.bind(this);
    }
    
    handleSearch(e){
       const query = e.target.value;

       this.setState({
           text: query
       });
    }

    render(){
        const style = {}
        return(
            <div className="search-bar">
                    <input type="text" placeholder="Search Movie..." onChange={this.handleSearch}/>
                    
                    <div className="search-suggestion" style={this.state.text.length > 0 ? {display: 'block'}: {display: 'none'}}>
                        <h4>{this.state.text}</h4>
                    </div>
            </div>
        );
    }
}


export default SearchBar;
