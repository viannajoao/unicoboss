const fs = require('fs');
const path = require('path');

function convertJson(jsonPath, outputPath) {
  try {
    console.log(`Processando arquivo JSON para conversão: ${jsonPath}`);
    const oldJson = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

    const newJson = {
      title: '', // Você pode extrair o título do HTML antigo, se possível
      description: '', // Você pode extrair a descrição do HTML antigo, se possível
      content: oldJson.content.map(item => {
            const html = item.html;
             if (html.startsWith("<h1>")){
               const text = html.replace('<h1>','').replace('</h1>','')
               return {type:"h2", text}
             }
             if (html.startsWith("<p>")){
                 const text = html.replace('<p>','').replace('</p>','')
                return {type:"p", text}
             }
            if(html.startsWith("<ul>")){
                 const listItems = html.match(/<li>(.*?)<\/li>/g).map(li => li.replace('<li>','').replace('</li>',''));
                 return {type:"ul", items:listItems}
             }

        return item;
      })
    };

    fs.writeFileSync(outputPath, JSON.stringify(newJson, null, 2), 'utf-8');
    console.log(`Arquivo JSON convertido com sucesso em: ${outputPath}`);
  } catch (error) {
    console.error(`Erro ao converter arquivo JSON ${jsonPath}:`, error);
  }
}

const srcDir = path.resolve(__dirname, 'src');
const jsonFilesDir = path.join(srcDir, 'artigos', 'json');

fs.readdirSync(jsonFilesDir).forEach(folder => {
        const folderPath = path.join(jsonFilesDir,folder);
          if (fs.statSync(folderPath).isDirectory()){
                fs.readdirSync(folderPath).forEach(file => {
                if(file.endsWith('.json')){
                const jsonPath = path.join(folderPath, file);
                const outputPath = path.join(folderPath, file);
                convertJson(jsonPath, outputPath);
                  }
        })
    }
});
console.log('Conversão concluída');