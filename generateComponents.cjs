const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function generateComponent(jsonPath, outputPath) {
    try {
        console.log(`Processando arquivo JSON: ${jsonPath}`);
        const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
        const { title, description, content, videoYoutube, imageBanner } = jsonData;
        const componentName = path.parse(path.basename(jsonPath)).name;
        const jsonHash = crypto.createHash('md5').update(fs.readFileSync(jsonPath)).digest('hex');

        // Gera o código do componente
        const componentCode = `
import React from 'react';
import PageLayout from '../../components/PageLayout';
import jsonContent from '../../artigos/json/${path.parse(path.dirname(jsonPath)).base}/${path.parse(jsonPath).base}';

const ${componentName} = () => {
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

export default ${componentName};
// JSON Hash: ${jsonHash}
        `;

        fs.writeFileSync(outputPath, componentCode, 'utf-8');
        console.log(`Componente gerado com sucesso em: ${outputPath}`);

    } catch (error) {
        console.error(`Erro ao gerar componente para ${jsonPath}:`, error);
    }
}

// Obtem a pasta src
const srcDir = path.resolve(__dirname, 'src');

// Define o caminho da pasta json
const jsonFilesDir = path.join(srcDir, 'artigos', 'json');

// Define o caminho da pasta componentes
const outputDir = path.join(srcDir, 'components', 'artigos');

// Garante que o diretório de saída exista
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Iniciando leitura dos arquivos JSON em: ${jsonFilesDir}`);

// Leitura dos arquivos da pasta json
fs.readdirSync(jsonFilesDir).forEach(folder => {
    const folderPath = path.join(jsonFilesDir, folder);
    if (fs.statSync(folderPath).isDirectory()) {
        fs.readdirSync(folderPath).forEach(file => {
            if (file.endsWith('.json')) {
                const jsonPath = path.join(folderPath, file);
                const componentName = path.parse(file).name;
                const outputComponentPath = path.join(outputDir, `${componentName}.jsx`);

                // Verifica se o arquivo json mudou
                const jsonHash = crypto.createHash('md5').update(fs.readFileSync(jsonPath)).digest('hex');
                const componentPath = outputComponentPath;

                // Verifica se o componente existe e se o hash do JSON mudou
                if (fs.existsSync(componentPath)) {
                    const existingComponentCode = fs.readFileSync(componentPath, 'utf-8');
                    const existingHashMatch = existingComponentCode.match(/\/\/ JSON Hash: (.*)/);
                    const existingHash = existingHashMatch ? existingHashMatch[1] : '';

                    if (existingHash === jsonHash) {
                        console.log(`O componente ${componentName} já está atualizado.`);
                        return; // Pula a geração do componente se não houver mudanças
                    }
                }

                generateComponent(jsonPath, outputComponentPath);
            }
        });
    }
});

console.log("Processo de geração de componentes finalizado!");