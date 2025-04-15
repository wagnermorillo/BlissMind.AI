import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const Header = lazy(() => import("../../components/Header"));
const Footer = lazy(() => import("../../components/Footer"));

const SupportBaseLayout = ({ children }) => {
  return (
    <>
      <div style={{ display: "flex", alignContent: "center" }}>
        <Header />
      </div>
      {children}

      <Footer />
    </>
  );
};

export default SupportBaseLayout;
