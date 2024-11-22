/* eslint-disable react/prop-types */
import { useState } from "react";
import "./PesquisaOverlay.scss"; // Arquivo CSS para estilização
import { Link } from "react-router-dom";

const PesquisaOverlay = ({ articles, fecharPesquisa }) => {
  const [pesquisa, setPesquisa] = useState("");
  const [resultados, setResultados] = useState([]);

  const handleSearch = (e) => {
    const termo = e.target.value.toLowerCase();
    setPesquisa(termo);
    const filtrados = articles.filter((artigo) =>
      artigo.title.toLowerCase().includes(termo)
    );
    setResultados(filtrados);
  };

  return (
    <div className="overlay-pesquisa">
      <div className="conteudo-pesquisa">
        <button className="botao-fechar" onClick={fecharPesquisa}>
          ✖
        </button>
        <h2>Pesquisar Artigos</h2>
        <input
          type="text"
          placeholder="Digite para pesquisar..."
          value={pesquisa}
          onChange={handleSearch}
        />
        <div className="resultados">
          {resultados.length > 0 ? (
            resultados.map((artigo) => (
              <div key={artigo.id} className="resultado-item">
                <Link className="ref-artigo" to={artigo.page} onClick={fecharPesquisa}>
                  <h3 className="ref-titulo">{artigo.title}</h3>
                  <span>{artigo.desc}</span>
                </Link>
              </div>
            ))
          ) : (
            pesquisa && <p>Nenhum resultado encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
};


export default PesquisaOverlay;
