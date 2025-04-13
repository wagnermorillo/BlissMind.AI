// Upload.jsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Upload,
  Button,
  Form,
  Input,
  Typography,
  Steps,
  message,
  Select,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "./Upcss.css"; 

const { Title, Text } = Typography;
const { Step } = Steps;
const { Dragger } = Upload;

const UploadComponent = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});
  const [availability, setAvailability] = useState([]);
  const navigate = useNavigate();


  const handleNext = async () => {
    try {
      const values = await form.validateFields();
      setFormData((prev) => ({ ...prev, ...values }));
      setCurrent((prev) => prev + 1);
      form.resetFields();
    } catch {
      message.error("Por favor completa todos los campos requeridos.");
    }

  };

  const handlePrevious = () => {
    setCurrent((prev) => prev - 1);
    form.setFieldsValue(formData);
  };

  const handleFinish = async () => {
    try {
      const values = await form.validateFields();
      const fullData = {
        ...formData,
        ...values,
        disponibilidad: availability,
      };
      console.log("Datos enviados al backend:", fullData);
      message.success("¡Registro completado exitosamente!");
      navigate("/welcpsyco");
    } catch {
      message.error("Por favor completa todos los campos.");
    }
  };

  const toggleAvailability = (slot) => {
    setAvailability((prev) =>
      prev.includes(slot)
        ? prev.filter((item) => item !== slot)
        : [...prev, slot]
    );
  };

  const uploadProps = {
    beforeUpload: () => false,
    showUploadList: true,
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <Title level={3} style={{ textAlign: "center" }}>
        ¡Bienvenido! Queremos conocerte mejor
      </Title>
      <Text style={{ textAlign: "center", display: "block", marginBottom: 20 }}>
        Antes de comenzar a usar BlissMind, necesitamos verificar tu cuenta como psicólogo(a) licenciado(a).
      </Text>

      <Steps current={current} style={{ margin: "24px 0" }}>
        <Step title="Documentación Profesional" />
        <Step title="Perfil y Disponibilidad" />
      </Steps>

      <Form form={form} layout="vertical">
        {current === 0 && (
          <>
            <Form.Item
              label="Número de Licencia Profesional"
              name="licencia"
              rules={[{ required: true, message: "Introduce tu licencia profesional" }]}
            >
              <Input placeholder="Introduce tu licencia profesional..." />
            </Form.Item>

            <Form.Item
              label="Cargar Certificado de buena conducta"
              name="certificado"
              valuePropName="file"
              rules={[{ required: true, message: "Este archivo es obligatorio" }]}
            >
              <Dragger {...uploadProps} accept=".pdf" maxCount={1}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p>Arrastra tu archivo aquí o haz clic para subirlo</p>
                <p style={{ fontSize: 12 }}>PDF solamente</p>
              </Dragger>
            </Form.Item>

            <Form.Item
              label="Categoría de Especialización"
              name="especializacion"
              rules={[{ required: true, message: "Selecciona una especialización" }]}
            >
              <Select placeholder="Seleccione una especialización">
                <Option value="clinica">Psicología Clínica</Option>
                <Option value="infantil">Psicología Infantil</Option>
                <Option value="organizacional">Psicología Organizacional</Option>
              </Select>
            </Form.Item>
          </>
        )}

        {current === 1 && (
          <>
            <Form.Item
              label="Cargar Foto para Perfil"
              name="foto"
              valuePropName="file"
              rules={[{ required: true, message: "Este campo es obligatorio" }]}
            >
              <Dragger {...uploadProps} accept=".jpg,.jpeg,.png,.webp" maxCount={1}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p>Arrastra tu imagen aquí o haz clic para subirla</p>
                <p style={{ fontSize: 12 }}>.JPG, .PNG, .WEBP</p>
              </Dragger>
            </Form.Item>

            <Form.Item label="Selecciona tu disponibilidad" required>
              <div className="availability-container">
                {["manana", "tarde", "noche"].map((slot) => (
                  <div
                    key={slot}
                    className={`availability-option ${
                      availability.includes(slot) ? "selected" : ""
                    }`}
                    onClick={() => toggleAvailability(slot)}
                  >
                    <strong>
                      {{
                        manana: "Mañana",
                        tarde: "Tarde",
                        noche: "Noche",
                      }[slot]}
                    </strong>
                    <div style={{ fontSize: 12 }}>
                      {{
                        manana: "08:00 - 12:00",
                        tarde: "14:00 - 18:00",
                        noche: "19:00 - 23:00",
                      }[slot]}
                    </div>
                  </div>
                ))}
              </div>
              {availability.length === 0 && (
                <div style={{ color: "red", marginTop: 8 }}>
                  Selecciona al menos un horario
                </div>
              )}
            </Form.Item>
          </>
        )}

<Form.Item>
  <div
    style={{
      display: "flex",
      justifyContent: current === 0 ? "flex-end" : "space-between",
    }}
  >
    {current > 0 && <Button onClick={handlePrevious}>Anterior</Button>}

    {current < 1 && (
      <Button
        type="primary"
        onClick={handleNext}
        style={{ backgroundColor: "#2e186a", borderColor: "#2e186a" }}
      >
        Continuar
      </Button>
    )}

    {current === 1 && (
      <Button
        type="primary"
        onClick={handleFinish}
        style={{ backgroundColor: "#2e186a", borderColor: "#2e186a" }}
      >
        Enviar
      </Button>
    )}
  </div>
</Form.Item>
      </Form>
    </div>
  );
};

export default UploadComponent;
