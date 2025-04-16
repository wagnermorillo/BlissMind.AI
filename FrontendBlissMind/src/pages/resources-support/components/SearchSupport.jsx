import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import faqData from "../support.json";

// estilos de las figuritas del background
const circleStyle = (top, left, size) => ({
  position: "absolute",
  top,
  left,
  width: `${size}px`,
  height: `${size}px`,
  backgroundColor: "#4c3a9d",
  borderRadius: "50%",
  opacity: 0.5,
  zIndex: 0,
});

const triangleStyle = (top, left, height, base, rotate = 0) => ({
  position: "absolute",
  top,
  left,
  width: "0",
  height: "0",
  borderLeft: `${base}px solid transparent`,
  borderRight: `${base}px solid transparent`,
  borderBottom: `${height} solid #4c3a9d`,
  transform: `rotate(${rotate}deg)`,
  opacity: 0.5,
  zIndex: 0,
});

const starStyle = (top, left, size) => ({
  position: "absolute",
  top,
  left,
  width: `${size}px`,
  height: `${size}px`,
  background: "#4c3a9d",
  clipPath:
    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
  opacity: 0.5,
  zIndex: 0,
});

const SearchSupport = () => {
  const [query, setQuery] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState([]);
  const navigate = useNavigate();

  // se usa para filtrar las preguntas (FAQ) cuando el texto de búsqueda cambia
  useEffect(() => {
    if (query.trim() === "") {
      setFilteredFAQs([]);
    } else {
      const searchTerms = query.toLowerCase().split(/\s+/);

      const allMatches = [];

      Object.values(faqData).forEach((category) => {
        category.faqs.forEach((faq) => {
          const content = (faq.question + " " + faq.answer).toLowerCase();
          const matchCount = searchTerms.reduce(
            (count, term) => (content.includes(term) ? count + 1 : count),
            0
          );

          if (matchCount > 0) {
            allMatches.push({
              ...faq,
              matchCount,
              categoryLabel: category.label,
            });
          }
        });
      });

      const sortedMatches = allMatches.sort(
        (a, b) => b.matchCount - a.matchCount
      );

      const grouped = sortedMatches.reduce((acc, faq) => {
        const existing = acc.find((group) => group.label === faq.categoryLabel);
        if (existing) {
          existing.faqs.push(faq);
        } else {
          acc.push({ label: faq.categoryLabel, faqs: [faq] });
        }
        return acc;
      }, []);

      setFilteredFAQs(grouped);

      // ¡Aquí el número de resultados REALES!
      const totalMatches = sortedMatches.length;
      console.log("Resultados totales:", totalMatches);
      // Si lo necesitas en algún estado:
      // setTotalResults(totalMatches);
    }
  }, [query]);

  // esto es para manejar la acción de presionar enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      // verifica que el query no esté vacío para luego navegar a la página de resultados y por ahi pasar los resultados de búsqueda
      navigate("/support/results", {
        state: { filteredFAQs, searchTerm: query },
      });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#2e186a",
        position: "relative",
        padding: "6rem 1rem",
        overflow: "hidden",
        textAlign: "center",
        color: "#fff",
      }}
    >
      {/* Figuras decorativas */}
      <div style={circleStyle("5%", "2%", 20)} />
      <div style={circleStyle("10%", "85%", 35)} />
      <div style={circleStyle("85%", "5%", 25)} />
      <div style={circleStyle("92%", "90%", 15)} />
      <div style={circleStyle("15%", "25%", 28)} />

      <div style={triangleStyle("2%", "40%", "35px", 18, -15)} />
      <div style={triangleStyle("78%", "80%", "30px", 15, 25)} />
      <div style={triangleStyle("50%", "2%", "25px", 12, -20)} />
      <div style={triangleStyle("85%", "24%", "25px", 12, 5)} />

      <div style={starStyle("15%", "70%", 40)} />
      <div style={starStyle("50%", "15%", 35)} />
      <div style={starStyle("82%", "50%", 26)} />
      <div style={starStyle("30%", "90%", 25)} />
      <div style={starStyle("8%", "8%", 32)} />

      {/* Título */}
      <h2
        style={{
          marginBottom: "1.5rem",
          fontSize: "2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        Estamos aquí para ayudarle
      </h2>

      {/* Input de búsqueda */}
      <div
        style={{
          position: "relative",
          maxWidth: "500px",
          margin: "0 auto",
          zIndex: 1,
        }}
      >
        <span
          style={{
            position: "absolute",
            left: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "#888",
            fontSize: "1.2rem",
          }}
        >
          🔍
        </span>
        <input
          type="text"
          placeholder="Buscar artículos o preguntas..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            width: "80%",
            padding: "1rem 2.2rem",
            border: query
              ? "2px solid rgb(63, 110, 211)"
              : "2px solid transparent",
            fontSize: "1rem",
            boxShadow: "0 0 10px rgba(0,0,0,0.15)",
            outline: "none",
            backgroundColor: "white",
            transition: "border 0.2s ease",
          }}
        />
      </div>
    </div>
  );
};

export default SearchSupport;
