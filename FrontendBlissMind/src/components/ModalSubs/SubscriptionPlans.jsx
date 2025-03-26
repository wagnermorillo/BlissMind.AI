import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const SubscriptionPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = {
    standard: {
      title: "Suscripción Estándar",
      monthlyPrice: 35,
      annualPrice: 357,
      features: [
        "Sesiones con terapeutas.",
        "ChatBot integrado.",
        "Agenda de citas automatica."
      ],
      unavailableFeatures: [
        "Contenido exclusivo de bienestar.",
        "Programas personalizados.",
        "Prioridad en atención."
      ]
    },
    premium: {
      title: "Suscripción Premium",
      monthlyPrice: 50,
      annualPrice: 510,
      features: [
        "ChatBot integrado.",
        "Citas automatizada con recordatorios.",
        "Contenido exclusivo.",
        "Programas personalizados.",
        "Prioridad en atención.",
        "Reportes de progreso."
      ]
    }
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="container">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Planes de Suscripción</h2>
        <div className="d-flex justify-content-center align-items-center gap-3 my-4">
          <span className={`fw-bold ${!isAnnual ? "text-primary" : "text-muted"}`}>Mensual</span>
          <div 
            className="position-relative"
            style={{ width: "60px" }}
          >
            <input
              type="checkbox"
              id="billingSwitch"
              checked={isAnnual}
              onChange={() => setIsAnnual(!isAnnual)}
              className="position-absolute w-100 h-100"
              style={{ opacity: 0, zIndex: 1, cursor: "pointer" }}
            />
            <div 
              className={`position-relative rounded-pill ${isAnnual ? 'bg-primary' : 'bg-secondary'}`}
              style={{ 
                width: "60px",
                height: "30px",
                transition: "background-color 0.3s ease"
              }}
            >
              <div 
                className="position-absolute bg-white rounded-circle shadow-sm"
                style={{
                  width: "26px",
                  height: "26px",
                  top: "2px",
                  left: isAnnual ? "32px" : "2px",
                  transition: "left 0.3s ease, transform 0.3s ease",
                  transform: isAnnual ? "scale(1.1)" : "scale(1)"
                }}
              />
            </div>
          </div>
          <span className={`fw-bold ${isAnnual ? "text-primary" : "text-muted"}`}>Anual</span>
          {isAnnual && (
            <span className="badge bg-success ms-2">
              ¡Ahorra 15%!
            </span>
          )}
        </div>
      </div>

      <div className="row justify-content-center">
        {Object.entries(plans).map(([key, plan]) => (
          <div className="col-md-5 d-flex" key={key}>
            <div 
              className={`card shadow-lg p-4 text-left flex-grow-1 d-flex flex-column justify-content-between ${selectedPlan === key ? "border-primary" : "border-secondary"}`}
              style={{ transition: "0.3s", minHeight: "100%" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {key === "premium" && (
                <div className="position-absolute top-0 start-50 translate-middle badge bg-primary">
                  <MdStars /> Recomendado
                </div>
              )}
              <h3 className="fw-bold">{plan.title}</h3>
              <div className="display-5 fw-bold my-3">
                ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                <span className="fs-6 text-muted">/{isAnnual ? "año" : "mes"}</span>
              </div>
              <ul className="list-unstyled mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="d-flex align-items-left justify-content-left gap-2">
                    <FaCheck className="text-success" /> {feature}
                  </li>
                ))}
                {plan.unavailableFeatures && plan.unavailableFeatures.map((feature, index) => (
                  <li key={index} className="d-flex align-items-left justify-content-left gap-2 text-muted">
                    <FaTimes /> {feature}
                  </li>
                ))}
              </ul>
              <Link to="/Login">
              <button onClick={() => handlePlanSelect(key)} className="btn btn-primary w-100 mt-auto">
                Seleccionar 
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;