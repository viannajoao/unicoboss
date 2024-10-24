import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PrincipalScreen from './components/PrincipalScreen'
import Rodape from './components/Rodape'
import Panetones from './components/RendaExtra/Panetones'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrincipalScreen />} />
        <Route path='/ganharDinheiroEmNovembro' element={<Panetones />} />

      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default App
