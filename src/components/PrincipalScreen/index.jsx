import "./PrincipalScreen.scss";
import backsidevideo from "../../assets/backsidevideo.mp4";
import Information from "../Information";
import logo from "../../assets/logotipo_semfundo_reduzida.png";


const PrincipalScreen = () => {



  return (
    <main>
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
              <li><a href="#">Home</a></li>
              <li><a href="#">Gratis</a></li>
              <li><a href="#">Cursos</a></li>
              <li><a href="#">Mentorias</a></li>
              <li><a href="#">Contato</a></li>
              {/* <li><a href="#">Login</a></li> */}
            </ul>
          </nav>
        <header>
          <h1 className="text-primary">Cursos, mentorias, Ebooks, dicas e muito mais para fazer você conquistar sua{' '} <span className="highlight">Liberdade Financeira !</span> </h1>
          <div></div>
        </header>
      </div>
    </main>
  )
}


export default PrincipalScreen;