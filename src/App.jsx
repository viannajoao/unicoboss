import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PrincipalScreen from './components/PrincipalScreen'
import Rodape from './components/Rodape'
import Panetones from './pages/Panetones'
import Blog from './components/Blog'
import RendaExtra from './pages/RendaExtra'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrincipalScreen />} />
        <Route path='/Blog' element={ <Blog />} />
        <Route path='/Blog/ganharDinheiroEmNovembro' element={<Panetones />} />
        <Route path='/Blog/RendaExtra' element={ <RendaExtra />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default App
