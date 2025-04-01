import { Flex, Card } from 'antd';
import { Typography } from 'antd';
const { Text, Title } = Typography;
import './sessionQty.css'

const SessionQuantity = ({quantity}) => {
    return (
    <Card className='card-session-qty' title={<div style={{marginTop: "10px"}}>Sesiones<br />Terapeuticas</div>}>
        <Flex vertical >
            <Title level={1} style={{color : "white"}}>{quantity}</Title>
            <Text style={{color : "#F8FAFC", fontSize : "12px"}}>
            Sesiones tuvieron lugar este mes
            </Text>
        </Flex>
    </Card>
    );
};

export default SessionQuantity;