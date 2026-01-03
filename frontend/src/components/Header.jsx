import { NavLink } from "react-router-dom";

const Header = () => {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md font-medium transition ${isActive
      ? "bg-accent text-white"
      : "text-primary hover:bg-highlight"
    }`;

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex gap-4">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/add-contact" className={linkClass}>
          Store Contact
        </NavLink>
        <NavLink to="/contacts" className={linkClass}>
          Display Contacts
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
