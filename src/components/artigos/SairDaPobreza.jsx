
import PageLayout from '../../components/PageLayout';
import jsonContent from '../../artigos/json/10dicasParaSairDaPobreza/SairDaPobreza.json';
const SairDaPobreza = () => {
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
           default:
               return null;
       }
    };

    return (
        <PageLayout title={jsonContent.title} description={jsonContent.description}>
           <div className="article-container">
               {jsonContent.content.map((item, index) => renderContent(item, index))}
           </div>
        </PageLayout>
    );
};

export default SairDaPobreza;
        