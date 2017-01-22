import React, { Component } from 'react';

class Detail extends Component{
    componentDidMount(){
        const { movie } = this.props;
        this.props.getMoviesDetail(movie.id);
    }
    render(){
        const { detail } = this.props;
        const posterURL = `https://image.tmdb.org/t/p/w500/${detail.poster_path}`;
        if(!detail){
                return <h1 className="text-center">LOADING... </h1>
        }else{
            return(
            <div>
                <div className="headers">
                    <h2 className="text-center">{detail.title}</h2>
                    <h4 className="text-center">{detail.tagline}</h4>
                </div>

                <div className="row">
                    <div className="col-md-5">
                        <img src={posterURL} className="detail-poster"/>
                    </div>
                    <div className="col-md-5 col-md-offset-2">
                        <h4 className="release-date">Release Date: {detail.release_date}</h4>
                        <p className="overview">
                            {detail.overview}
                        </p>

                        <h6 className="budget">Budget: {detail.budget}</h6>

                        <div className="genres">
                            <h4>Genres:</h4> 
                            { 
                                detail.genres ? detail.genres.map( (genre, i) => <h6 key={i}>{genre.name}</h6>) : null 
                            }
                        </div>
                        
                        <div className="production-companies">
                            <h4>Production companies:</h4> 
                            { 
                                detail.production_companies ? detail.production_companies.map( (company, i) => <h6 key={i}>{company.name}</h6>) : null 
                            }
                        </div>
                        
                        <div className="production-countries">
                            <h4>Production countries:</h4> 
                            { 
                                detail.production_countries ? detail.production_countries.map( (country, i) => <h6 key={i}>{country.name}</h6>) : null 
                            }
                        </div>
                        
                        <div className="spoken-languages">
                            <h6>Spoken Languages:</h6> 
                            { 
                                detail.spoken_languages ? detail.spoken_languages.map( (language, i) => <h6 key={i}>{language.name}</h6>) : null 
                            }
                        </div>
                    </div>
                </div>
            </div>
            )
        }    
    }
}

export default Detail;
