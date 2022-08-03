import React from "react";

function NavBar() {

    function handleClick(e) {
        e.preventDefault()
        window.location.replace("/donate")
    }

    return (
        <nav class="navbar navbar-expand-md navbar-light bg-light" style={{ padding: 15, fontSize: 18}} >
            <a class="navbar-brand " href="/" style={{ color: "#565656", fontSize: 25, letterSpacing: 1 }}>The Gregory Weiner Foundation</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav nav-pills">
                    <li class="nav-item active">
                        <a class="nav-link text-decoration-none" style={{ color: "#565656" }} href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-decoration-none" style={{ color: "#565656" }} href="/about">About Greg</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-decoration-none" style={{ color: "#565656" }} href="/news">News</a>
                    </li>
                    <li>
                        <button class="btn btn-danger navbar-btn" style={{ fontSize: 18, paddingLeft: 18, paddingRight: 18 }} onClick={handleClick}>Donate</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;