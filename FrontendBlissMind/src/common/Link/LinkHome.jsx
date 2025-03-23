import { Link } from "react-router-dom";
import './styles.css'

const StyledLink = ({ to, children }) => {
  return (
    <Link to={to} className="Linked">
      {children}
    </Link>
  );
};

export default StyledLink;
