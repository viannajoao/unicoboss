import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://unicoboss.com.br', // Substitua pelo domínio do seu site
      routes: [
        '/',                // Página inicial
        '/Blog',            // Exemplo de página Blog
        '/Blog/Investimentos', // Exemplo de um artigo específico
        '/Blog/Criptomoeda',
        'Blog/RendaExtra' // Outro exemplo de artigo
        // Adicione mais rotas aqui
      ],
    })
  ],
})
