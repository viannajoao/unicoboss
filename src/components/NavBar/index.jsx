import { Link, NavLink } from "react-router-dom"; // Importe NavLink
import logo from "../../assets/logotipo_semfundo_reduzida.png";
import "./NavBar.scss";
import Blog from "../Blog";
import PrincipalScreen from "../PrincipalScreen";

// eslint-disable-next-line react/prop-types
function NavBar({ mudarEstado, open, isTransparent, onSearchClick }) {
  const toggleSidebar = () => {
    return mudarEstado(!open);
  };

  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <nav
        id="navbar-principalscreen"
        className={`navbar-default ${isTransparent ? "transparent" : "solid"}`}
      >
        <a className="logotipo" href="/">
          <img className="logo" src={logo} alt="Logotipo UnicoBoss" />
        </a>
        <ul className="links">
          <li>
            <Link
              className="link"
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Início
            </Link>
          </li>
          <li className="dropdown">
            <Link className="link" href="#">
              Gratis<span className="arrow">▼</span>
            </Link>
            <ul className="dropdown-content">
              <span style={{ color: "grey", padding: "10px" }}>
                Em construção
              </span>
              {/* <li><a href="#">aaaaaa</a></li>
              <li><a href="#">dfafaf</a></li>
              <li><a href="#">adaddad</a></li> */}
            </ul>
          </li>
          <li>
            <Link className="link" href="#">
              Cursos
            </Link>
          </li>
          <li>
            <Link className="link" to="/Blog">Blog</Link>
          </li>
          <li>
            <a className="link" onClick={scrollToFooter}>
              Contato
            </a>
          </li>
          <li className="nav-icon">
            <i className="fas fa-search" onClick={onSearchClick}></i>
          </li>
        </ul>
      </nav>
      <div className="bottom-navbar">
        <Link to="/" className="nav-icon">
          <i className="fas fa-home"></i>
        </Link>
        <a href="#" className="nav-icon">
          <i className="fas fa-info-circle"></i>
        </a>
        <a onClick={onSearchClick} className="nav-icon">
          <i className="fas fa-search"></i>
        </a>
        <a onClick={toggleSidebar} className="nav-icon">
          <i className="fas fa-bars"></i>
        </a>
      </div>

      <div id="sidebar" className={`sidebar-container${open ? " open" : ""}`}>
        <button id="btn" className="close-btn" onClick={toggleSidebar}>
          <b>X</b>
        </button>
        <nav id="navbar" className="sidebar-nav">
          <NavLink
            className="sidebar-link"
            to="/"
            element={<PrincipalScreen />}
            onClick={toggleSidebar}
            exact
            activeClassName="active"
          >
            Início
          </NavLink>
          <NavLink
            to="/Gratis"
            className="dropdown-mobile sidebar-link"
            onClick={toggleSidebar}
          >
            Gratis<span className="arrow">▼</span>
            <ul className="dropdown-content-mobile">
              <span style={{ color: "grey", padding: "10px" }}>
                Em construção
              </span>
              {/* <li><a href="#">aaaaaa</a></li>
              <li><a href="#">dfafaf</a></li>
              <li><a href="#">adaddad</a></li> */}
            </ul>
          </NavLink>
          <NavLink
            className="sidebar-link"
            to="/contato"
            onClick={toggleSidebar}
            activeClassName="active"
          >
            Contato
          </NavLink>
          <NavLink
            className="sidebar-link"
            to="/Blog"
            element={<Blog />}
            onClick={toggleSidebar}
            activeClassName="active"
          >
            Blog
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;