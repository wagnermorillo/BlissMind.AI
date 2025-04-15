import React, { useState, useRef, useEffect } from "react";
import DefaultLayoutPatient from "../../layouts/DefaultLayoutPatient";
import { cleanInput, getResponse } from "./chatAiLogic";
import styles from "./chatAI.module.css";
import { SendOutlined } from "@ant-design/icons";

export default function ChatAi() {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userWords = cleanInput(input);
    const botResponse = getResponse(userWords);
    setChat([
      ...chat,
      { from: "user", text: input },
      { from: "bot", text: botResponse },
    ]);
    setInput("");
  };

  const hasStartedChat = chat.length > 0;

  const chatEndRef = useRef(null);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({
        behavior: isFirstRender.current ? "auto" : "smooth",
      });
      isFirstRender.current = false;
    }
  }, [chat]);

  return (
    <DefaultLayoutPatient>
      <div className={styles.chatContainer}>
        {!hasStartedChat && (
          <div className={styles.welcomeBox}>
            <h1 className={styles.title}>Hola, John Doe</h1>
            <p className={styles.subtitle}>
              Puedes contarme cómo te sientes. Estoy aquí para escucharte.
            </p>
          </div>
        )}

        {hasStartedChat && (
          <div className={styles.chatHistory}>
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`${styles.messageWrapper} ${
                  msg.from === "bot" ? styles.messageBot : styles.messageUser
                }`}
              >
                {msg.from === "bot" && (
                  <img
                    src="/../../../public/img/blmai-chatai.png" 
                    alt="AI Mascota"
                    className={styles.botAvatar}
                    loading="lazy"
                  />
                )}
                <div
                  className={
                    msg.from === "bot" ? styles.botMessage : styles.userMessage
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        )}

        <div className={styles.inputContainer}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className={styles.input}
            placeholder="Escribe tu mensaje"
          />
          <button onClick={sendMessage} className={styles.button}>
            <SendOutlined style={{ fontSize: "20px" }} />
          </button>
        </div>
      </div>
    </DefaultLayoutPatient>
  );
}
