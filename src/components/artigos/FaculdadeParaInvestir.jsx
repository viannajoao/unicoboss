
import React from 'react';
import PageLayout from '../../components/PageLayout';
import jsonContent from '../../artigos/json/FaculdadeParaInvestir/FaculdadeParaInvestir.json';

const FaculdadeParaInvestir = () => {
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
            case 'table':
                 return (
                 <table key={index} className='article-table'>
                    <thead>
                       <tr>
                      {item.headers.map((header, headerIndex) => (
                          <th key={headerIndex} >{header}</th>
                       ))}
                        </tr>
                       </thead>
                        <tbody>
                       {item.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} >
                       {row.map((cell, cellIndex) => (
                               <td key={cellIndex}  >{cell}</td>
                          ))}
                            </tr>
                      ))}
                        </tbody>
                 </table>
                  );
            case 'blockquote':
                 return <blockquote key={index} dangerouslySetInnerHTML={{__html: item.text}}/>;
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

export default FaculdadeParaInvestir;
// JSON Hash: 743f03ded18dd96855003fc9edff5812
        