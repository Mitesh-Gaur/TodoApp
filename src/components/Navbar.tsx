import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../resources/routes-constants';

export default function CustomNavbar() {
  const location = useLocation();

  const tabList = [
    { key: 1, title: 'Home', url: ROUTES.HOMEPAGE },
    { key: 2, title: 'About', url: ROUTES.ABOUTPAGE },
  ]

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href={ROUTES.HOMEPAGE}>TodoApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"
            activeKey={location.pathname}
          >
            {
              tabList.map((item)=>{
                return <Nav.Link 
                  key={item.key}
                  href={item.url}
                  >
                    {item.title}
                </Nav.Link>
              })
            }
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}