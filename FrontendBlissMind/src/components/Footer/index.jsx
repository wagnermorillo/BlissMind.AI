import { Row, Col } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { Link } from "react-router-dom";

import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

const Footer = () => {

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>Contacto</Language>
              <Large to="/">Cuéntanos tu experiencia</Large>
              <Para>
                ¿Tienes alguna pregunta? No dudes en ponerte en contacto con nosotros.
              </Para>
              <a href="mailto:contacto@blissmind.ai">
                <Chat>Chatea con nosotros</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>Política</Title>
              <Large to="/">Seguridad de la Aplicación</Large>
              <Large to="/">Principios de la Plataforma</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large to="/">Centro de Soporte</Large>
              <Large to="/">Atención al Cliente</Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>Dirección</Language>
              <Para>Santo Domingo, República Dominicana</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>Empresa</Title>
              <Large to="/">Sobre Nosotros</Large>
              <Large to="/">Blog</Large>
              <Large to="/">Prensa</Large>
              <Large to="/">Carreras</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink>
              <LogoContainer>
                <SvgIcon
                  src=""
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default Footer;
