import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import imgquestion from "/img/imgquestion1.png";


const { Title, Text } = Typography;

const Welcomescreen = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/Questionnaire');
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Title level={2}>¡Bienvenido! Queremos conocerte mejor</Title>
        <Text style={styles.text}>
          Antes de conectarte con profesionales, realizaremos una breve evaluación para conocer mejor tu bienestar emocional. 
          Si has recibido terapia antes, también podrás registrar tus antecedentes psicológicos.
        </Text>

        <img
          src= {imgquestion} 
          alt="Cuestionario ilustración"
          style={styles.image}
        />
         <div className="d-flex justify-content-center">
  <Button
    type="primary"
    htmlType="submit"
    onClick={handleStart}
    style={{
      backgroundColor: "#2e186a", borderColor: "#2e186a", color: "#ffffff", width: "100%", maxWidth: "300px", height: "38px", fontSize: "16px", fontWeight: "bold"
    }}>
    Continuar
  </Button>
</div>
        <Text type="secondary" style={styles.legal}>
          <br />
          Al continuar, aceptas nuestros <a href="#">términos de servicio</a> y <a href="#">política de privacidad</a>. 
          Esta evaluación no constituye un diagnóstico médico.
          <br />
        </Text>
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

export default Welcomescreen;
