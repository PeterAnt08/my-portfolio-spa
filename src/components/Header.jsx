import { NavLink } from "react-router-dom";

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="logo">My Portfolio SPA</div>

      <nav className="nav">
        <NavLink to="/about">Про мене</NavLink>
        <NavLink to="/my-city">Моє місто</NavLink>
        <NavLink to="/my-future">Мій розвиток</NavLink>
      </nav>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Темна" : "☀️ Світла"}
      </button>
    </header>
  );
}

export default Header;