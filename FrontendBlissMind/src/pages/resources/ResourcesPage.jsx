import { useState } from "react";
import {
  FileTextOutlined,
  QuestionCircleOutlined,
  VideoCameraOutlined,
  BookOutlined,
  ReadOutlined,
  PlayCircleOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import styles from "./resources.module.css";
import DefaultLayoutPatient from "../../layouts/DefaultLayoutPatient";

export default function RecursosPsicologia() {
  const [activeTab, setActiveTab] = useState("articulos");

  // Datos de ejemplo para cada sección
  const articulos = [
    {
      titulo: "Manejo del estrés en la vida cotidiana",
      descripcion:
        "Estrategias prácticas y basadas en evidencia para reducir el estrés diario.",
      categoria: "Bienestar",
    },
    {
      titulo: "Cómo construir relaciones saludables",
      descripcion:
        "Claves para fortalecer vínculos y establecer límites en tus relaciones.",
      categoria: "Relaciones",
    },
    {
      titulo: "Técnicas de autocompasión",
      descripcion:
        "Aprende a tratarte con la misma amabilidad que ofrecerías a un amigo.",
      categoria: "Autoconocimiento",
    },
    {
      titulo: "El poder de los hábitos",
      descripcion:
        "Cómo los pequeños cambios conducen a grandes transformaciones personales.",
      categoria: "Hábitos",
    },
  ];

  //   const herramientas = [
  //     {
  //       titulo: "Test de ansiedad",
  //       descripcion: "Evaluación rápida para medir niveles de ansiedad actuales.",
  //       icono: <CompassOutlined style={{ fontSize: 24, color: "#3B82F6" }} />,
  //     },
  //     {
  //       titulo: "Planificador de objetivos",
  //       descripcion: "Divide tus metas en pasos alcanzables y medibles.",
  //       icono: <CalendarOutlined style={{ fontSize: 24, color: "#10B981" }} />,
  //     },
  //     {
  //       titulo: "Seguimiento del estado de ánimo",
  //       descripcion: "Registra y visualiza patrones en tu estado emocional.",
  //       icono: <ClockCircleOutlined style={{ fontSize: 24, color: "#8B5CF6" }} />,
  //     },
  //     {
  //       titulo: "Identificador de fortalezas",
  //       descripcion: "Descubre y potencia tus cualidades personales.",
  //       icono: <StarOutlined style={{ fontSize: 24, color: "#F59E0B" }} />,
  //     },
  //   ];

  const pdfs = [
    {
      titulo: "Rueda de la Vida",
      descripcion:
        "Evalúa el equilibrio en diferentes áreas de tu vida y establece metas para mejorar.",
      color: "#3B82F6",
    },
    {
      titulo: "Registro de Pensamientos",
      descripcion:
        "Identifica patrones cognitivos y desafía pensamientos negativos automáticos.",
      color: "#60A5FA",
    },
    {
      titulo: "Hoja de Hábitos Saludables",
      descripcion:
        "Planificador para establecer y monitorear nuevos hábitos positivos diariamente.",
      color: "#2563EB",
    },
    {
      titulo: "Plan de Acción para Ansiedad",
      descripcion: "Estrategias paso a paso para momentos de alta ansiedad.",
      color: "#1E40AF",
    },
    {
      titulo: "Ejercicios de Atención Plena",
      descripcion:
        "Prácticas sencillas de mindfulness para realizar en cualquier momento.",
      color: "#3B82F6",
    },
    {
      titulo: "Guía de Autocuidado Emocional",
      descripcion:
        "Recomendaciones prácticas para cuidar tu salud mental día a día.",
      color: "#1D4ED8",
    },
  ];

  const videos = [
    {
      titulo: "Neurociencia de la ansiedad",
      descripcion:
        "Explicación científica sobre qué ocurre en tu cerebro durante la ansiedad.",
      duracion: "15 min",
    },
    {
      titulo: "Técnicas de grounding para crisis",
      descripcion: "5 ejercicios prácticos para reconectar con el presente.",
      duracion: "8 min",
    },
    {
      titulo: "Meditación para principiantes",
      descripcion:
        "Guía básica para comenzar a meditar sin experiencia previa.",
      duracion: "12 min",
    },
    {
      titulo: "Comunicación asertiva",
      descripcion:
        "Aprende a expresar tus necesidades sin agresividad ni pasividad.",
      duracion: "10 min",
    },
  ];

  const podcasts = [
    {
      titulo: "Psicología al Día",
      descripcion: "Episodios semanales sobre temas actuales de salud mental.",
      creador: "Dra. Laura Martínez",
    },
    {
      titulo: "Mente Plena",
      descripcion: "Meditaciones guiadas y charlas sobre mindfulness.",
      creador: "Carlos Vega",
    },
    {
      titulo: "Conversaciones sobre Terapia",
      descripcion:
        "Entrevistas con especialistas sobre diferentes enfoques terapéuticos.",
      creador: "Instituto de Psicología",
    },
    {
      titulo: "Bienestar Emocional",
      descripcion: "Herramientas prácticas para el autocuidado diario.",
      creador: "Ana Ruiz y Pablo Torres",
    },
  ];

  const glosario = [
    {
      termino: "Ansiedad",
      definicion:
        "Respuesta natural del cuerpo ante situaciones de estrés o amenaza percibida. Se convierte en un problema cuando es desproporcionada o interfiere con la vida diaria.",
    },
    {
      termino: "TCC",
      definicion:
        "Terapia Cognitivo-Conductual. Enfoque terapéutico que trabaja la relación entre pensamientos, emociones y comportamientos.",
    },
    {
      termino: "Resiliencia",
      definicion:
        "Capacidad de adaptarse y recuperarse ante la adversidad, trauma o fuentes significativas de estrés.",
    },
    {
      termino: "Mindfulness",
      definicion:
        "Práctica de atención plena al momento presente, sin juicios ni distracciones.",
    },
    {
      termino: "Regulación emocional",
      definicion:
        "Habilidad para gestionar y responder a las emociones de manera apropiada y efectiva.",
    },
    {
      termino: "Distorsiones cognitivas",
      definicion:
        "Patrones de pensamiento inexactos o extremos que refuerzan emociones negativas.",
    },
    {
      termino: "Trauma",
      definicion:
        "Respuesta emocional a un evento terrible como un accidente, violencia o desastre natural, que puede tener efectos duraderos.",
    },
    {
      termino: "Depresión",
      definicion:
        "Trastorno del estado de ánimo caracterizado por una tristeza persistente y una pérdida de interés en las actividades diarias.",
    },
    {
      termino: "Autoestima",
      definicion:
        "Valoración que una persona tiene de sí misma, influenciada por su autoconcepto y sus experiencias.",
    },
    {
      termino: "Psicoterapia",
      definicion:
        "Tratamiento de problemas emocionales y psicológicos mediante la conversación y técnicas terapéuticas.",
    },
    {
      termino: "Estrés",
      definicion:
        "Respuesta física y emocional a demandas externas que superan los recursos percibidos de una persona.",
    },
    {
      termino: "Asertividad",
      definicion:
        "Habilidad para expresar pensamientos, sentimientos y necesidades de manera clara y respetuosa, sin agresividad ni pasividad.",
    },
    {
      termino: "Autocuidado",
      definicion:
        "Conjunto de prácticas que una persona realiza para mantener su bienestar físico, emocional y mental.",
    },
    {
      termino: "Agorafobia",
      definicion:
        "Miedo intenso a situaciones donde escapar podría ser difícil o no haber ayuda disponible en caso de tener un ataque de pánico.",
    },
    {
      termino: "Trastorno obsesivo-compulsivo (TOC)",
      definicion:
        "Trastorno de ansiedad caracterizado por pensamientos intrusivos y comportamientos repetitivos destinados a reducir la ansiedad.",
    },
    {
      termino: "Pánico",
      definicion:
        "Reacción emocional intensa de miedo y ansiedad, a menudo sin una causa clara o en situaciones no peligrosas.",
    },
    {
      termino: "Fobias",
      definicion:
        "Miedos intensos y persistentes hacia objetos, seres vivos o situaciones específicas, que provocan un malestar significativo.",
    },
    {
      termino: "Psicopatología",
      definicion:
        "Estudio de los trastornos mentales y emocionales, incluidos los síntomas, las causas y los tratamientos.",
    },
    {
      termino: "Estrategias de afrontamiento",
      definicion:
        "Técnicas que las personas utilizan para lidiar con el estrés, la ansiedad o los desafíos emocionales.",
    },
    {
      termino: "Aceptación",
      definicion:
        "Proceso de permitir que pensamientos, sentimientos y situaciones existan sin resistirse a ellos, promoviendo el bienestar mental.",
    },
    {
      termino: "Trastorno límite de la personalidad",
      definicion:
        "Trastorno caracterizado por patrones de inestabilidad emocional, problemas de relación interpersonal y un comportamiento impulsivo.",
    },
  ];

  const tabs = [
    {
      id: "articulos",
      label: "Artículos",
      icon: <ReadOutlined style={{ fontSize: 20 }} />,
    },
    // {
    //   id: "herramientas",
    //   label: "Herramientas",
    //   icon: <BulbOutlined style={{ fontSize: 20 }} />,
    // },
    {
      id: "pdfs",
      label: "PDFs",
      icon: <FileTextOutlined style={{ fontSize: 20 }} />,
    },
    {
      id: "videos",
      label: "Videos",
      icon: <VideoCameraOutlined style={{ fontSize: 20 }} />,
    },
    {
      id: "podcasts",
      label: "Podcasts",
      icon: <QuestionCircleOutlined style={{ fontSize: 20 }} />,
    },
    {
      id: "glosario",
      label: "Glosario",
      icon: <BookOutlined style={{ fontSize: 20 }} />,
    },
  ];

  return (
    <DefaultLayoutPatient>
      <div className={styles.container}>
        <h1 className={styles.title}>Recursos</h1>

        <div className={styles.infoContainer}>
          <p>
            Como usuario de nuestra plataforma, tienes acceso a una variedad de
            recursos cuidadosamente seleccionados para apoyarte en tu bienestar
            emocional y psicológico.
          </p>
        </div>

        {/* Navegación de pestañas */}
        <div className={styles.tabsNavigation}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabButton} ${
                activeTab === tab.id ? styles.active : ""
              }`}
            >
              <span className={styles.tabIcon}>{tab.icon}</span>
              <span className={styles.tabLabel}>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Contenido de las pestañas */}
        <div>
          {activeTab === "articulos" && (
            <div>
              <h2 className={styles.sectionTitle}>Artículos Recomendados</h2>
              <div className={styles.articulosGrid}>
                {articulos.map((articulo, idx) => (
                  <div key={idx} className={styles.articuloCard}>
                    <span className={styles.categoriaBadge}>
                      {articulo.categoria}
                    </span>
                    <h3>{articulo.titulo}</h3>
                    <p>{articulo.descripcion}</p>
                    <button className={styles.readMoreButton}>
                      Leer artículo completo →
                    </button>
                  </div>
                ))}
              </div>
              {/* <div className={styles.verMasContainer}>
                <button className={styles.verMasButton}>
                  Ver más artículos
                </button>
              </div> */}
            </div>
          )}

          {/* {activeTab === "herramientas" && (
            <div>
              <h2 className={styles.sectionTitle}>Herramientas Interactivas</h2>
              <div className={styles.herramientasGrid}>
                {herramientas.map((herramienta, idx) => (
                  <div key={idx} className={styles.herramientaCard}>
                    <div className={styles.herramientaIcon}>
                      {herramienta.icono}
                    </div>
                    <div className={styles.herramientaContent}>
                      <h3 className={styles.herramientaTitle}>
                        {herramienta.titulo}
                      </h3>
                      <p className={styles.herramientaDescripcion}>
                        {herramienta.descripcion}
                      </p>
                      <button className={styles.openToolButton}>
                        Abrir herramienta
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <p className={styles.disclaimer}>
                Todas las herramientas están diseñadas con propósito educativo y
                de apoyo. No sustituyen la evaluación profesional.
              </p>
            </div>
          )} */}

          {activeTab === "pdfs" && (
            <div>
              <h2 className={styles.sectionTitle}>PDFs Descargables</h2>
              <div className={styles.pdfsGrid}>
                {pdfs.map((pdf, idx) => (
                  <div key={idx} className={styles.pdfCard}>
                    <div
                      className={styles.pdfIconContainer}
                      style={{ backgroundColor: `${pdf.color}20` }}
                    >
                      <FileTextOutlined
                        style={{ fontSize: 48, color: pdf.color }}
                      />
                    </div>
                    <div className={styles.pdfContent}>
                      <h3 className={styles.pdfTitle}>{pdf.titulo}</h3>
                      <p className={styles.pdfDescripcion}>{pdf.descripcion}</p>
                      <button
                        className={styles.downloadButton}
                        style={{ backgroundColor: pdf.color }}
                      >
                        Descargar PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "videos" && (
            <div>
              <h2 className={styles.sectionTitle}>Videos Educativos</h2>
              <div className={styles.videosGrid}>
                {videos.map((video, idx) => (
                  <div key={idx} className={styles.videoCard}>
                    <div className={styles.videoThumbnail}>
                      <VideoCameraOutlined
                        style={{ fontSize: 48, color: "#6B7280" }}
                      />
                      <span className={styles.videoDuration}>
                        {video.duracion}
                      </span>
                    </div>
                    <div className={styles.videoContent}>
                      <h3 className={styles.videoTitle}>{video.titulo}</h3>
                      <p className={styles.videoDescripcion}>
                        {video.descripcion}
                      </p>
                      <a href="#" className={styles.watchLink}>
                        <VideoCameraOutlined style={{ fontSize: 16 }} /> Ver en
                        YouTube
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "podcasts" && (
            <div>
              <h2 className={styles.sectionTitle}>Podcasts Recomendados</h2>
              <div className={styles.podcastsList}>
                {podcasts.map((podcast, idx) => (
                  <div key={idx} className={styles.podcastCard}>
                    <div className={styles.podcastIcon}>
                      <AudioOutlined
                        style={{ fontSize: 24, color: "#FFFFFF" }}
                      />
                    </div>
                    <div className={styles.podcastContent}>
                      <h3 className={styles.podcastTitle}>{podcast.titulo}</h3>
                      <p className={styles.podcastDescripcion}>
                        {podcast.descripcion}
                      </p>
                      <p className={styles.podcastCreator}>
                        Por: {podcast.creador}
                      </p>
                    </div>
                    <button className={styles.playButton}>
                      <PlayCircleOutlined style={{ fontSize: 20 }} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "glosario" && (
            <div>
              <h2 className={styles.sectionTitle}>Glosario Psicológico</h2>
              <div className={styles.glosarioList}>
                {glosario.map((item, index) => (
                  <div key={index} className={styles.glosarioItem}>
                    <h3 className={styles.glosarioTermino}>{item.termino}</h3>
                    <p className={styles.glosarioDefinicion}>
                      {item.definicion}
                    </p>
                  </div>
                ))}
                <p className={styles.glosarioNote}>
                  Este glosario incluye términos básicos. Si tienes dudas sobre
                  algún concepto mencionado en terapia, no dudes en preguntarle
                  a tu terapeuta.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </DefaultLayoutPatient>
  );
}
