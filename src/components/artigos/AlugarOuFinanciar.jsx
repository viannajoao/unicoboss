import PageLayout from '../../components/PageLayout';
import jsonContent from '../../artigos/json/AlugarOuFinanciar/AlugarOuFinanciar.json';

const AlugarOuFinanciar = () => {
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
             case 'ol':
                  return <ol key={index}>{item.items.map((li, liIndex) => <li key={liIndex} dangerouslySetInnerHTML={{ __html: li }} />)}</ol>;
             case 'img':
                 return <figure key={index}>
                     <img src={item.src} alt={item.alt} id='img-default' />
                     {item.caption && <figcaption>{item.caption}</figcaption>}
                </figure>;
             case 'code':
                return <pre key={index}><code>{item.text}</code></pre>;
            case 'video':
                 return <div key={index} className='layout-video-container'><iframe src={item.url} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe></div>;
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
export default AlugarOuFinanciar;
// JSON Hash: 93aed24d942460bdda87a68279a024b8
        