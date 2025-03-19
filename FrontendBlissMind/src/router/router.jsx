import {lazy, React, Suspense} from "react";
import { Routes, Route} from "react-router-dom";
const Login = lazy(() => import("../pages/Login.jsx"));

const Home = lazy(() => import("../pages/Home"));

function AppRouter() {
  return (
        <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/Login" element={<Login />}/>

        </Routes>
        </Suspense>
  );
}

export default AppRouter;
