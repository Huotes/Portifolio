import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Athos Aurélio</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">Sobre</Nav.Link>
          <Nav.Link href="#skills">Habilidades</Nav.Link>
          <Nav.Link href="#projects">Projetos</Nav.Link>
          <Nav.Link href="#contact">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
