import { Route, Routes, useLocation } from 'react-router-dom'
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


function App() {

  const location = useLocation();

  const isTransparent = location.pathname === "/";
  

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (mudarEstado) => {
    setIsSidebarOpen(mudarEstado);
  };

  return (
    <>
      <NavBar open={isSidebarOpen} mudarEstado={toggleSidebar} isTransparent={isTransparent}/>
      {isSidebarOpen && <div id="overlay" className="overlay-mobile" onClick={toggleSidebar}></div>}
      <Routes>
        <Route path='/' element={<PrincipalScreen />} />
        <Route path='/Blog' element={ <Blog />} />
        <Route path='/Blog/ganharDinheiroEmNovembro' element={<Panetones />} />
        <Route path='/Blog/RendaExtra' element={ <RendaExtra />} />
        <Route path='*' element={() => <h1>Página não encontrada</h1>} />
        <Route path='/Blog/Investimentos' element={ <Investimentos />}/>
        <Route path='/Blog/Criptomoeda' element={ <Criptomoeda />} />
      </Routes>
      <Rodape />
    </>
  )
}


export default App;
