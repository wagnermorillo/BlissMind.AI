import { lazy } from "react";

const Header = lazy(() => import("../../components/Header"));
const Footer = lazy(() => import("../../components/Footer"));

const SupportBaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}

      <Footer />
    </>
  );
};

export default SupportBaseLayout;
