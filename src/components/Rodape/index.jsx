import "./Rodape.scss";

function Rodape(){
  return (
    <footer className="footer_dsg">
      <p>Todos os direitos reservados </p>
      <p> 2021 - {new Date().getFullYear()}</p>
    </footer>
  )
}


export default Rodape;