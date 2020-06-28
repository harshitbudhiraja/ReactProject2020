import React from 'react';
import {Link } from 'react-router-dom';
import ".././App.css"

const NavBar = () => {
    return (  
    <div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{padding:"12px" }}>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{marginLeft:"14px"}}>
        <span class="navbar-toggler-icon"></span>
         </button>

        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
         <li class="nav-item active">
        <Link class="nav-link" to="#">Vidly <span class="sr-only">(current)</span></Link>
        </li>

        <li class="nav-item">
         <Link class="nav-link" to="/movies">Movies</Link>
         </li>

        <li class="nav-item">
        <Link class="nav-link" to="/customers">Customers</Link>
         </li>

       <li class="nav-item">
         <Link class="nav-link" to="/rentals">Rentals</Link>
        </li>
    </ul>
    </div>
</nav>


        </div>  );
}
 
export default NavBar;