import { Flex, Card, Button } from 'antd';
import { Typography } from 'antd';
const { Text } = Typography;
import './lastSession.css'

const LastSession = ({ sessions }) => {
    return (
    <Card className='card-last-session' title="Últimas Sesiones">
        {sessions.map((session, index) => (
            <Flex key={index} gap={6} align="start">
                <div className='vertical-line' />
                <Flex vertical className='container-session'>
                    <Text strong className='font-session'>{session.title}</Text>
                    <Text type="secondary" className='font-session'>
                        {session.doctor} · {session.minutes} min · {session.date}
                    </Text>
                    <Button type="primary" shape="round" size="small" className='font-session button'>
                        Leer detalles
                    </Button>
                </Flex>
            </Flex>
        ))}
    </Card>
    );
};

export default LastSession;