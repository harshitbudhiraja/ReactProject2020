import React, { Component } from 'react';
import LikeButton from './like';

const MoviesTable = (props) => {
    const {movies , onLike, onSort, onDelete }  = props ;
    // const {movies} => props= {}

    return (  <table className="table" style={{marginTop: "1rem"}}>

    <thead>
        <tr>
            <th onClick={()=> {onSort('title')}} scope="col" style={{cursor :"pointer"}}>title </th>
            <th onClick={()=> {onSort('genre.name')}} scope="col" style={{cursor :"pointer"}}>Genre</th>
            <th onClick={()=> {onSort('numberInStock')}} scope="col" style={{cursor :"pointer"}}>Ratings</th>
            <th onClick={()=> {onSort('dailyRentalRate')}} scope="col" style={{cursor :"pointer"}}>Average Rating</th>
            <th/>
        </tr>
    </thead>
    <tbody>
        {movies.map(movie =>(
            <tr key = {movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button className="btn btn-secondary btn-sm" onClick={()=> onDelete(movie)}>Delete</button></td>
                <td> 
                <LikeButton 
                liked={movie.liked} 
                 onClick={() => onLike(movie)}
                  />
                
                </td>
            </tr>
        ))}
    </tbody>
    </table>
     );
}
 
export default MoviesTable;