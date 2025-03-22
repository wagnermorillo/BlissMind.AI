import React, { useState } from "react";
import { Button, Form, Input, Radio, DatePicker, Select, Steps } from "antd";
import reporte from "../../public/img/svg/helps.webp";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userType, setUserType] = useState("paciente");

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleFinish = (values) => {
    console.log("Datos del formulario:", values);
    alert("Registro completado con éxito");
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
    height: "500px", // Altura fija
    overflowY: "auto", // Desplazamiento vertical
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
              rules={[{ required: true, message: "Por favor ingrese su email" }]}
              style={formItemStyle}
            >
              <Input placeholder="Escriba su email" />
            </Form.Item>
            <Form.Item
              label="Contraseña"
              name="password"
              rules={[{ required: true, message: "Por favor cree una contraseña" }]}
              style={formItemStyle}
            >
              <Input.Password placeholder="Crear contraseña" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={buttonStyle}>
                Continuar
              </Button>
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
          <Form layout="vertical" onFinish={nextStep}>
            <Form.Item label="Tipo de Usuario" name="userType" style={formItemStyle}>
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
                {userType === "psicologo" ? "Continuar" : "Crear cuenta"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Registro de psicólogo",
      content: (
        <div style={formContentStyle}>
          <h2 style={titleStyle}>Registro de Psicólogo</h2>
          <Form layout="vertical" onFinish={handleFinish}>
            <Form.Item
              label="Especialidad"
              name="specialty"
              rules={[{ required: true, message: "Por favor seleccione su especialidad" }]}
              style={formItemStyle}
            >
              <Select placeholder="Seleccione su especialidad">
                <Select.Option value="psicologia_clinica">Psicología Clínica</Select.Option>
                <Select.Option value="psicologia_educativa">Psicología Educativa</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Licencia"
              name="license"
              rules={[{ required: true, message: "Por favor ingrese su licencia" }]}
              style={formItemStyle}
            >
              <Input placeholder="Escriba su licencia" />
            </Form.Item>
            <Form.Item
              label="Disponibilidad"
              name="availability"
              rules={[{ required: true, message: "Por favor elija su disponibilidad" }]}
              style={formItemStyle}
            >
              <Select placeholder="Elija su disponibilidad">
                <Select.Option value="tiempo_completo">Tiempo Completo</Select.Option>
                <Select.Option value="medio_tiempo">Medio Tiempo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={buttonStyle}>
                Completar registro
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
            {steps
              .filter((step, index) => index < 2 || userType === "psicologo") // Oculta el tercer paso si no es psicólogo
              .map((step, index) => (
                <Steps.Step key={index} title={step.title} />
              ))}
          </Steps>
          <div>
            {steps
              .filter((step, index) => index === currentStep) // Filtra el paso actual
              .map((step, index) => (
                <div key={index}>{step.content}</div>
              ))}
          </div>
          {currentStep > 0 && (
            <Button
              style={{ marginTop: "24px" }}
              onClick={prevStep}
            >
              Volver atrás
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Register;
