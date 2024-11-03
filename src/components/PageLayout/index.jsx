import { Helmet } from 'react-helmet'; 
import './PageLayout.scss';

// eslint-disable-next-line react/prop-types
const PageLayout = ({ title, description, children }) => {
  return (
    <div className="page-layout">
      {/* SEO com React Helmet */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* Layout da página */}
      <div className='ad-banner'></div>
      <div className="container">
     
        
        {/* Conteúdo principal do blog */}
        <main className="main-content">
          {children} {/* O conteúdo personalizado de cada página será injetado aqui */}
        </main>

        {/* Sidebar para anúncios (Google AdSense) */}
        <aside className="sidebar">
          <div className="ad-space">
            {/* Espaço reservado para o AdSense */}
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            ></script>
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-XXXXXXXXXX" // Substitua pelo seu ID do Google AdSense
              data-ad-slot="XXXXXXX"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PageLayout;
