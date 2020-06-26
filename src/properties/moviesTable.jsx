import React, { Component } from 'react';
import LikeButton from './like';
import Table from './table';



class MoviesTable extends Component {
    columns = [
       { path: 'title' , label : 'Title' },
       { path: 'genre.name' , label : 'Genre'},
       { path: 'numberInStock' , label : 'Stock'},
       { path: 'dailyRentalRate' , label : 'Rate'},
       { key : "delete" , content :movie=> <button className="btn btn-secondary btn-sm" onClick={()=> this.props.onDelete(movie)}>Delete</button> },
       { key: "like" , content:movie=>  <LikeButton liked= {movie.liked} onClick={() => this.props.onLike(movie)}/> },
    
    ];
  
    render() { 
        const {movies , onSort, columns , sortColumn }  = this.props ;
        // const {movies} => props= {}
        // {console.log(`this is the movies from moviesTable (2) movies= ${movies}`)}
        
        
        return (  
            <Table onSort={onSort} movies
            ={movies} columns={columns} sortColumn={sortColumn}/>
            
        /* <tbody>
            {movies.map(movie =>(
                <tr key = {movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td></td>
                    <td> 
                   
                    
                    </td>
                </tr>
            ))}
        </tbody> */
         )

    }
}
 
export default MoviesTable;