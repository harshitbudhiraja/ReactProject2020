import React, { Component } from 'react';
import _ from 'lodash';


class TableBody  extends Component {
    renderCell =(item, column)=>{
        if(column.content) return column.content(item)

        else
            return _.get(item , column.path)
        

    };

    createKey=(item , column)=>{
        return item._id + (column.path || column.key)
    }
    
    render() { 
        const { movies , columns } = this.props;
        return ( 
            <tbody>
            
            {
    
            console.log(movies[1])}
            {movies.map(item =>
            <tr>
            {/* {console.log(`it is here inside tr ${movies[1].title}  adn and ${item._id}`)} */}
            {/* {columns.map(column =>  <td key={this.createKey(item ,column)}>{this.renderCell(item,column) }</td>)} */}
              
            </tr> )} 
            
        </tbody> );
    }
}
 
export default TableBody ;