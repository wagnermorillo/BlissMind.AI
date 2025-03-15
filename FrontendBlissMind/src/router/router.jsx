import {lazy, React, Suspense} from "react";
import { Routes, Route} from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));

function AppRouter() {
  return (
        <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
        </Suspense>
  );
}

export default AppRouter;
