import React from 'react';
import { Flex, Spin, Typography } from 'antd';

const { Title, Text } = Typography;

const LoadingScreen = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#f1f2f3',
      }}
    >
      <Title level={1} style={{margin : "0", fontFamily : 'Motiva Sans Bold, serif', color : '#18216d'}}>BlissMind</Title>
      <Text type="secondary">Cargando tu camino hacia el bienestar...</Text>
      <Spin size="large" style={{ marginTop: 20 }} />
    </div>
  );
};

export default LoadingScreen;