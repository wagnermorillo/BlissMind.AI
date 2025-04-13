import React, { useState } from "react";
import { Button, Form, Input, Radio, DatePicker, Steps } from "antd";
import { useNavigate, Link } from "react-router-dom";
import reporte from "/img/register.png";
import invernadero from "/img/invernadero.png";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userType, setUserType] = useState(0);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const navigate = useNavigate();

  const handleFinish = (values) => {
    console.log("Datos del formulario:", values);
    alert("Registro completado con éxito");
    if (userType === "psicologo") {
      navigate("/Upload");
    } else {
      navigate("/Welcomescreen");
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const wrapperStyle = {
    display: "flex",
    width: "900px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    overflow: "hidden",
    background: "#ffffff",
  };

  const sidebarStyle = {
    width: "50%",
    background: "#D6E6F2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formContainerStyle = {
    width: "50%",
    padding: "40px",
    textAlign: "center",
    height: "500px",
    overflowY: "auto",
  };

  const formContentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "30px",
    textAlign: "center",
  };

  const formItemStyle = {
    textAlign: "left",
  };

  const buttonStyle = {
    width: "100%",
    background: "#2e186a",
    borderColor: "#2e186a",
    height: "40px",
    fontSize: "16px",
    fontWeight: "bold",
  };

  const steps = [
    {
      title: "Información básica",
      content: (
        <div style={formContentStyle}>
          <h2 style={titleStyle}>Regístrate en BlissMind</h2>
          <Form layout="vertical" onFinish={nextStep}>
            <Form.Item
              label="Nombre"
              name="name"
              rules={[{ required: true, message: "Por favor ingrese su nombre" }]}
              style={formItemStyle}
            >
              <Input placeholder="Escriba su nombre" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Por favor ingrese su email" },
                { type: "email", message: "Por favor ingrese un email válido" },
              ]}
              style={formItemStyle}
            >
              <Input placeholder="Escriba su email" />
            </Form.Item>
            <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                { required: true, message: "Por favor cree una contraseña" },
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message: "La contraseña debe contener al menos una mayúscula, una minúscula, un número y 8 caracteres",
                },
              ]}
              style={formItemStyle}
            >
              <Input.Password placeholder="Crear contraseña" />
            </Form.Item>
            <Form.Item>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button type="primary" htmlType="submit" style={{ ...buttonStyle, width: "88%" }}>
                  Continuar
                </Button>
                <a href="/Home">
                  <img src={invernadero} alt="Home" style={{ width: "35px", height: "35px" }} />
                </a>
              </div>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Detalles del usuario",
      content: (
        <div style={formContentStyle}>
          <h2 style={titleStyle}>Detalles del Usuario</h2>
          <Form layout="vertical" onFinish={handleFinish}>
          <Form.Item
           label="Tipo de Usuario"
            name="userType"
            rules={[{ required: true, message: "Por favor seleccione un tipo de usuario" }]}
            style={formItemStyle}>
            <Radio.Group onChange={(e) => setUserType(e.target.value)} value={userType}>
            <Radio value="paciente">Paciente</Radio>
            <Radio value="psicologo">Psicólogo</Radio>
            </Radio.Group>
</Form.Item>
            <Form.Item
              label="Número telefónico"
              name="phone"
              rules={[{ required: true, message: "Por favor ingrese su número telefónico" }]}
              style={formItemStyle}
            >
              <Input placeholder="+1 (000) 000-0000" />
            </Form.Item>
            <Form.Item
              label="Género"
              name="gender"
              rules={[{ required: true, message: "Por favor seleccione su género" }]}
              style={formItemStyle}
            >
              <Radio.Group>
                <Radio value="femenino">Femenino</Radio>
                <Radio value="masculino">Masculino</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Fecha de Nacimiento"
              name="dob"
              rules={[{ required: true, message: "Por favor ingrese su fecha de nacimiento" }]}
              style={formItemStyle}
            >
              <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={buttonStyle}>
                Crear cuenta
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
  ];

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        <div style={sidebarStyle}>
          <img src={reporte} alt="Imagen de registro" style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </div>
        <div style={formContainerStyle}>
          <Steps current={currentStep} style={{ marginBottom: "24px" }}>
            {steps.map((step, index) => (
              <Steps.Step key={index} title={step.title} />
            ))}
          </Steps>
          <div>{steps[currentStep]?.content}</div>
          {currentStep > 0 && (
            <Button style={{ marginTop: "24px" }} onClick={prevStep}>
              Volver atrás
            </Button>
          )}
          <p style={{ fontSize: "0.85rem" }}>
            ¿Ya tienes una cuenta?{" "}
            <Link to="/Login" style={{ opacity: 1, color: "rgb(13 110 253)" }}>
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
