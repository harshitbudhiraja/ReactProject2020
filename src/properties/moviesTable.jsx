import React, { Component } from 'react';
import LikeButton from './like';
import Table from './table';
import {Link} from 'react-router-dom';


class MoviesTable extends Component {
    columns = [
    { path: "title" , label : "Title" , content : movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
       { path: "genre.name" , label : "Genre"},
       { path: "numberInStock" , label : "Stock"},
       { path: "dailyRentalRate" , label : "Rate"},
       { key : "delete" , content :movie=> (<button className="btn btn-secondary btn-sm" onClick={()=> this.props.onDelete(movie)}>Delete</button> )},
       { key: "like" , content:movie=> ( <LikeButton liked= {movie.liked} onClick={() => this.props.onLike(movie)}/> )},
    
    ];
  
    render() { 
        
        const {movies , onSort , sortColumn }  = this.props ;
       
        
        
        return (  
            <Table onSort={onSort} movies
            ={movies} columns={this.columns} sortColumn={sortColumn}/>
         )

    }
}
 
export default MoviesTable;