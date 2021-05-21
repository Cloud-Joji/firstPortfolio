import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, Image } from 'react-bootstrap';

import SobreMi from '../SobreMi/SobreMi';
import Projects from '../Projects/Projects';

function NavigationBar() {
  return (
    <div className="container p-4">
      <div className="row d-flex justify-content-center">
        <Router>

        <Navbar bg="primary" variant="dark" fixed="bottom" >

          <Navbar.Brand href="/"> DM </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto">
              <Link to="/sobre-mi" className="nav-link"> Sobre mí </Link>
              <Link to="/proyectos" className="nav-link">  Proyectos  </Link>
              <Link to="/contacto" className="nav-link"> Contacto   </Link>
            </Nav>

          </Navbar.Collapse>
          
        </Navbar>   

        <Container fluid>
          <Row>
            <Col>
              <Route exact path="/" render = { () => {
                  return <div>
                    <h1>Home</h1>
                    <Image src="https://placeimg.com/900/650/animals" fluid className="rounded mx-auto d-block" />
                  </div>
              }}/>

              <Route exact path="/sobre-mi" render = { () => {
                return <div>
                  <SobreMi />
                </div>
              }}/>

              <Route exact path="/proyectos" render = { () => {
                return <div>
                  <Projects />
                </div>
              }}/>

              <Route exact path="/contacto" render = { () => {
                return <div>
                  <h1>Contacto</h1>
                </div>
              }}/>

            </Col>
          </Row>
        </Container>

        </Router>

      </div>

    </div>
  );
}

export default NavigationBar;
