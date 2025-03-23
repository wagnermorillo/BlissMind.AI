import { Container, TextWrapper, Content } from "./styles";

const Block = ({ title, content }) => {
  return (
    <Container>
      <h1 className="title">{title}</h1>
      <TextWrapper>
        <Content>{content}</Content>
      </TextWrapper>
    </Container>
  );
};

export default Block;
