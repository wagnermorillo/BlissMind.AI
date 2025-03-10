import { Navbar, Nav, Button, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="fw-bold" style={{ color: "#14279B" }}>
          BlissMind.AI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/sobre-nosotros" target="_blank" rel="noopener noreferrer">Sobre Nosotros</Nav.Link>
            <Nav.Link href="/caracteristicas" target="_blank" rel="noopener noreferrer">Características</Nav.Link>
            <Nav.Link href="/beneficios" target="_blank" rel="noopener noreferrer">Beneficios</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Login" target="_blank" rel="noopener noreferrer" className="text-primary">
              Iniciar Sesión
            </Nav.Link>
            <Nav.Link href="/Registrarse" target="_blank" rel="noopener noreferrer" className="text-primary">
              Regístrate
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
