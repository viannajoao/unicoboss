import { Route, Routes, useLocation } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import './App.css'
import PrincipalScreen from './components/PrincipalScreen'
import Rodape from './components/Rodape'
import Panetones from './components/artigos/panetones.jsx'
import Blog from './components/Blog'
import RendaExtra from './components/artigos/rendaExtra.jsx'
import NavBar from './components/NavBar'
import { useState } from 'react'
import Investimentos from './components/artigos/investimento.jsx'
import Criptomoeda from './components/artigos/criptomoeda.jsx'
import PesquisaOverlay from './components/Search'
import articles from './artigos/json/sugestoes/sugestoes.js'
import PrivacyPolicy from './pages/PoliticaDePrivacidade/index.jsx'
import Dropshipping from './components/artigos/dropshipping.jsx'
import AboutUs from './pages/AboutUs/index.jsx'
import SairDaProbreza from './components/artigos/SairDaPobreza.jsx'
import GastarInteligente from './components/artigos/gastarInteligente.jsx'
import NotFound from './components/NotFound/index.jsx'
import EnriquecerSalarioMinimo from './components/artigos/enriquecerSalarioMinimo.jsx'
import RendaExtraSemSairDeCasa from './components/artigos/RendaExtraSemSairDeCasa.jsx'
import EmpreenderNoBrasil from './components/artigos/empreenderNoBrasil.jsx'
import MindsetEnriquecer from './components/artigos/mindsetEnriquecer.jsx'
import PlanejamentoFinanceiro from './components/artigos/planejamentoFinanceiro.jsx'
import FundosImobiliarios from './components/artigos/fundosImobiliarios.jsx'
import CartaoCredito from './components/artigos/cartaoCredito.jsx'
import FundoEmergencia from "./components/artigos/FundoEmergencia.jsx"
import PoupancaXInvestimento from "./components/artigos/poupancaXInvestimentos.jsx"
import EconomizarMercado from "./components/artigos/EconomizarMercado.jsx"

//novos artigos para conferir se foi criado os components React
import EmpreenderPoucoDinheiro from "./components/artigos/EmpreenderPoucoDinheiro.jsx"
import TalentosEmDinheiro from "./components/artigos/TalentosEmDinheiro.jsx"
import InvestirPoucoDinheiro from "./components/artigos/InvestirPoucoDinheiro.jsx"
import AdmMicroempreendedor from "./components/artigos/AdmMicroempreendedor.jsx"
import InvestirParaGanhar2000 from "./components/artigos/InvestirParaGanhar2000.jsx"
import MindsetBaixaRenda from "./components/artigos/MindsetBaixaRenda.jsx"


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
        <Route path="/Blog/enriquecerComSalarioMinimo" element={ <EnriquecerSalarioMinimo />} />
        <Route path="/Blog/rendaExtraSemSairDeCasa" element={ <RendaExtraSemSairDeCasa />} />
        <Route path="/Blog/comoEmpreenderNoBrasil" element={ <EmpreenderNoBrasil />} />
        <Route path='/Blog/mindsetParaEnriquecer' element={ <MindsetEnriquecer />} />
        <Route path='/Blog/planejamentoFinanceiro2025' element={ <PlanejamentoFinanceiro />}/>
        <Route path='/Blog/fundosImobiliariosParaGerarRendaPassiva' element={<FundosImobiliarios />}/>
        <Route path='/Blog/cartaoCreditoComoUsar' element={<CartaoCredito />}/>
        <Route path="/Blog/fundoDeEmergencia" element={ <FundoEmergencia />}/>
        <Route path='/Blog/poupancaOuInvestimentos' element={ <PoupancaXInvestimento />}/>
        <Route path='/Blog/economizarNoMercadoSemPassarFome' element={ <EconomizarMercado />}/>
        <Route path='/Blog/empreenderComPoucoDinheiro' element={ <EmpreenderPoucoDinheiro />} />
        <Route path='/Blog/TalentosParaGerarRendaExtra' element={ <TalentosEmDinheiro />}/>
        <Route path='/Blog/investirComPoucoDinheiro' element={ <InvestirPoucoDinheiro />}/>
        <Route path='/Blog/administracaoParaMicroempreendedores' element={ <AdmMicroempreendedor />}/>
        <Route path='/Blog/investirParaGanhar2000'  element={ <InvestirParaGanhar2000 />}/>
        <Route path='/Blog/mindsetParaBaixaRenda' element={ <MindsetBaixaRenda />}/>
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
