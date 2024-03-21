import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="row space-between my-3 mx-3">
                <div className="center">
                    <span className="brand">Bernardo Antunes</span>
                </div>
                <div>
                    {/*<button className="mobile-nav-toggle collapsed" aria-controls="basic-navbar-nav" />*/}
                    <nav id="basic-navbar-nav">
                        <ul className="navigation">
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">Nome</Link></li>
                            <li><Link to="#">Some</Link></li>
                            <li><Link to="#">Come</Link></li>
                        </ul>
                    </nav>
                </div>
        </header>
    );
};

export default Header;