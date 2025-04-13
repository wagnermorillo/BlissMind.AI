import { useEffect, useState } from "react";
import { Button, Progress, Input, Typography, Row, Col, Card } from "antd";
import imglightblue from "/img/lightbluep.png";
import imgwairdo from "/img/wairdop.png";

const { Title, Text } = Typography;

const questions = [
  {
    label: "¿Cómo te sientes últimamente?",
    options: [
      { label: "Muy mal", emoji: "😞" },
      { label: "Mal", emoji: "🙁" },
      { label: "Ni bien ni mal", emoji: "😐" },
      { label: "Bien", emoji: "🙂" },
      { label: "Muy bien", emoji: "😄" },
    ],
  },
  {
    label: "¿Qué te motivó a usar esta app?",
    options: [
      { label: "Estrés", emoji: "😣" },
      { label: "Ansiedad", emoji: "😰" },
      { label: "Mejorar hábitos", emoji: "🧘‍♂️" },
      { label: "Depresión", emoji: "😔" },
      { label: "Otro", emoji: "❓" },
    ],
  },
  {
    label: "¿En cuáles áreas te gustaría trabajar o mejorar?",
    options: [
      { label: "Estrés", emoji: "😣" },
      { label: "Ansiedad", emoji: "😰" },
      { label: "Relaciones", emoji: "🤝" },
      { label: "Autoestima", emoji: "💪" },
      { label: "Motivación", emoji: "🌟" },
    ],
  },
  {
    label: "¿Sueles sentirte abrumado/a por tus emociones?",
    options: [
      { label: "Siempre", emoji: "😩" },
      { label: "A menudo", emoji: "😓" },
      { label: "A veces", emoji: "😐" },
      { label: "Rara vez", emoji: "🙂" },
      { label: "Nunca", emoji: "😌" },
    ],
  },
  {
    label: "¿Te cuesta concentrarte en tus actividades diarias?",
    options: [
      { label: "Sí", emoji: "✔️" },
      { label: "A veces", emoji: "🤔" },
      { label: "No", emoji: "🚫" },
    ],
  },
  {
    label: "¿Con qué frecuencia te sientes agotado/a emocionalmente?",
    options: [
      { label: "Siempre", emoji: "😫" },
      { label: "A menudo", emoji: "😓" },
      { label: "A veces", emoji: "😐" },
      { label: "Rara vez", emoji: "🙂" },
      { label: "Nunca", emoji: "😄" },
    ],
  },
  {
    label: "¿Cómo te sientes con respecto a tus relaciones personales en general?",
    options: [
      { label: "Muy mal", emoji: "💔" },
      { label: "Mal", emoji: "😕" },
      { label: "Ni bien ni mal", emoji: "😐" },
      { label: "Bien", emoji: "😊" },
      { label: "Muy bien", emoji: "❤️" },
    ],
  },
  {
    label: "¿Has asistido a terapia antes?",
    options: [
      { label: "Sí", emoji: "✔️" },
      { label: "No", emoji: "🚫" },
    ],
  },
  {
    label: "¿Tienes un diagnóstico previo?",
    options: [
      { label: "Sí", emoji: "✔️" },
      { label: "No", emoji: "🚫" },
    ],
    hasExtra: true,
  },
  {
    label: "¡Gracias! Hemos terminado.",
    options: [],
  },
];

const Questionnaire = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [diagnosisText, setDiagnosisText] = useState("");

  const handleOptionClick = (option) => {
    setAnswers({ ...answers, [current]: option.label });
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const currentQuestion = questions[current];
  const isLast = current === questions.length - 1;
  const isDiagnosis = current === 8 && answers[8] === "Sí";

  // Redirigir al dashboard al llegar al final
  useEffect(() => {
    if (isLast) {
      const timer = setTimeout(() => {
        window.location.href = "/Login"; // Cambia esta ruta si usas React Router
      }, 2000); // Espera 2 segundos antes de redirigir

      return () => clearTimeout(timer);
    }
  }, [isLast]);

  return (
    <div style={{ padding: 40, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
      <div style={{ position: "fixed", top: 20, left: 30, zIndex: 1000 }}>
        <Title level={4} style={{ margin: 0, color: "#2e186a" }}>
          BlissMind
        </Title>
      </div>

      {/* Piezas decorativas */}
      <div style={{ position: "fixed", left: 20, top: "60%", transform: "translateX(-20%) rotate(-20deg)", opacity: 0.4 }}>
        <img src={imglightblue} alt="Puzzle decorativo" style={{ width: 95, height: 95 }} />
      </div>
      <div style={{ position: "fixed", right: 20, top: "20%", transform: "translateX(-20%) rotate(-20deg)", opacity: 0.5 }}>
        <img src={imgwairdo} alt="Puzzle" style={{ width: 95, height: 95 }} />
      </div>

      <Title level={3}>Hablemos sobre ti</Title>
      <Text type="secondary">
        Tu bienestar es nuestra prioridad. Ayúdanos a brindarte la mejor experiencia llenando las siguientes preguntas.
      </Text>

      <Progress
        percent={((current + 1) / questions.length) * 100}
        showInfo={false}
        style={{ margin: "20px 0" }}
      />

      {!isLast && (
        <Text type="secondary" style={{ display: "block", marginBottom: 4 }}>
          Pregunta {current + 1}
        </Text>
      )}
      <Title level={4}>{currentQuestion.label}</Title>

      <Row gutter={[16, 16]} justify="center" style={{ marginTop: 20 }}>
        {currentQuestion.options.map((opt) => (
          <Col key={opt.label}>
            <Card
              hoverable
              onClick={() => handleOptionClick(opt)}
              style={{
                borderColor: answers[current] === opt.label ? "#2e186a" : "#f0f0f0",
                backgroundColor: answers[current] === opt.label ? "#f0f0ff" : "#fff",
                width: 140,
                height: 120,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: 28 }}>{opt.emoji}</div>
              <div style={{ fontSize: 14, marginTop: 8 }}>{opt.label}</div>
            </Card>
          </Col>
        ))}
      </Row>

      {isDiagnosis && (
        <div style={{ marginTop: 24 }}>
          <Text>¿Cuál es tu diagnóstico?</Text>
          <Input.TextArea
            rows={2}
            value={diagnosisText}
            onChange={(e) => setDiagnosisText(e.target.value)}
            style={{ marginTop: 8 }}
          />
        </div>
      )}

      <div style={{ marginTop: 40, display: "flex", justifyContent: "space-between" }}>
        {current > 0 ? (
          <Button onClick={handlePrev} style={{ backgroundColor: "#f0f0f0", border: "none", padding: "0 42px" }}>
            Anterior
          </Button>
        ) : (
          <div />
        )}

        {!isLast && (
          <Button
            type="primary"
            onClick={handleNext}
            style={{
              backgroundColor: "#2e186a",
              borderColor: "#2e186a",
              color: "#ffffff",
              padding: "0 40px",
            }}
          >
            Siguiente
          </Button>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
