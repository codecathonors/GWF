import React from "react";
import { NavLink } from "react-router-dom";

function NavBar( ) {



    return (
        <>
            <nav className="nav">
                <NavLink to="/" className="site-title">The Gregory Weiner Foundation</NavLink>
                <ul>
                    <li><NavLink exact to="/">Our Mission</NavLink></li>
                    <li><NavLink to="/about">About Greg</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/donate">Donate</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;