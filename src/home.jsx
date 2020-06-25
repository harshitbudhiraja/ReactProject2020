import React, { Component } from 'react';
// import getGenres from './services/fakeGenreService';
import getMovies from './services/fakeMovieService';
import Pagination from './properties/pagination';
import {paginate} from './utilities/paginate'; 
import ListGroup from './properties/listing';
import { getGenres, genres } from './services/fakeGenreService';
import MoviesTable from './properties/moviesTable';

class moviesMap extends Component {
    state = { count : 0  , movies: [], pageSize : 4 , currentPage : 1 , genre : [] , selectedGenre: ""}  


    componentDidMount(){
        const genres = [{ _id: "" , name : 'All genre'}, ...getGenres() ]

        this.setState({
            movies: getMovies(),
            genre : genres
        });
        
    }
    handleGenreSelect=(genre)=>{
        this.setState({
            selectedGenre: genre,
            currentPage : 1
        });
    }


    handlePageChange = (page) =>{
        this.setState({
            currentPage : page
        })
    };

    handleSort = column => {
        console.log(column);
    }

    handleDelete=(movie)=>{

        console.log(movie);

        const newlist = this.state.movies.filter(mm => mm._id !== movie._id);

        this.setState({
            movies : newlist
        })

        }

        handleLike =(movie) =>{
                const movies = [...this.state.movies];
                const index = movies.indexOf(movie);
                movies[index] = {...movies[index]};
                movies[index].liked = !movies[index].liked;
                this.setState({movies});

        };

        

    render(){
        const count  =  this.state.movies.length;
        const { pageSize , currentPage ,selectedGenre, movies: myMovies } = this.state;

        const filteredMovies = selectedGenre && selectedGenre._id ? myMovies.filter(m =>m.genre._id === selectedGenre._id) : myMovies

        const movies = paginate( filteredMovies , currentPage , pageSize );

        if(this.state.movies.length === 0) return <h3  style={{color :"lightblue", fontStyle:"Arial" , textalign: "center" ,marginTop: "1rem" , marginLeft: "10px"}}> THERE ARE NO MOVIES LEFT IN THE DATABASE</h3>
        return ( 
            <div className="row" style={{display : "flex"}}>
            
                
               

                <div className="col-2">
                    <ListGroup items={this.state.genre}
                    itemsCount={filteredMovies.length}
                    textProperty="name" 
                    valueProperty="_id"
                    selectedItem = {this.state.selectedGenre}
                    onItemSelect={this.handleGenreSelect}/>
                </div>
                
                <div className="col">
                <h4  style={{marginTop: "1rem"}}> THERE ARE {filteredMovies.length} MOVIES IN THE DATABASE</h4>
                
                <MoviesTable movies={movies} 
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                onSort ={this.handleSort} />

<Pagination    
         itemsCount ={count} 
         pageSize={pageSize}
         onPageChange ={this.handlePageChange}
         currentPage ={currentPage}
        />
</div>
                
            
       
        
         </div>
         );
        }
    }
 
export default moviesMap;


