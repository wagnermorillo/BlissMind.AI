import { useAuth } from "../../services/AuthProvider";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  const { isLogged, user } = useAuth();
  //   const navigate = useNavigate();

  //   const handleRedirect = () => {
  //     if (isLogged) {
  //       navigate("/dashboard"); // aqui va la ruta segun el tipo de usuarioaa
  //     } else {
  //       navigate("/");
  //     }
  //   };

  return (
    <>
      <div
        style={{
          textAlign: "left",
          padding: "16px",
          borderRight: "1px solid #f0f0f0",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bolder",
            color: "#14279B",
            transition: "all 0.3s ease-in-out",
            display: "inline-block",
            whiteSpace: "nowrap",
            margin: 0,
          }}
          className="outfit-bold"
        >
          BlissMind.AI
        </h1>
      </div>

      <div
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 50px",
        }}
      >
        <h6 style={{ fontSize: "1.5rem", margin: "10px 0" }}>
          No se encontró la página
        </h6>
        <p>
          Es posible que no tengas acceso o que se haya eliminado o movido.
          Verifica el enlace e inténtalo de nuevo.
        </p>
        {isLogged && (
          <Link
            to="/dashboard-patient"
            style={{
              border: "1px solid rgb(154, 158, 199)",
              padding: "8px 7px",
              fontSize: "14px",
              borderRadius: "8px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Volver a mi cuenta
          </Link>
          // todo: cambiar esto de la ruta dependiendo de la logica de como se manejan los tipos de usuario
        )}
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {!isLogged && (
            <>
              <Link to="/" style={{ textDecoration: "none",
            color: "inherit"}}>¿Qué es BlissMindAI?</Link>
              <p>• </p>
              <Link to="/support" style={{ textDecoration: "none",
            color: "inherit"}}>Soporte</Link>
            </>
          )}
          {isLogged && (
            <p style={{ color: "#6B77A1" }}>
              Conectado como{" "}
              <span style={{ color: "#0F1B64" }}>{user?.correo}</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
