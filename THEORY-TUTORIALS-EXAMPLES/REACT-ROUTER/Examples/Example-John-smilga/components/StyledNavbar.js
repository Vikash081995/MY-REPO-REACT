import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "linkactive" : "link")}
      ></NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "linkactive" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "linkactive" : "link")}
      >
        Products
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "linkactive" : "link")}
      >
        Login
      </NavLink>
    </nav>
  );
};
export default Navbar;
