import { Container, Row, Col, Button } from "react-bootstrap";
import Imageinicio from "../imagenes/imgpage1.jpg"; 

const HeroSection = () => {
  return (
    <Container fluid style={{ background: "linear-gradient(to bottom, #f8f9fa, #D9EAFD)" }} className="py-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start">
          <p className="fw-semibold" style={{ color: "#A9A9A9" }}>Psicología + Tecnología</p> 
          <h1 className="fw-bold" style={{ color: "#14279B" }}> 
            Salud mental accesible y personalizada para todos
          </h1>
          <p className="text-muted">
            Una plataforma que combina la tecnología y expertos en salud mental 
            para mejorar tu bienestar de forma efectiva y profesional.
          </p>
          <div className="mt-4">
            <Button variant="outline-primary">Saber Más</Button>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <img src={Imageinicio} alt="imgpage1" className="img-fluid rounded shadow" />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;

