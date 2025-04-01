import { Flex, Card, Typography } from 'antd';
import { ExportOutlined, SmileOutlined, MehOutlined, FrownOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
const { Text } = Typography;
import './cardFeeling.css'

const CardFeeling = () => {
    return (
        <Link to={"/Dashboard"} style={{ all: 'unset', cursor: 'pointer' }}>
        <Card className='card-feeling' title={
            <Text className="title-card"> 
              ¿Cómo te sientes hoy?
            </Text>}
        extra={<ExportOutlined className='title-card'/>}>
        <Flex justify='space-between' gap={"2vw"} wrap>
            <Flex justify='center' gap={10} wrap style={{flexBasis: "100%"}}>
            <SmileOutlined className='emoji-icon'/>
            <MehOutlined className='emoji-icon' />
            <FrownOutlined className='emoji-icon' />
            </Flex>
        <Text style={{color : "#F8FAFC", fontSize : "12px", flexBasis: "100%"}}>
        Tu bienestar es importante para nosotros. Tómate un momento y cuéntanos cómo te sientes.
            </Text>
        </Flex>
    </Card>
    </Link>
    );
};

export default CardFeeling;