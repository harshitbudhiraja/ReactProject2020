import React, { Component } from 'react';
import Counter from './home';

class Counters extends Component {

    state = {
      values : [
           {id : 1 , value : 1},
           {id : 2 , value : 2},
           {id : 3 , value : 5},
           {id : 4 , value : 1} ]
      }
    render() { 
        console.log("props" , this.props)
        return (<div>
            <Counter/>  
            {/* {this.state.values.map(counter => (
               <Counter key ={counter.id} value={counter.value} selected={true}/>
            ))} */}

        </div>  );
    }
}
 

export default Counters;

