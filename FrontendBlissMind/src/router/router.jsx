import {lazy, React, Suspense} from "react";
import { Routes, Route} from "react-router-dom";
const Login = lazy(() => import("../pages/Login.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const Home = lazy(() => import("../pages/Home"));
const LoadingScreen = lazy(() => import("../components/Loading/loading.jsx"));
const DashBoard = lazy(() => import("../pages/dashboard/dashboard.jsx"));

function AppRouter() {
  return (
        <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/Dashboard" element={<DashBoard />}/>
        </Routes>
        </Suspense>
  );
}

export default AppRouter;
