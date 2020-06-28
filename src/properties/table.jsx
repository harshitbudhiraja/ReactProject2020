import React from 'react';
import TableHeader from './tableHeader'
import TableBody from './tableBody';

const Table = ( props) => {
   const { columns , sortColumn , onSort , movies } = props;

    return (    
    <table className="table" style={{marginTop: "1rem"}}>
    
    <TableHeader columns={columns} sortColumn ={sortColumn} onSort={onSort}/>
    <TableBody movies={movies} columns={columns} />
    
    </table> );
}
 
export default Table;