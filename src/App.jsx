import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import PrincipalScreen from './components/PrincipalScreen'
import Rodape from './components/Rodape'
import Panetones from './pages/Panetones'
import Blog from './components/Blog'
import RendaExtra from './pages/RendaExtra'
import NavBar from './components/NavBar'
import { useState } from 'react'


function App() {

  const location = useLocation();

  const isTransparent = location.pathname === "/";
  console.log(isTransparent)

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
      </Routes>
      <Rodape />
    </>
  )
}


export default App;
