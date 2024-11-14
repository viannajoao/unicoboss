import { Link } from "react-router-dom";
import "./Blog.scss";
import NavBar from "../NavBar";
import News from "../News";
import articles from "../../artigos/json/sugestoes/sugestoes.js"

function Blog() {



  return (
    <div className="container-blog">
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