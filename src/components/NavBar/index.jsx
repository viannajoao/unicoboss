import { Link } from "react-router-dom";
import logo from "../../assets/logotipo_semfundo_reduzida.png";
import "./NavBar.scss";
import Blog from "../Blog"
import PrincipalScreen from "../PrincipalScreen";

// eslint-disable-next-line react/prop-types
function NavBar({mudarEstado, open, isTransparent, onSearchClick}) {

  const toggleSidebar = () =>{
    return mudarEstado(!open)

  }


  return (
    <div className="container">
      <nav id="navbar-principalscreen" className={`navbar-default ${isTransparent ? 'transparent' : 'solid'}`}>
        <a className="logotipo">
          <img className="logo" src={logo} alt="Logotipo UnicoBoss" />
        </a>
        <ul className="links">
          <li><Link to="/">Inicio</Link></li>
          <li className="dropdown">
            <a href="#">Gratis<span className="arrow">▼</span></a>
            <ul className="dropdown-content">
              <span style={{ color: "grey", padding: "10px" }}>Em construção</span>
              {/* <li><a href="#">aaaaaa</a></li>
              <li><a href="#">dfafaf</a></li>
              <li><a href="#">adaddad</a></li> */}
            </ul>
          </li>
          <li><a href="#">Cursos</a></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><a href="#">Contato</a></li>
          <li className="nav-icon"><i className="fas fa-search" onClick={onSearchClick}></i></li>
        </ul>


      </nav>
      <div className="bottom-navbar">
        <a href="/" className="nav-icon">
          <i className="fas fa-home"></i>
        </a>
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

      <div id="sidebar" className={`sidebar-container${open ? ' open' : ''}`}>
        <button id="btn" className="close-btn" onClick={toggleSidebar}>
          <b>X</b>{/* Ícone de fechar */}
        </button>
        <nav id="navbar" className="sidebar-nav">
          <Link to="/" element={<PrincipalScreen />} onClick={toggleSidebar}>Inicio</Link>
          <Link to="/buscar" onClick={toggleSidebar}>Gratis</Link>
          <Link to="/contato" onClick={toggleSidebar}>Contato</Link>
          <Link to="/Blog" element={<Blog />} onClick={toggleSidebar}>Blog</Link>
        </nav>
        {/* Overlay para fechar o menu ao clicar fora dele */}
        
      </div>
    </div>
  )
}


export default NavBar;