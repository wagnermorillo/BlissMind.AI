import React, { lazy } from "react";
import { Row, Col } from "antd";
import DefaultLayoutPatient from "../../layouts/DefaultLayoutPatient";
import { UserOutlined } from "@ant-design/icons";
import "./styles.css";

const TitleDashboard = lazy(() => import("../../components/Card/title"));
const CardComingAct = lazy(() => import("../../components/Card/coming"));
const LastSession = lazy(() => import("../../components/Card/lastSession"));
const SessionQuantity = lazy(() => import("../../components/Card/sessionQty"));
const CardFeeling = lazy(() => import("../../components/Card/cardFeeling"));
const CardCarousel = lazy(() => import("../../components/Card/carousel"));
const ChatBot = lazy(() => import("../../components/Card/chatbot"));

// datos para las últimas sesiones
const sessionsData = [
  {
    title: "Sesión 1",
    doctor: "Dr. Alex Rodríguez",
    minutes: 45,
    date: "10/01/2024",
  },
  {
    title: "Sesión 2",
    doctor: "Dra. María López",
    minutes: 60,
    date: "15/01/2024",
  },
];

// datos para futuras sesiones
const sessionFutureData = [
  {
    avatarIcon: <UserOutlined />,
    name: "Alex Rodríguez",
    profession: "Psicoterapeuta",
    time: "12:00 PM",
    day: "Hoy",
  },
];

// datos para videos recomendados
const thumbnails = [
  `https://img.youtube.com/vi/iEdv9X8JbsA/maxresdefault.jpg`,
  `https://img.youtube.com/vi/2UcCN6fztmM/maxresdefault.jpg`,
  `https://img.youtube.com/vi/ln1JTOJ4dyU/maxresdefault.jpg`,
];

const DashboardPatient = () => {
  return (
    <DefaultLayoutPatient>
      <div style={{margin: 0}}>
        <TitleDashboard username="John" />
        <Row wrap style={{ margin: "0 2vh" }} gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={9} xl={9}>
            <CardComingAct participants={sessionFutureData} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={10} xl={10}>
            <LastSession sessions={sessionsData} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={5} xl={5}>
            <SessionQuantity quantity={0} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={5} xl={5}>
            <CardFeeling />
          </Col>
          <Col xs={24} sm={24} md={12} lg={10} xl={10}>
            <CardCarousel LinkVideos={thumbnails} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={9} xl={9}>
            <ChatBot />
          </Col>
        </Row>
      </div>
    </DefaultLayoutPatient>
  );
};
export default DashboardPatient;
