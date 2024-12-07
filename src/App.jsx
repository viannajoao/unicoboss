import { Route, Routes, useLocation } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import './App.css'
import PrincipalScreen from './components/PrincipalScreen'
import Rodape from './components/Rodape'
import Panetones from './pages/Panetones'
import Blog from './components/Blog'
import RendaExtra from './pages/RendaExtra'
import NavBar from './components/NavBar'
import { useState } from 'react'
import Investimentos from './pages/Investimentos'
import Criptomoeda from './pages/Criptomoeda'
import PesquisaOverlay from './components/Search'
import articles from './artigos/json/sugestoes/sugestoes.js'
import PrivacyPolicy from './pages/PoliticaDePrivacidade/index.jsx'
import Dropshipping from './pages/Dropshipping/index.jsx'
import AboutUs from './components/AboutUs/index.jsx'
import SairDaProbreza from './pages/10Dicas/index.jsx'
import GastarInteligente from './pages/GastarInteligente/index.jsx'
import NotFound from './components/NotFound/index.jsx'


function App() {

  const location = useLocation();

  const isTransparent = location.pathname === "/";


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mostrarPesquisa, setMostrarPesquisa] = useState(false);

  const toggleSidebar = (mudarEstado) => {
    setIsSidebarOpen(mudarEstado);
  };

  return (
    <>
      <NavBar open={isSidebarOpen} mudarEstado={toggleSidebar} isTransparent={isTransparent} onSearchClick={() => setMostrarPesquisa(true)} />
      {isSidebarOpen && <div id="overlay" className="overlay-mobile" onClick={toggleSidebar}></div>}
      <Routes>
        <Route path='/' element={<PrincipalScreen />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Blog/ganharDinheiroEmNovembro' element={<Panetones />} />
        <Route path='/Blog/RendaExtra' element={<RendaExtra />} />
        <Route path='*' element={ <NotFound />} />
        <Route path='/Blog/Investimentos' element={<Investimentos />} />
        <Route path='/Blog/Criptomoeda' element={<Criptomoeda />} />
        <Route path='/Blog/Dropshipping' element={<Dropshipping />} />
        <Route path='/politica-de-privacidade' element={<PrivacyPolicy />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/Blog/ComoSairDaPobreza" element={ <SairDaProbreza />} />
        <Route path='/Blog/ComoGastarDinheiroInteligente' element={ <GastarInteligente/>} />
      </Routes>
      {mostrarPesquisa && (
        <PesquisaOverlay
          articles={articles}
          fecharPesquisa={() => setMostrarPesquisa(false)}
        />
      )}
      <Rodape />
      <Analytics />
    </>
  )
}


export default App;
