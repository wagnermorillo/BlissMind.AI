import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SobreNosotros from "./Screens/SobreNosotros";
import Caracteristicas from "./Screens/Caracteristicas";
import Beneficios from "./Screens/Beneficios";
import Login from "./Screens/Login";
import Registrarse from "./Screens/Registrarse";
import HeroSection from "./Screens/HeroSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas con layout */}
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <HeroSection />
              <Footer />
            </>
          }
        />
        {/* Rutas independientes (se abrirán en nuevas pestañas con el cambio en NavBar) */}
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/caracteristicas" element={<Caracteristicas />} />
        <Route path="/beneficios" element={<Beneficios />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrarse" element={<Registrarse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
