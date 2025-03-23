import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import StyledLink from '../common/Link/LinkHome'
import Imageinlog1 from "/img/imghands.jpg";
import Imageinlog2 from "/img/PC.jpg";
import imginlog3 from "/img/invernadero.png";
import { ArrowLeft } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    
    if (!email) {
      validationErrors.email = "Este campo es obligatorio";
    } else if (!validateEmail(email)) {
      validationErrors.email = "El email no es válido";
    }

    if (!password) {
      validationErrors.password = "Este campo es obligatorio";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Formulario válido, procesando login...");
    }
  };

  return (
    <Container fluid className="login-container d-flex align-items-center justify-content-center min-vh-100">
      <Row className="shadow-lg rounded-4 overflow-hidden login-card" style={{ maxWidth: "900px" }}>
        <Col md={6} className="p-5 bg-light">
          <h2 className="fw-bold">Iniciar Sesión</h2>
          <p className="text-muted" style={{ fontSize: "0.9rem" }}>Nos alegramos de verte de nuevo 👋</p>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label style={{ fontSize: "0.8rem", color: "#6c757d" }}>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Introduzca su email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-danger" style={{ fontSize: "0.8rem" }}>{errors.email}</p>}
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label style={{ fontSize: "0.8rem", color: "#6c757d" }}>Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Introduzca su contraseña" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-danger" style={{ fontSize: "0.8rem" }}>{errors.password}</p>}
            </Form.Group>

            <div className="d-flex justify-content-between mb-3">
              <a href="#" className="text-primary text-decoration-none" style={{ fontSize: "0.85rem" }}>¿Olvidó su contraseña?</a>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <Button type="submit" style={{ backgroundColor: "#2e186a", borderColor: "#2e186a" }} className="w-100 me-2">Acceder</Button>
              <a href="/Home" className="d-flex align-items-center text-decoration-none">
                <img src={imginlog3} alt="Home" style={{ width: "35px", height: "35px" }} />
              </a>
            </div>
          </Form>

          <p className="mt-3 text-center" style={{ fontSize: "0.85rem" }}>
            ¿No tiene cuenta? <a href="/Register" className="text-primary text-decoration-none">Regístrese</a>
          </p>
        </Col>

        <Col md={6} className="p-5 text-white d-flex flex-column justify-content-between align-items-center bg-light">
          <div className="d-flex gap-3">
            <img src={Imageinlog1} alt="imghands" style={{ width: "180px", height: "230px", borderRadius: "8px" }} />
            <div className="d-flex flex-column justify-content-center align-items-center rounded-3" 
                 style={{ width: "180px", height: "230px", backgroundColor: "#2e186a", padding: "15px" }}>
              <div style={{ fontSize: "50px" }}>☺</div>
              <h5 className="fw-bold text-light mt-2 text-center" style={{ fontSize: "0.95rem" }}>Bienvenido de vuelta</h5>
              <p className="m-0 text-light text-center" style={{ fontSize: "0.85rem" }}>Inicia sesión y cuida de tu bienestar.</p>
            </div>
          </div>
          <img src={Imageinlog2} alt="PC" style={{ width: "380px", height: "160px", borderRadius: "8px", marginTop: "15px" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

