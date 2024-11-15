import { Link } from "react-router-dom";
import logo from "../../assets/logotipo_semfundo_reduzida.png";
import "./NavBar.scss";
import Blog from "../Blog"

// eslint-disable-next-line react/prop-types
function NavBar({mudarEstado, open}) {

  console.log(open)


  const toggleSidebar = () =>{
    console.log(open)
    return mudarEstado(!open)
    //console.log(open)
  }


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
              <span style={{ color: "grey", padding: "10px" }}>Em construção</span>
              {/* <li><a href="#">aaaaaa</a></li>
              <li><a href="#">dfafaf</a></li>
              <li><a href="#">adaddad</a></li> */}
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
        <a onClick={toggleSidebar} className="nav-icon">
          <i className="fas fa-bars"></i>
        </a>
      </div>

      <div className={`sidebar-container${open ? ' open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          <b>X</b>{/* Ícone de fechar */}
        </button>
        <nav className="sidebar-nav">
          <Link to="/" onClick={toggleSidebar}>Home</Link>
          <Link to="/buscar" onClick={toggleSidebar}>Buscar</Link>
          <Link to="/contato" onClick={toggleSidebar}>Contato</Link>
          <Link to="/Blog" Element={<Blog />} onClick={toggleSidebar}>Blog</Link>
        </nav>
        {/* Overlay para fechar o menu ao clicar fora dele */}
        {open && <div className="overlay-mobile" onClick={toggleSidebar}></div>}
      </div>
    </div>
  )
}


export default NavBar;