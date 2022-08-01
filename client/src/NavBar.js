import React from "react";
import { useHistory } from "react-router-dom";

function NavBar( ) {

    // const history = useHistory()

    function handleClick(e) {
        e.preventDefault()
        window.location.replace("/donate")
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">The Gregory Weiner Foundation</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About Greg</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/news">News</a>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-danger navbar-btn" onClick={handleClick}>Donate</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;