import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

import SobreMi from '../SobreMi/SobreMi';


// Estilos
import 'react-toastify/dist/ReactToastify.css';


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
              <Nav.Link href="/sobre-mi"> Sobre mí </Nav.Link>
              <Nav.Link href="/proyectos"> Proyectos </Nav.Link>
              <Nav.Link href="/contacto"> Contacto </Nav.Link>
            </Nav>

          </Navbar.Collapse>
          
        </Navbar>   

        <Container fluid>
          <Row>
            <Col>

              <Route exact path="/" render = { () => {
                  return <div>
                    <h1>Home</h1>                    
                  </div>
              }}/>

              <Route exact path="/sobre-mi" render = { () => {
                return <div>
                  <SobreMi />
                </div>
              }}/>

              <Route exact path="/proyectos" render = { () => {
                return <div>
                  <h1>Proyectos</h1>
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

          <ToastContainer /> 
        </Router>

      </div>

    </div>
  );
}

export default NavigationBar;
