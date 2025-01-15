import { Link, NavLink } from "react-router-dom";
export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header>

      <nav>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/categories" className={getClass}>
          Diplomas
        </NavLink>
        <NavLink to="/register" className={getClass}>
          Register
        </NavLink>
      </nav>
    </header>
  );
}
