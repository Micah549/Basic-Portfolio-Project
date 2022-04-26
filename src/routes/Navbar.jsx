import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import '../themes/Navigation.css';


class Navbar extends Component{
    render()
    {
        return(
        
            <div className='App'>
                 
             <header className='Navigation-Header hide-small'>
                 
             <nav>
             <NavLink className="Nav-Link" to= '/About'> About</NavLink>
             <NavLink className="Nav-Link" to= '/Contact'> Contact</NavLink>
             <NavLink className="Nav-Link" to= '/Projects'> Projects</NavLink>
             <NavLink className="Nav-Link" to= '/Skills'> Skills</NavLink>
             <NavLink className="Nav-Link" to='/Assignment'>Assignment</NavLink>
            </nav>
            </header>
       
            </div>
          
        )
    }
}
    export default Navbar;