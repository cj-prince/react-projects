import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
           <ul style={{display:"flex", justifyContent:"space-between",paddingRight:"2rem",paddingLeft:"2rem",cursor:"pointer"}}>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
           </ul> 
        </div>
    )
}

export default Nav
