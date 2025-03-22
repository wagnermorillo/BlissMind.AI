import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import './styles.css'
import { Link } from "react-router-dom";

const Header = () => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setVisibility(false);
  };

  const MenuItem = () => (
    <div className="menu-items">
      <div className="custom-nav-link-small" onClick={() => scrollTo("about")}>
        <span className="nav-span">Sobre Nosotros</span>
      </div>
      <div className="custom-nav-link-small" onClick={() => scrollTo("mission")}>
        <span className="nav-span">Conócenos</span>
      </div>
      <div className="custom-nav-link-small" onClick={() => scrollTo("product")}>
        <span className="nav-span">Servicios</span>
      </div>
      <div className="custom-nav-link-small" style={{ width: "150px" }}>
        <span className="nav-span">
          <Link to="/Login">
            <Button>
              Iniciar Sesion
            </Button>
          </Link>
        </span>
      </div>
      <div className="custom-nav-link-small" style={{ width: "150px" }}>
      <span className="nav-span">
          <Link to="/Register">
            <Button>
              Registrate
            </Button>
          </Link>
        </span>
      </div>
    </div>
  );

  return (
    <header className="header-section">
      <Container>
        <Row justify="space-between" align="middle">
          <Link to="/" aria-label="homepage" className="logo-container">
          <SvgIcon src="LOGO.webp" width="190px" height="107px" />
          </Link>
          <div className="not-hidden">
          <MenuItem />
          </div>
          <div className="burger" onClick={toggleButton}>
            <MenuOutlined className="outline" />
          </div>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton} width={300}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <div className="label" onClick={toggleButton}>
              <Col span={100}>
                <h5 className="Menú">Menu</h5>
              </Col>
              <Col span={12}>
                <MenuOutlined className="outline" />
              </Col>
            </div>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </header>
  );
};

export default Header;
