import { lazy, React, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRouter from './ProtectedRouter.jsx'
const Login = lazy(() => import("../pages/Login.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const Welcomescreen = lazy(() => import("../components/Questions/Welcomescreen.jsx"));
const Welcpsyco = lazy(() => import("../components/Questions/Welcpsyco.jsx"));
const Questionnaire = lazy(() => import("../components/Questions/Questionnaire.jsx"));
const Upload = lazy(() => import("../components/Questions/Upload.jsx"));
const Home = lazy(() => import("../pages/Home"));
const LoadingScreen = lazy(() => import("../components/Loading/loading.jsx"));
const DashBoard = lazy(() => import("../pages/dashboard/dashboard.jsx"));


function AppRouter() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<ProtectedRouter />}>
          <Route path="/Dashboard" element={<DashBoard />} />
        </Route>
        <Route path="/Welcomescreen" element={<Welcomescreen />} />
        <Route path="/Questionnaire" element={<Questionnaire />} />
        <Route path="/Welcpsyco" element={<Welcpsyco />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
