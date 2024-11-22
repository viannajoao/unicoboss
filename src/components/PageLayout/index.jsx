import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import News from '../News';
import './PageLayout.scss';
import articles from "../../artigos/json/sugestoes/sugestoes.js"
import { Aside } from "../AdSense/index.jsx"

// eslint-disable-next-line react/prop-types
const PageLayout = ({ title, description, children }) => {


  return (
    <div className="page-layout">
      <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* Layout da página */}
      <div className='ad-banner'></div>
      <div className="container">
        <Aside  side="left"/>
        <main className="main-content">
          {children} 
        </main>
        <Aside side="right"/>
      </div>

      <div className="reference-articles">
        <div>
          <h4>Conheça nossos demais artigos</h4>
        </div>
        <div className='other-articles'>
          {articles.map((item, index) => (
            <Link className="links-articles" key={index} to={item.page}>
              <News title={item.title} date={item.date} photo={item.photo} description={item.desc}>

              </News>


            </Link>
          ))}
        </div>

      </div>
      </HelmetProvider>
    </div>
  );
};

export default PageLayout;
