import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
    state = {}
    render() {
        return (
           
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark" style={{marginBottom: 20}}>

               
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/employeedashboard">Employee Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                 
                </ul>
            </nav>


        );
    }
}

export default NavBar;