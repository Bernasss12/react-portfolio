import React from "react";
import {Nav, Navbar, Container} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className="brand brand-padding col-auto" href="#">
                    <span className="brand-highlight">Bernardo Antunes</span>
                    <span className="brand-lowlight">aka</span>Bernasss12
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;