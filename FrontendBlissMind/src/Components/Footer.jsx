import { StrictMode } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Imagenfb from "../imagenes/Facebook.png";
import Imagenws from "../imagenes/whatsapp.png";
import Imagenig from "../imagenes/instagram.png"; 
import Imagentw from "../imagenes/twitter.png";  

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#D9EAFD" }} className="py-5">
      <hr style={{ borderTop: '2px solid #14279B', margin: '0 auto 40px auto', width: '90%' }} />

      <Container className="py-4">
        <Row className="text-center text-md-start">
          {/* Sección de Enlaces Rápidos */}
          <Col md={3} className="mb-4 mb-md-0">
            <h6 className="text-uppercase" style={{ color: '#4a90e2', fontSize: '14px' }}>Enlaces Rápidos</h6>
            <ul className="list-unstyled" style={{ fontSize: '13px', color: '#666' }}>
              <li className="d-inline-block me-3"><a href="/sobre-nosotros" style={{ color: '#666', textDecoration: 'none' }}>Sobre Nosotros</a></li>
              <li className="d-inline-block me-3"><a href="/caracteristicas" style={{ color: '#666', textDecoration: 'none' }}>Características</a></li>
              <li className="d-inline-block"><a href="/beneficios" style={{ color: '#666', textDecoration: 'none' }}>Beneficios</a></li>
            </ul>
          </Col>

          {/* Sección de Contacto */}
          <Col md={3} className="mb-4 mb-md-0">
            <h6 className="text-uppercase" style={{ color: '#4a90e2', fontSize: '14px' }}>Contacto</h6>
            <ul className="list-unstyled" style={{ fontSize: '13px', color: '#666' }}>
              <li>Email: info@blissmind.ai</li>
              <li>Teléfono: +123 456 789</li>
            </ul>
          </Col>

          {/* Sección de Redes Sociales */}
          <Col md={3} className="mb-4 mb-md-0">
            <h6 className="text-uppercase" style={{ color: '#4a90e2', fontSize: '14px' }}>Síguenos</h6>
            <ul className="list-unstyled" style={{ fontSize: '13px', color: '#666' }}>
              <li className="d-inline-block me-3">
                <a href="#" style={{ color: '#666', textDecoration: 'none' }}>
                  <img src={Imagenfb} alt="Facebook" style={{ width: '24px', height: '24px' }} />
                </a>
              </li>
              <li className="d-inline-block me-3">
                <a href="#" style={{ color: '#666', textDecoration: 'none' }}>
                  <img src={Imagenws} alt="WhatsApp" style={{ width: '24px', height: '24px' }} />
                </a>
              </li>
              <li className="d-inline-block me-3">
                <a href="#" style={{ color: '#666', textDecoration: 'none' }}>
                  <img src={Imagenig} alt="Instagram" style={{ width: '24px', height: '24px' }} />
                </a>
              </li>
              <li className="d-inline-block">
                <a href="#" style={{ color: '#666', textDecoration: 'none' }}>
                  <img src={Imagentw} alt="Twitter" style={{ width: '24px', height: '24px' }} />
                </a>
              </li>
            </ul>
          </Col>

          {/* Sección de Información Adicional */}
          <Col md={3}>
            <h6 className="text-uppercase" style={{ color: '#4a90e2', fontSize: '14px' }}>Más Información</h6>
            <ul className="list-unstyled" style={{ fontSize: '13px', color: '#666' }}>
              <li><a href="/politica-privacidad" style={{ color: '#666', textDecoration: 'none' }}>Política de Privacidad</a></li>
              <li><a href="/terminos-condiciones" style={{ color: '#666', textDecoration: 'none' }}>Términos y Condiciones</a></li>
            </ul>
          </Col>
        </Row>

        {/* Derechos Reservados */}
        <Row className="text-center mt-4">
          <Col>
            <p style={{ fontSize: '12px', color: '#999' }}>&copy; {new Date().getFullYear()} BlissMind.AI. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;