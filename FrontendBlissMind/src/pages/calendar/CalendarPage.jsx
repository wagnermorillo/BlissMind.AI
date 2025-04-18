import React, { useState } from "react";
import CalendarComponent from "./Calendar";
import DefaultLayoutPatient from "../../layouts/DefaultLayoutPatient";
import { Typography } from "antd";
import dayjs from "dayjs";

const { Title } = Typography;

const mockCitas = [
  {
    id: 1,
    titulo: "Consulta con la Dra. Gómez",
    fecha: dayjs().hour(10).minute(0).toISOString(),
    tipo: "success",
  },
  {
    id: 2,
    titulo: "Terapia de pareja",
    fecha: dayjs().add(2, "day").toISOString(),
    tipo: "warning",
  },
  {
    id: 3,
    titulo: "Seguimiento clínico",
    fecha: dayjs().add(5, "day").toISOString(),
    tipo: "error",
  },
  {
    id: 4,
    titulo: "Consulta de seguimiento con la Dra. Gómez",
    fecha: "2025-05-25T11:00:00",
    tipo: "warning",
  },
];

const CalendarPage = () => {
  const [fechaActual, setFechaActual] = useState(dayjs());
  return (
    <DefaultLayoutPatient>
      <div style={{ padding: "0px 24px" }}>
        <Title level={2} style={{ color: "#2e186a" }}>
          {" "}
          📅 Citas agendadas
        </Title>
        <p style={{ marginBottom: "1rem", fontStyle: "italic" }}>
          {fechaActual.format("MMMM YYYY")}
        </p>
        <CalendarComponent
          citas={mockCitas}
          onPanelChange={(value) => setFechaActual(value)}
        />
      </div>
    </DefaultLayoutPatient>
  );
};

export default CalendarPage;
