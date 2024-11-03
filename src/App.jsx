import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PrincipalScreen from './components/PrincipalScreen'
import Rodape from './components/Rodape'
import Panetones from './pages/Panetones'
import Blog from './components/Blog'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrincipalScreen />} />
        <Route path='/Blog/ganharDinheiroEmNovembro' element={<Panetones />} />
        <Route path='/Blog' element={ <Blog />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default App
