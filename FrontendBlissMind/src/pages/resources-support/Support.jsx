import { lazy } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card } from "antd";
import faqData from "./support.json";
import SupportBaseLayout from "./SupportBaseLayout";
import ResponsiveTitle from "./components/ResponsiveTitle";

const Container = lazy(() => import("../../common/Container"));
const SearchSupport = lazy(() => import("./components/SearchSupport"));

const Support = () => {
  const navigate = useNavigate();

  return (
    <>
      <SupportBaseLayout>
        <SearchSupport />

        <Container>
          <h1 style={{ marginTop: "5%", color: "#2e186a", fontSize: "1.5rem" }}>
            Preguntas Frecuentes por Categoria
          </h1>
          <Row gutter={[16, 16]} style={{ margin: "5vh 2vh 10vh" }}>
            {Object.entries(faqData).map(([path, data]) => (
              <Col key={path} xs={24} sm={12} md={8} lg={8} xl={8}>
                <Card
                  hoverable
                  style={{
                    border: "2px solid #ddd",
                    textAlign: "center",
                    backgroundColor: "transparent",
                  }}
                  onClick={() => navigate(`/support/${path}`)}
                >
                  <ResponsiveTitle>{data.label}</ResponsiveTitle>
                </Card>
              </Col>
            ))}
          </Row>

          <Row
            gutter={[16, 16]}
            style={{ margin: "4vh 2vh 20vh", paddingTop: "50px" }}
          >
            <Col
              xs={24}
              md={12}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "2.6rem",
                  fontWeight: "bold",
                  margin: 0,
                  lineHeight: 1.2,
                  color: "#2e186a",
                }}
              >
                ¿No encontraste la respuesta que buscabas?
              </h1>
            </Col>

            <Col
              xs={24}
              md={12}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#666",
                  margin: 0,
                }}
              >
                Si necesitas más ayuda o quieres reportar un problema,
                escríbenos a{" "}
                <a
                  href="mailto:soporte@blmai.com"
                  style={{ color: "#1890ff", textDecoration: "underline" }}
                >
                  soporte@blmai.com
                </a>{" "}
                y con gusto te asistiremos. 😊
              </p>
            </Col>
          </Row>
        </Container>
      </SupportBaseLayout>
    </>
  );
};

export default Support;
