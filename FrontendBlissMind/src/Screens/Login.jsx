import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Imageinlog1 from "../imagenes/imghands.jpg";
import Imageinlog2 from "../imagenes/PC.jpg";

const Login = () => {
  return (
    <Container fluid className="login-container d-flex align-items-center justify-content-center min-vh-100">
      <Row className="shadow-lg rounded-4 overflow-hidden login-card" style={{ maxWidth: "900px" }}>
        {/* Sección Izquierda - Formulario */}
        <Col md={6} className="p-5 bg-light">
          <h2 className="fw-bold">Iniciar Sesión</h2>
          <p className="text-muted">Nos alegramos de verte de nuevo 👋</p>

          <Form>
  <Form.Group controlId="email" className="mb-3">
    <Form.Label style={{ fontSize: "0.9rem", color: "#6c757d" }}>Email</Form.Label>
    <Form.Control type="email" placeholder="Introduzca su email" />
  </Form.Group>

  <Form.Group controlId="password" className="mb-3">
    <Form.Label style={{ fontSize: "0.9rem", color: "#6c757d" }}>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Introduzca su contraseña" />
  </Form.Group>

            <div className="d-flex justify-content-between mb-3">
              <a href="#" className="text-primary text-decoration-none">¿Olvidó su contraseña?</a>
            </div>

            <Button style = {{ backgroundColor: "#14279B" }} className="w-100">Acceder</Button>
          </Form>

          <p className="mt-3 text-center">
            ¿No tiene cuenta? <a href="#" className="text-primary text-decoration-none">Regístrese</a>
          </p>
        </Col>

        {/* Sección Derecha - Imágenes y Cuadro Azul */}
        <Col md={6} className="p-5 text-white d-flex flex-column justify-content-between align-items-center bg-light">
          <div className="d-flex gap-3">
            <img src={Imageinlog1} alt="imghands" style={{ width: "180px", height: "220px", borderRadius: "8px" }} />
            <div className="d-flex flex-column justify-content-center align-items-center rounded-3" 
                 style={{ width: "180px", height: "220px", backgroundColor: "#14279B", padding: "20px" }}>
              <div style={{ fontSize: "60px" }}>☺</div>
              <h5 className="fw-bold text-light mt-2 text-center">Bienvenido de vuelta</h5>
              <p className="m-0 text-light text-center">Inicia sesión y cuida de tu bienestar.</p>
            </div>
          </div>
          <img src={Imageinlog2} alt="PC" style={{ width: "380px", height: "160px", borderRadius: "8px", marginTop: "15px" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
