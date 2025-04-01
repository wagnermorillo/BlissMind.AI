import {React, lazy, useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Flex, Layout, Menu, Row, Col, Typography } from 'antd';
const { Header, Content, Sider } = Layout;
const { Title} = Typography;
import './styles.css'

const TitleDashboard = lazy(() => import("../../components/Card/title"));
const CardComingAct = lazy(() => import("../../components/Card/coming"));
const LastSession = lazy(() => import("../../components/Card/lastSession"));
const SessionQuantity = lazy(() => import("../../components/Card/sessionQty"));
const CardFeeling = lazy(() => import("../../components/Card/cardFeeling"));
const CardCarousel = lazy(() => import("../../components/Card/carousel"));
const ChatBot = lazy(() => import("../../components/Card/chatbot"));
const DropDown = lazy(() => import("./dropdown"));

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

// opciones del sider menu lateral
const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

// datos para las últimas sesiones
const sessionsData = [
    { title: "Sesión 1", doctor: "Dr. Alex Rodríguez", minutes: 45, date: "10/01/2024" },
    { title: "Sesión 2", doctor: "Dra. María López", minutes: 60, date: "15/01/2024" }
];

// datos para futuras sesiones
const sessionFutureData = [
    { avatarIcon: <UserOutlined />, name: "Alex Rodríguez", profession: "Psicoterapeuta", time: "12:00 PM", day: "Hoy", }
];

// datos para videos recomendados
const thumbnails = [
    `https://img.youtube.com/vi/iEdv9X8JbsA/maxresdefault.jpg`,
    `https://img.youtube.com/vi/2UcCN6fztmM/maxresdefault.jpg`,
    `https://img.youtube.com/vi/ln1JTOJ4dyU/maxresdefault.jpg`
];


const DashBoard = () => {
    // para el nivel del titulo
    const [titleLevel, setTitleLevel] = useState(2);

    // Función callback cuando se colapsa o expande la barra lateral
    const onCollapse = (collapsed) => {
        // setCollapsed(collapsed);
        // Cambiar el nivel del título basado en el estado de colapso
        if (collapsed) {
            setTitleLevel(5); // Cuando se colapsa, cambiar a nivel 5
        } else {
            setTitleLevel(2); // Cuando se expande, restaurar a nivel 2
        }
    };
    return (
        <Layout className="sider-size">
            <Sider className="color fixed-sider" breakpoint='sm' onCollapse={onCollapse}>
                <Flex wrap justify='center' align='flex-start'>
                    <Title level={titleLevel} className='title'>BlissMind</Title>
                </Flex>
                <Menu className='menu color' theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header className='custom-header color'>
                    <DropDown />
                </Header>
                <Content className='container-flex color'>
                    <div>
                        <TitleDashboard username="John" />
                        <Row wrap style={{ margin: "0 2vh" }} gutter={[16, 16]}>
                            <Col xs={24} sm={24} md={12} lg={9} xl={9} >
                                <CardComingAct participants={sessionFutureData} />
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                                <LastSession sessions={sessionsData} />
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={5} xl={5}>
                                <SessionQuantity quantity={0} />
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={5} xl={5} >
                                <CardFeeling />
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={10} xl={10} >
                                <CardCarousel LinkVideos={thumbnails} />
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={9} xl={9}>
                                <ChatBot />
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};
export default DashBoard;