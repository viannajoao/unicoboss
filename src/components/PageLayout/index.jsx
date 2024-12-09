import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import News from "../News";
import "./PageLayout.scss";
import articles from "../../artigos/json/sugestoes/sugestoes.js";
import { Aside } from "../AdSense/index.jsx";

// eslint-disable-next-line react/prop-types
const PageLayout = ({ title, description, children }) => {
  const [visibleArticles, setVisibleArticles] = useState(4);

  const loadMoreArticles = () => {
    setVisibleArticles((prevVisible) => prevVisible + 4);
  };

  return (
    <div className="page-layout">
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>

        {/* Layout da página */}
        <div className="ad-banner"></div>
        <div className="container">
          <Aside side="left" />
          <main className="main-content">{children}</main>
          <Aside side="right" />
        </div>

        {/* Artigos sugeridos */}
        <div className="reference-articles">
          <div>
            <h4>Conheça nossos demais artigos</h4>
          </div>
          <div className="other-articles">
            {articles.slice(0, visibleArticles).map((item, index) => (
              <Link  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="links-articles" key={index} to={item.page}>
                <News
                  title={item.title}
                  date={item.date}
                  photo={item.photo}
                  description={item.desc}
                />
              </Link>
            ))}
          </div>

          {/* Botão "Carregar mais" */}
          {visibleArticles < articles.length && (
            <div className="pagination">
              <button onClick={loadMoreArticles}>Carregar Mais</button>
            </div>
          )}
        </div>
      </HelmetProvider>
    </div>
  );
};

export default PageLayout;
