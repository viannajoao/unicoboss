import { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.scss";
import News from "../News";
import articles from "../../artigos/json/sugestoes/sugestoes.js";
import { Aside } from "../AdSense/index.jsx";

function Blog() {
  const [visibleArticles, setVisibleArticles] = useState(10); // Número de artigos visíveis
  const [filteredCategory, setFilteredCategory] = useState("Mais Recentes"); // Categoria ativa

  // Lista de categorias únicas
  const categories = [
    "Mais Recentes",
    ...new Set(articles.map((article) => article.category)),
  ];

  // Filtra os artigos por categoria ou exibe os mais recentes
  const filteredArticles =
    filteredCategory === "Mais Recentes"
      ? [...articles].sort((a, b) => new Date(b.date) - new Date(a.date))
      : articles.filter((article) => article.category === filteredCategory);

  // Função para carregar mais artigos
  const loadMoreArticles = () => {
    setVisibleArticles((prevVisible) => prevVisible + 10);
  };

  return (
    <div className="container-blog">
      <header className="principal-view">
        <h1>Blog</h1>
      </header>

      <div className="content">
        <aside className="categories-sidebar">
          <h3>Categorias</h3>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={`category-button ${filteredCategory === category ? "active" : ""
                    }`}
                  onClick={() => {
                    setFilteredCategory(category);
                    setVisibleArticles(10); // Reseta a quantidade de artigos visíveis
                  }}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="articles">
          <div className="news-articles">
            {filteredArticles.slice(0, visibleArticles).map((item, index) => (
              <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="links-articles" key={index} to={item.page}>
                <News
                  title={item.title}
                  date={item.date}
                  photo={item.photo}
                  description={item.desc}
                />
              </Link>
            ))}
          </div>

          {visibleArticles < filteredArticles.length && (
            <div className="pagination">
              <button onClick={loadMoreArticles}>CARREGAR MAIS</button>
            </div>
          )}
        </main>
        <Aside side="right" className="ads-google">
        </Aside>
      </div>
    </div>
  );
}

export default Blog;
