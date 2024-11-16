import "./PrincipalScreen.scss";
import backsidevideo from "../../assets/backsidevideo.mp4";
import Information from "./Information";
import { useState } from "react";

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
          <section className="layout-banner">
            <h1 className="text-primary">Cursos, mentorias, Ebooks, dicas e muito mais para fazer você conquistar sua{' '} <span className="highlight">Liberdade Financeira !</span> </h1>
            <div></div>
          </section>
        </div>


      </header>
      <main>
        <Information />
      </main>
      {isSidebarOpen && <div className="overlay-mobile" onClick={toggleSidebar}></div>}
    </>
  )
}


export default PrincipalScreen;