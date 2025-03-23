import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Contact = ({ title, content, id }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="Nombre"
                  placeholder="Tu nombre"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="Correo Electrónico"
                  placeholder="Tu correo electrónico"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Tu mensaje"
                  value={values.message || ""}
                  name="Mensaje"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">Enviar</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;
