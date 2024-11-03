import { Link } from "react-router-dom";
import logo from "../../assets/logotipo_semfundo_reduzida.png";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="container">
      <nav className="navbar-default">
        <a className="logotipo">
          <img className="logo" src={logo} alt="Logotipo UnicoBoss" />
        </a>
        <ul className="links">
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <a href="#">Gratis<span className="arrow">▼</span></a>
            <ul className="dropdown-content">
              <li><a href="#">aaaaaa</a></li>
              <li><a href="#">dfafaf</a></li>
              <li><a href="#">adaddad</a></li>
            </ul>
          </li>
          <li><a href="#">Cursos</a></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><a href="#">Contato</a></li>
        </ul>


      </nav>
      <div className="bottom-navbar">
        <a href="#" className="nav-icon">
          <i className="fas fa-home"></i>
        </a>
        <a href="#" className="nav-icon">
          <i className="fas fa-info-circle"></i>
        </a>
        <a href="#" className="nav-icon">
          <i className="fas fa-search"></i>
        </a>
        <a href="#" className="nav-icon">
          <i className="fas fa-bars"></i>
        </a>
      </div>
    </div>
  )
}


export default NavBar;