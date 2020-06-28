import React, { Component } from 'react';
import MoviesMap from './home';
import "./App.css";
import {Route ,Redirect, Switch} from 'react-router-dom';
import Rentals from './routing/rental';
import Customers from './routing/customers';
import NotFound from './routing/not-found';
import NavBar from './routing/navBar';
import MoviesForm from './routing/moviesForm'


class App extends Component {
    render() { 
        return (
            <React.Fragment>

                <NavBar/>
               <main className="container">
                <Switch>
                <Route path='/movies/:id' component={MoviesForm}/>
                <Route path='/movies' component={MoviesMap}/>
                <Route path='/rentals' component={Rentals}/>
                <Route path='/Notfound' component={NotFound}></Route>
                <Route path="/customers" component={Customers}></Route>
                <Route path='/' exact component={MoviesMap}/>
                <Redirect from='/' exact to="/movies" />
                <Redirect to="/Notfound"></Redirect>
                </Switch>
                </main>

            </React.Fragment> 
            
         );
    }
}
 
export default App;