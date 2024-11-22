import "./Rodape.scss";
import logo from "../../assets/logotipo_semfundo_reduzida.png";

function Rodape(){
  return (
<footer className="footer">
<div className="footer-content">
  <div className="espace-logo">
    <img src={logo} alt="Logo" />
  </div>
  <div className="social-icons">
    <a href="https://www.facebook.com/profile.php?id=61566016094032" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://www.instagram.com/unico_boss/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
  <p>© 2021 - {new Date().getFullYear()} UnicoBoss. Todos os direitos reservados.</p>
</div>
</footer>
  )
}


export default Rodape;