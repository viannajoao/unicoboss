import "./PrincipalScreen.scss";
import backsidevideo from "../../assets/backsidevideo.mp4";
import Information from "./Information";
import logo from "../../assets/logotipo_semfundo_reduzida.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Blog from "../Blog";

const PrincipalScreen = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Função para abrir/fechar o menu
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
    console.log("clicado");
    console.log(isSidebarOpen);
  };


  return (
    <>
      <header className="banner">
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source src={backsidevideo} type="video/mp4" />
            your browser dont support this video
          </video>
          <div className="overlay"></div>
        </div>

        <div className="circle" href={<Information />}>
          <div className="arrow-down"></div>
        </div>

        <div className="content">
          <nav className="nav-principal">
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
              {/* <li><a href="#">Login</a></li> */}
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
          
          <section className="layout-banner">
            <h1 className="text-primary">Cursos, mentorias, Ebooks, dicas e muito mais para fazer você conquistar sua{' '} <span className="highlight">Liberdade Financeira !</span> </h1>
            <div></div>
          </section>
        </div>


      </header>
      <main>
      <div className={`sidebar-container${isSidebarOpen ? ' open' : ''}`}>
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
            
          </div>
        <Information />
      </main>
      {isSidebarOpen && <div className="overlay-mobile" onClick={toggleSidebar}></div>}
    </>
  )
}


export default PrincipalScreen;