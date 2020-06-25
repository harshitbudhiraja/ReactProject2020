import React, { Component } from 'react';

class LikeButton extends Component {

    render() { 
        
        let icon = "fa fa-heart"
        if(! this.props.liked) icon += "-o"    
        return ( <i onClick={this.props.onClick} style={{color :"red" , cursor: "pointer"}} className={icon} aria-hidden="true"></i> );
    }
}
 
export default LikeButton;