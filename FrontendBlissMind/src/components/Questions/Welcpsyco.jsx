import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import send from "/img/Send.png";


const { Title, Text } = Typography;

const Welcpsyco = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/Home');
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img
          src= {send} 
          alt="Cuestionario"
          style={{ width: 240, height: "auto", marginBottom: 20 }}
        />
         <div className="d-flex justify-content-center">
         <Title level={3}>Tu solicitud ha sido enviada para revisión</Title>
         <Text
  style={{
    fontSize: 14, color: "#555", textAlign: "center", marginTop: 16,}}>
  Nuestro equipo verificará tu información y recibirás un correo con el resultado de la evaluación. 
  Te notificaremos cuando tu cuenta esté activa para trabajar en BlissMind.
</Text>
<div>
<br />
  <Button
    type="primary"
    htmlType="submit"
    onClick={handleStart}
    style={{
      backgroundColor: "#2e186a", borderColor: "#2e186a", color: "#ffffff", width: "100%", maxWidth: "300px", height: "38px", fontSize: "16px", fontWeight: "bold"
    }}>
    Volver al inicio
  </Button>
  </div>
</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9faff',
    padding: '2rem',
    
  },
  content: {
    maxWidth: '600px',
    textAlign: 'center',
  },
  text: {
    fontSize: '16px',
    marginBottom: '24px',
    display: 'block',
  },
  image: {
    width: '60%',
    marginBottom: '24px',
  },
  button: {
    marginBottom: '12px',
  },
  legal: {
    fontSize: '12px',
    marginTop: '8px',
  },
};

export default Welcpsyco;
