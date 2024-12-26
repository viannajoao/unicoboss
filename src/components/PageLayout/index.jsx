import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import News from '../News';
import './PageLayout.scss';
import articles from '../../artigos/json/sugestoes/sugestoes.js';
import { Aside } from '../AdSense';
import PropTypes from 'prop-types';

const PageLayout = ({ children, title, description, imageBanner, videoYoutube }) => {
    const [visibleArticles, setVisibleArticles] = useState(4);

    const loadMoreArticles = () => {
        setVisibleArticles((prevVisible) => prevVisible + 4);
    };

    return (
        <div className="page-layout">
            <HelmetProvider>
                <Helmet>
                <meta name="description" content={description} />

                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Helmet>

                {/* Layout da página */}
                <div className="ad-banner"></div>
                <div className="container">
                    <Aside side="left" />
                    <main className="main-content page-text">
                        {imageBanner && <figure className='banner-image'><img src={imageBanner.src} alt={imageBanner.alt} /></figure>}
                        {children}
                        {videoYoutube && <div className="video-responsive">
                             <iframe
                                 width="560"
                                height="315"
                              src={videoYoutube}
                                 title="YouTube video player"
                                 frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                               allowfullscreen
                          ></iframe>
                          </div>}
                    </main>
                    <Aside side="right" />
                </div>

                {/* Artigos sugeridos */}
                <div className="reference-articles">
                    <div>
                        <h4>Conheça nossos demais artigos</h4>
                    </div>
                    <div className="other-articles">
                        {articles.slice(0, visibleArticles).map((item, index) => (
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

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageBanner: PropTypes.shape({
      src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  videoYoutube: PropTypes.string,

};


export default PageLayout;