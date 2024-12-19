
import React from 'react';
import PageLayout from '../../components/PageLayout';
import jsonContent from '../../artigos/json/criptomoeda/criptomoeda.json';

const criptomoeda = () => {
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
export default criptomoeda;
// JSON Hash: 0e82af8542590391ff0f4d407c8b821f
        