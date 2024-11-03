import "./PrincipalScreen.scss";
import backsidevideo from "../../assets/backsidevideo.mp4";
import Information from "./Information";
import logo from "../../assets/logotipo_semfundo_reduzida.png";
import { Link } from "react-router-dom";


const PrincipalScreen = () => {



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
          <nav>
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
            <a href="#" className="nav-icon">
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
        <Information />
      </main>
    </>
  )
}


export default PrincipalScreen;