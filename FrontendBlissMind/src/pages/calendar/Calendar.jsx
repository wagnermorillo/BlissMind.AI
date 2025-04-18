import React from "react";
import { Badge, Calendar } from "antd";
import dayjs from "dayjs";
import styles from "./calendar-component.module.css";

const CalendarComponent = ({ citas, onPanelChange }) => {
  const getListData = (value) => {
    return citas
      .filter((cita) => dayjs(cita.fecha).isSame(value, "day"))
      .map((cita) => {
        const hora = dayjs(cita.fecha).format("h:mm A");
        return {
          type: cita.tipo || "success",
          content: `${hora} - ${cita.titulo}`,
        };
      });
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className={styles.events}>
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };

  return <Calendar cellRender={cellRender} onPanelChange={onPanelChange} />;
};

export default CalendarComponent;
