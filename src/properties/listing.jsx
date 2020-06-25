import React, { Component } from 'react';


const ListGroup = (props) => {

    const {items , onItemSelect ,textProperty , valueProperty , selectedItem } = props;
    return (                 
<ul className="list-groups" style={{marginTop: "5rem"}}>

{items.map(item => <li key={item._id} 
onClick={() => onItemSelect(item)}
className={ selectedItem === item ? "list-group-item active" : "list-group-item"} 
style={{ padding:"17px" , fontSize :'14px' , cursor: "pointer"}}>
{item.name} 
</li>)}

</ul>
);
}

ListGroup.defaultProps = {
    textProperty : "name",
    valueProperty: "_id"

}
 

export default ListGroup;