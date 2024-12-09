import "./Footer.scss";
import logo from "../../assets/logotipo_semfundo_reduzida.png";

function Rodape(){
  return (
    <footer id="footer" className="footer">
    <div className="footer-container">
      {/* Seção da Logo */}
      <div className="espace-logo">
        <img src={logo} alt="Logo UnicoBoss" className="footer-logo" />
      </div>

      {/* Links Essenciais */}
      <div className="footer-links">
        <a href="/sobre-nos" className="footer-link">Sobre Nós</a>
        <a href="/contato" className="footer-link">Contato</a>
        <a href="/politica-de-privacidade" className="footer-link">Política de Privacidade</a>
      </div>

      {/* Redes Sociais */}
      <div className="social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=61566016094032"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com/unico_boss/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>

    {/* Copyright */}
    <p className="footer-copyright">
      © {new Date().getFullYear()} UnicoBoss - Todos os direitos reservados.
    </p>
  </footer>
  )
}


export default Rodape;