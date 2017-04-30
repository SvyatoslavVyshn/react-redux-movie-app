import React, { Component } from 'react';

class Detail extends Component{
    constructor () {
        super();

        this.renderDetails = this.renderDetails.bind(this);
    }
    
    componentWillMount(){
        const { movieId } = this.props;
        this.props.getMoviesDetail(movieId);
    }

    renderDetails(items) {
        return items ? items.map( (item, i) => <h6 key={i}>{item.name}</h6> )  : <h6>Loading</h6>
    }

    render(){
        const { movie } = this.props;
        const { detail } = this.props;
        const posterURL = detail.poster_path ? `https://image.tmdb.org/t/p/w500/${detail.poster_path}` : 'images/image-not.jpg';
            return(
            <div className="detail">
                <button className="btn btn-primary btn-block" onClick={this.props.addToFav.bind(null, detail)}>
                    <h6 style={{color: '#fff'}}><span className="glyphicon glyphicon-heart"></span>Add to favorite</h6>
                </button>
                <div className="headers">
                    <h2 className="text-center">{detail.title}</h2>
                    <h4 className="text-center">{detail.tagline}</h4>
                </div>

                <div className="row">
                    <div className="col-md-5 col-md-offset-1">
                        <img src={posterURL} className="detail-poster"/>
                    </div>
                    <div className="col-md-6 detail-contailner">
                        <h4 className="release-date">Release Date: {detail.release_date}</h4>
                        <p className="overview">
                            {detail.overview}
                        </p>

                        <h6 className="budget">Budget: {detail.budget}</h6>
                        <hr/>
                        
                        <div className="genres">
                            <h4>Genres:</h4> 
                            { this.renderDetails(detail.genres) }
                        </div>
                    </div>
                </div>
            
                        <hr/>
                        
                        <div className="production-companies">
                            <h4>Production companies:</h4> 
                            { this.renderDetails(detail.production_companies) }
                        </div>

                        <hr/>
                        
                        <div className="production-countries">
                            <h4>Production countries:</h4> 
                            { this.renderDetails(detail.production_countries) }
                        </div>
                        
                        <hr/>

                        <div className="spoken-languages">
                            <h4>Spoken Languages:</h4> 
                            { 
                                this.renderDetails(detail.spoken_languages)
                            }
                        </div>
            </div>
            )
    }    
}

export default Detail;
