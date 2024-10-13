import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/summary">Book Summary</Link>
        </li>
        <li>Technical Document</li>
        <li>About me</li>
        <li>
          <Link to="/=">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
