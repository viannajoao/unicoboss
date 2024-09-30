import "./PrincipalScreen.scss";
import backsidevideo from "../../assets/backsidevideo.mp4";


const PrincipalScreen = () => {



  return (
    <main>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={backsidevideo} type="video/mp4"/>
          your browser dont support this video
        </video>
        <div className="overlay"></div>
      </div>
      
      <div className="content">
        <header>
          <h1>Cursos e mentorias para fazer você conquistar sua liberdade financeira</h1>
          <h3>Confira abaixo</h3>
        </header>
      </div>
    </main>
  )
}


export default PrincipalScreen;