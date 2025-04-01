import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Flex, Card, Avatar, Button } from 'antd';
import { Typography } from 'antd';
const { Text } = Typography;
import './coming.css'

const CardComingAct = ({ participants}) => {
    // Obtener la fecha actual
    const today = new Date();

    // Generar array con los próximos 7 días (hoy + 6 días siguientes)
    const weekDays = Array.from({ length: 7 }, (_, index) => {
        const date = new Date(today);
        date.setDate(today.getDate() + index);
        return date;
    });

    // Nombres cortos de los días en español
    const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    return (
        <Card className='card-coming' title="Próximamente">
            <div className="container-date">
                <Flex wrap justify="space-between">
                    {weekDays.map((date, index) => {
                        const dayName = dayNames[date.getDay()];
                        const dayNumber = date.getDate();
                        return (
                            <Flex key={index} vertical align="center">
                                <Text type="secondary"className="font-days">{dayName}</Text>
                                <Text className='font-days'>{dayNumber}</Text>
                            </Flex>
                        );
                    })}
                </Flex>
            </div>

            {/* Iteramos sobre el array de participantes */}
            {participants.map((participant, index) => (
                <Flex key={index} justify="space-between" align="center" style={{ marginBottom: '16px' }}>
                    {/* Avatar + Nombre + Psicoterapeuta */}
                    <Flex align="center" gap={5}>
                        <Avatar size="medium" icon={participant.avatarIcon || <UserOutlined />} />
                        <Flex vertical>
                            <Text strong className='font-days'>{participant.name}</Text>
                            <Text className='font-days' type="secondary">{participant.profession}</Text>
                        </Flex>
                    </Flex>

                    {/* Hora + Hoy */}
                    <Flex vertical align="end">
                        <Text className='font-days' strong>{participant.time}</Text>
                        <Text className='font-days' type="secondary">{participant.day}</Text>
                    </Flex>
                </Flex>
            ))}

            <div style={{ marginTop: "64px" }} />
            {/* Botón de ancho completo */}
            <Button type="primary" block shape='round' className='font-days' style={{marginBottom: "0px"}}>
                Programar nueva sesión
            </Button>
        </Card>
    );
};

export default CardComingAct;