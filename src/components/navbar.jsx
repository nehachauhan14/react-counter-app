import React, {Component} from 'react';

// stateless functional component

const NavBar = (props) => {
    return(
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#"></a>
          <span className="badge badge-pill badge-primary">{props.totalCounter} </span>
        </nav>
    );
}

export default NavBar ;