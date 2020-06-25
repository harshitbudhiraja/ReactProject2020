import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { paginate } from '../utilities/paginate';

const Pagination = (props) => {
const {itemsCount , pageSize, currentPage , onPageChange} = props;

const pagesCount = itemsCount/ pageSize;
if(Math.ceil(pagesCount) ===1) return null;
const pages = _.range( 1 , pagesCount+1);


    return (  
    <div className="front">
        <nav aria-label="Page navigation example">
            <ul className="pagination">
            
            {pages.map(page =>
                <li key={page} className= { page === currentPage ? 'page-item-active' : 'page-item' }>
                <a href="#" onClick={() =>onPageChange(page)} className="page-link">{page}</a>
                </li>      
                )}
                
        
            </ul>
        </nav>   
    </div>
  
  );
}

Pagination.propTypes = {
    itemsCount : PropTypes.number.isRequired,
    pageSize : PropTypes.number.isRequired,
    currentPage : PropTypes.number.isRequired,
    onPageChange:  PropTypes.func.isRequired


};
 
export default Pagination;