import { lazy, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import SubscriptionPlans from "../../components/ModalSubs/SubscriptionPlans.jsx";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Footer = lazy(() => import("../../components/Footer"));
const Header = lazy(() => import("../../components/Header"));

const Home = () => {
  const [isPlanModalVisible, setPlanModalVisible] = useState(false);

  // Función para mostrar los planes
  const showPlans = () => setPlanModalVisible(true);

  // Asignamos la función al botón antes de renderizar los componentes
  IntroContent.button[1].onClick = showPlans;

  return (
    <>
      <Header />
      <Container>
        <ScrollToTop />
        <ContentBlock
          direction="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button} // Aquí ya tiene la función onClick asignada
          icon="helps.webp"
          id="intro"
        />
        <MiddleBlock
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          button={MiddleBlockContent.button}
        />
        <ContentBlock
          direction="left"
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          icon="graphs.svg"
          id="about"
        />
        <ContentBlock
          direction="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="product-launch.svg"
          id="mission"
        />
        <ContentBlock
          direction="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="waving.svg"
          id="product"
        />
        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </Container>
      <Footer />
      <Modal show={isPlanModalVisible} onHide={() => setPlanModalVisible(false)} centered size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <SubscriptionPlans />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;
