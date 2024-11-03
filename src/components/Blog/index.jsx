import { Link } from "react-router-dom";
import "./Blog.scss";
import NavBar from "../NavBar";
import News from "../News";

function Blog() {

  let articles = [
    {
      title: "Panetone",
      photo: "/images/panetones/CursoPanetone5.png",
      date: "20 de Outubro de 2024",
      page: "/Blog/ganharDinheiroEmNovembro",
      desc: "Entenda como algumas pessoas ganham muito dinheiro em novembro e enquanto algumas pessoas so gastam dinheiro"
    },
    {
      title: "12 Renda Extra",
      photo: "/images/panetones/CursoPanetone6.png",
      date: "10 de Outubro de 2024",
      page: "/Blog/ganharDinheiroEmNovembro",
      desc: "12 ideias de como obter Renda Extra para aumentar o seu capital"
    },
    {
      title: "12 Renda Extra",
      photo: "Conteúdo do artigo 2",
      date: "12 de Novembro de 2022"
    },
    //... outros panetones
  ]

  return (
    <div>
      <NavBar />
      <header className="principal-view">

        <h1>Blog</h1>
        <p>Artigos mais recentes</p>

      </header>
      <main className="articles">
        <div className="news-articles">
          {articles.map((item, index) => (
            <Link className="links-articles" key={index} to={item.page}>
              <News  title={item.title} date={item.date} photo={item.photo} description={item.desc}>
                
              </News>


            </Link>
          ))}

        </div>

        <aside className="ads-google">
        </aside>


      </main>
      <div className="pagination">
        <button>CARREGAR MAIS</button>
      </div>
    </div>
  )
}

export default Blog;