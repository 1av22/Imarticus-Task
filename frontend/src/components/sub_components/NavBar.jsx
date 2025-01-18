import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css'; // Custom styling for colors and spacing

const NavBar = () => {
    return (
        <Navbar expand="lg" sticky="top" className="custom-navbar w-100">
            <Container fluid className="upperNav" style={{ backgroundColor: 'white', width: '100vw', padding: '16px 0' }}>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img
                        src="https://cdn.pegasus.imarticus.org/imarticus12/newIL12.svg"
                        alt="Imarticus Learning Logo"
                        height="60"
                        className="me-3"
                    />
                </Navbar.Brand>
            </Container>
            <Container fluid className="lowerNav">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto justify-content-center" style={{ fontSize: '14px', padding: '16px 0' }}>
                        <Nav.Link href="#overview" className="nav-link-active">
                            Overview
                        </Nav.Link>
                        <Nav.Link href="#hiring-partners">Hiring Partners</Nav.Link>
                        <Nav.Link href="#curriculum">Curriculum</Nav.Link>
                        <Nav.Link href="#trainers">Trainers</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#success-stories">Success Stories</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#faqs">FAQs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
