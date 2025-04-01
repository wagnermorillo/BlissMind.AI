import { Row, Col } from 'antd';
import { Typography } from 'antd';
const { Title, Text } = Typography;
 import './title.css'

const TitleDashboard = ({username}) => {
    return (
    <Row className='row-title'>
        <Col span={24}>
            <Title level={2} className='title-row'>¡Hola, {username}!</Title>
            <Text level={5} className='title-row sub-title'>Encantados de tenerte de vuelta</Text>
        </Col>
    </Row>
    );
};

export default TitleDashboard;