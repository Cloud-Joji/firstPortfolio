import React, { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';
import { db } from "../../firebase";
import { Row, Col, Badge } from 'react-bootstrap';

const Projects = () => {

  const [projects, setProjects] = useState([]);

  // función para enseñar los datos de firebase
  const getLinks = async () => {
    db.collection("proyectos").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProjects(docs);
    });
  };

  // useeffect refresca la página y ejecuta una función en cada refresh
  useEffect(() => {
    getLinks();
  }, []);
  


  return (
    <div>
      <h1>Proyectos</h1>
      <Row>
          {projects.map((project) => (
            <Col>
              <Card style={{ width: '18rem' }} className="card border-dark mb-3" key={project.id}>
              <Card.Body className="card-body">
                <Card.Title className="card-title text-secondary">{project.proyecto}</Card.Title>

                { project.status === true ? 
                  <Card.Text><Badge pill variant="info">Finalizado</Badge></Card.Text> : 
                  <Card.Text><Badge pill variant="warning">En progeso</Badge></Card.Text>}

                <Card.Text className="card-text">{project.descripcion}</Card.Text>
                <Card.Link href={project.url} target="_blank" className="text-white btn btn-secondary text-align-center">¡Ir al sitio!</Card.Link>
              </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  )
}

export default Projects
