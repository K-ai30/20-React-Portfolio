import React from "react";
import "./Header.css";

function HeaderNav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-border">
            <a className="navbar-brand d-flex align-items-center text-white custom-background" href="#">Alia Kyle Perry</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" id="aboutbtn" href="#About"><i class="fas fa-user"></i> About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="portfoliobtn" href="#portfolio"><i class="fas fa-laptop-code"></i> Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contactbtn" href="#contact"><i class="far fa-envelope"></i> Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default HeaderNav;