import "./PrincipalScreen.scss";
import backsidevideo from "../../assets/backsidevideo.mp4";


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

      <div className="circle">
        <div className="arrow-down"></div>
      </div>

      <div className="content">
          <nav>
            <a>Logo
              <img src="" alt="" />
            </a>
            <ul className="links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Cursos</a></li>
              <li><a href="#">Mentorias</a></li>
              <li><a href="#">Contato</a></li>
              {/* <li><a href="#">Login</a></li> */}
            </ul>
          </nav>
        <header>
          <h1>Cursos e mentorias para fazer você conquistar sua liberdade financeira</h1>
          <h3>Confira abaixo</h3>
        </header>
      </div>
    </main>
  )
}


export default PrincipalScreen;