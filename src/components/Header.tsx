import {Nav, Navbar} from "react-bootstrap";
import React from "react";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="px-3">
            <Navbar.Brand className="brand brand-padding" href="#">
                <span className="brand-highlight bg-dark text-light">Bernardo Antunes</span>{" "}
                <span className="brand-lowlight">aka</span> Bernasss12
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;