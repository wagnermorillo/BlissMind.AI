import { lazy, React, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter.jsx";
const Login = lazy(() => import("../pages/Login.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const Welcomescreen = lazy(() =>
  import("../components/Questions/Welcomescreen.jsx")
);
const Welcpsyco = lazy(() => import("../components/Questions/Welcpsyco.jsx"));
const Questionnaire = lazy(() =>
  import("../components/Questions/Questionnaire.jsx")
);
const Upload = lazy(() => import("../components/Questions/Upload.jsx"));
const Home = lazy(() => import("../pages/Home"));
const LoadingScreen = lazy(() => import("../components/Loading/loading.jsx"));
const DashBoard = lazy(() => import("../pages/dashboard/dashboard.jsx"));
const ChatAi = lazy(() => import("../pages/chat-ai/ChatAi.jsx"));
const DashboardPatient = lazy(() => import("../pages/dashboard/DashboardPatient.jsx"));
const Support = lazy(() => import("../pages/resources-support/Support.jsx"));
const SupportCategoryPage = lazy(() => import("../pages/resources-support/SupportCategoryPage.jsx"));
const SearchSupportResults = lazy(() => import("../pages/resources-support/SearchSupportResults.jsx"));
const NotFoundPage = lazy(() => import("../pages/not-found/NotFoundPage.jsx"));
const CalendarPage = lazy(() => import("../pages/calendar/CalendarPage.jsx"));

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
        <Route path="/dashboard-patient" element={<DashboardPatient />} />
        <Route path="/chat-ai" element={<ChatAi />} />
        <Route path="/support" element={<Support/>} />
        <Route path="/support/:category" element={<SupportCategoryPage />} />
        <Route path="/support/results" element={<SearchSupportResults />} />
        <Route path="/calendar" element={<CalendarPage/>} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
