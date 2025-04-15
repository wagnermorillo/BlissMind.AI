import { Flex, Card, Space, Input, Button } from 'antd';
import { Typography } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { Stars } from 'react-bootstrap-icons'
const { Text } = Typography;
import './chatbot.css'

const ChatBot = () => {
    return (
        <Card className='card-chatbot' title="Asistencia guiada por IA" extra={<Stars size={24} color='#fff' />} >
            <Flex wrap vertical gap={"2vw"} style={{justifyContent: "end"}} >
                <Text className='title-chatbot-body'>¿Hay algo en lo que pueda apoyarte hoy?</Text>
                <Text className='text-chatbot-body' style={{ fontSize: 12, textAlign: "center" }} type='secondary'>
                    Comienza una conversación para explorar cómo te sientes. Hablemos de lo que importa para tu bienestar.
                </Text>
                <Space.Compact>
                    <Input placeholder='Escribe cómo te sientes o hazme una pregunta...'/>
                    <Button shape='cicle' icon={<SendOutlined />} />
                </Space.Compact>

            </Flex>
        </Card>
    );
};

export default ChatBot;