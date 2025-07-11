import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Card } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Mon App React</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#accueil">Accueil</Nav.Link>
              <Nav.Link href="#features">Fonctionnalités</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1 className="mb-4">Bienvenue dans mon premier projet React !</h1>

          <div className="d-flex gap-3 flex-wrap">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Carte 1</Card.Title>
                <Card.Text>
                  Ceci est la première carte utilisant React-Bootstrap.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Carte 2</Card.Title>
                <Card.Text>
                  Ceci est la deuxième carte. Cool non ?
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Carte 3</Card.Title>
                <Card.Text>
                  Encore une autre carte. On s'amuse bien !
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
