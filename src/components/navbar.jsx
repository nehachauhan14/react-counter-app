import React, {Component} from 'react';



class NavBar extends Component{
    state ={};
    
    render(){
        return(
            <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#"></a>
              <span className="badge badge-pill badge-primary">{this.props.totalCounter} </span>
            </nav>
        )
    }
}

export default NavBar ;