import "./NotFound.scss";

function NotFound(){
  return (
    <div className="notFound">
      <h1>Pagian não encontrada</h1>
      <p>Desculpe, você está procurando uma pagina de não existe.</p>
      <picture>
        <img src="/images/notFound/notfound.png"></img>
      </picture>
      <a href="/">Voltar para o Inicio</a>
    </div>
  )
}


export default NotFound;