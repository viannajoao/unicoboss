
import React from 'react';
import PageLayout from '../../components/PageLayout';
import jsonContent from '../../artigos/json/CartaoCredito/cartaoCredito.json';

const cartaoCredito = () => {
    const renderContent = (item, index) => {
       switch (item.type) {
            case 'h1':
                return <h1 key={index} dangerouslySetInnerHTML={{__html: item.text}}/>;
            case 'h2':
                return <h2 key={index} dangerouslySetInnerHTML={{__html: item.text}}/>;
             case 'h3':
                 return <h3 key={index} dangerouslySetInnerHTML={{__html: item.text}}/>;
             case 'p':
                return <p key={index} className='page-text' dangerouslySetInnerHTML={{__html: item.text}}/>;
             case 'ul':
                  return <ul key={index}>{item.items.map((li, liIndex) => <li key={liIndex} dangerouslySetInnerHTML={{ __html: li }} />)}</ul>;
           case 'img':
                 return <figure key={index}>
                     <img src={item.src} alt={item.alt} id='img-default' />
                     {item.caption && <figcaption>{item.caption}</figcaption>}
                </figure>;
             case 'code':
                return <pre key={index}><code>{item.text}</code></pre>;
            case 'video':
                 return <div key={index} className='layout-video-container'><iframe src={item.src} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe></div>;
           default:
               return null;
       }
    };
    return (
        <PageLayout title={jsonContent.title} description={jsonContent.description} imageBanner={jsonContent.imageBanner} videoYoutube={jsonContent.videoYoutube}>
         <div className="article-container">
                {jsonContent.content.map((item, index) => renderContent(item, index))}
           </div>
        </PageLayout>
    );
};
export default cartaoCredito;
// JSON Hash: 9a96baef85d87bf5d22edd9fd0663c41
        