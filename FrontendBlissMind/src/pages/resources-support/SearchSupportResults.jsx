import React, { lazy } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import SupportBaseLayout from "./SupportBaseLayout";

const Container = lazy(() => import("../../common/Container"));

const highlightText = (text, term) => {
  if (!term) return text;
  const regex = new RegExp(`(${term})`, "gi");
  return text.split(regex).map((part, index) =>
    part.toLowerCase() === term.toLowerCase() ? (
      <span
        key={index}
        style={{ backgroundColor: "yellow", fontWeight: "bold" }}
      >
        {part}
      </span>
    ) : (
      part
    )
  );
};

const SearchSupportResults = () => {
  const location = useLocation(); // obtener el "state" que se le paso
  const { filteredFAQs, searchTerm } = location.state || {}; // ls resultados de búsqueda y el término de búsqueda

  const termToDisplay = searchTerm ? searchTerm : "Término de búsqueda vacío";

  return (
    <SupportBaseLayout>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <Breadcrumb
          items={[
            {
              href: "/",
              title: <HomeOutlined />,
            },
            {
              href: "/support",
              title: <span>BlissMindAi Help Center</span>,
            },
            {
              title: "Resultados de búsqueda",
            },
          ]}
          style={{ marginLeft: "9%", marginTop: "2%" }}
        />

        <Container>
          {filteredFAQs && filteredFAQs.length > 0 ? (
            <div style={{ margin: "0 4%" }}>
              <h4 style={{ fontStyle: "italic", color: "#2e186a", fontSize: "1.2rem" }}>
                {filteredFAQs.reduce(
                  (total, group) => total + group.faqs.length,
                  0
                )}{" "}
                results for "{termToDisplay}"
              </h4>
              <div style={{ marginTop: "1.5rem" }}>
                {filteredFAQs.map((category, index) => (
                  <div key={index} style={{ marginBottom: "2rem" }}>
                    <h3 style={{ textAlign: "left", color: "#333", fontSize: "1.4rem"  }}>
                      {category.label}
                    </h3>
                    <ul
                      style={{
                        listStyleType: "none",
                        paddingLeft: 0,
                        textAlign: "left",
                      }}
                    >
                      {category.faqs.map((faq, idx) => (
                        <li
                          key={idx}
                          style={{
                            color: "#555",
                            fontSize: "1rem",
                            marginBottom: "1rem",
                            borderBottom: "1px solid #ddd",
                            paddingBottom: "1rem",
                          }}
                        >
                          <strong>
                            {highlightText(faq.question, searchTerm)}
                          </strong>
                          <p>{highlightText(faq.answer, searchTerm)}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "8rem",
                  textAlign: "center",
                  color: "#555",
                }}
              >
                <p>
                  ¿No encontraste lo que buscabas? No te preocupes, ¡estamos
                  aquí para ayudarte!
                </p>
                <p>
                  Si necesitas más información o tienes alguna duda, no dudes en
                  escribirnos a{" "}
                  <a
                    href="mailto:soporte@blissmind.ai"
                    style={{ color: "#3f6ed3", textDecoration: "underline" }}
                  >
                    soporte@blissmind.ai
                  </a>
                  .
                </p>
                <p style={{ fontStyle: "italic", color: "#888" }}>
                  Estaremos encantados de ayudarte. 💬
                </p>
              </div>
            </div>
          ) : (
            <div
              style={{
                height: "50vh",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ fontWeight: 600 }}>
                No se encontraron resultados para{" "}
                <span style={{ fontStyle: "italic" }}>"{termToDisplay}"</span>.
              </p>
              <p>
                Si necesitas ayuda con algo específico, puedes escribirnos a{" "}
                <a
                  href="mailto:soporte@blissmind.ai"
                  style={{ color: "#3f6ed3", textDecoration: "underline" }}
                >
                  soporte@blissmind.ai
                </a>{" "}
                y con gusto te asistiremos. 💌
              </p>
            </div>
          )}
        </Container>
      </div>
    </SupportBaseLayout>
  );
};

export default SearchSupportResults;
