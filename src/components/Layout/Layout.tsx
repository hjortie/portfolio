import { Link, NavLink, Outlet } from "react-router";
import "./layout.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header id="hem">
        <nav className="burger">
          <div id="logo-container">
            <Link to="/">
              <img src={logo} alt="Elin Hjortskull" />
            </Link>
          </div>
        </nav>
        <input
          id="dropdown"
          className="input-box"
          type="checkbox"
          checked={isMenuOpen}
          onChange={(e) => {
            setIsMenuOpen(e.target.checked);
          }}
        />
        <label htmlFor="dropdown" className="dropdown">
          <div className="burger-container">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className="links">
            <p>
              <NavLink to="/projects" onClick={handleLinkClick}>
                Projekt
              </NavLink>
            </p>
            <p>
              <NavLink to="/skills" onClick={handleLinkClick}>
                Skills & verktyg
              </NavLink>
            </p>
            <p>
              <NavLink to="/contact" onClick={handleLinkClick}>
                Kontakt
              </NavLink>
            </p>
          </div>
        </label>
        <nav className="wide-nav">
          <div id="logo-container">
            <Link to="/">
              <img src={logo} alt="Elin Hjortskull" />
            </Link>
          </div>
          <p>
            <NavLink to="/projects">Projekt</NavLink>
          </p>
          <p>
            <NavLink to="/skills">Skills & verktyg</NavLink>
          </p>
          <p>
            <NavLink to="/contact">Kontakt</NavLink>
          </p>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
