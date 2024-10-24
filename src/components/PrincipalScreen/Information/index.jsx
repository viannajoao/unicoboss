import "./InfoCard.scss";
import Cards from "../Cards";


function Information() {

  let criptomoeda = [
    {
      titulo: "Criptomoeda"
    },
    {
      dica: "A criptomoeda é um tipo de moeda digital que não possui um valor fiscal e opera de maneira anônima. Os criptomoedas podem ser criadas e transferidas por meio de aplicativos móveis, websites e outros meios.",
      dica1: "O Bitcoin (BTC) é a primeira e mais conhecida criptomoeda, criada em 2009 por uma pessoa (ou grupo) sob o pseudônimo de Satoshi Nakamoto. Ele ainda é a principal referência no mercado de criptomoedas, sendo amplamente aceito e utilizado em transações digitais.",
      dica2: "Apesar de suas vantagens, as criptomoedas apresentam riscos, como hacks, fraudes e a falta de proteção ao consumidor em caso de perdas. A ausência de regulamentação em algumas áreas também pode tornar os investidores vulneráveis a golpes.",
    }
  ]

  let Investimentos = [
    {
      titulo: "Investimentos"
    },
    {
      dica: "Investimentos são ações, cotas ou valores em um mercado financeiro que você pode comprar ou vender com o intuito de ganhar dinheiro. Os investimentos podem ser feitos por pessoas físicas, empresas ou instituições financeiras.",
      dica1: "Renda fixa: Esses investimentos pagam uma taxa de retorno previsível e geralmente são considerados mais seguros. Exemplos incluem títulos do governo (como o Tesouro Direto), CDBs (Certificados de Depósito Bancário) e debêntures. ",
      dica2: "Renda variável: Inclui ativos cujo valor pode oscilar significativamente. Ações, fundos imobiliários (FIIs) e moedas são exemplos. A renda variável tende a oferecer maiores retornos, mas também tem mais riscos.",
      dica3: "Renda variável: Inclui ativos cujo valor pode oscilar significativamente. Ações, fundos imobiliários (FIIs) e moedas são exemplos. A renda variável tende a oferecer maiores retornos, mas também tem mais riscos.",
      dica4: "Para investir, você precisa ter conhecimento básico sobre os mercados financeiros, ter um saldo em sua carteira, ter um patrimônio adequado e ter disponibilidade de tempo para investir, saiba mais no botão abaixo.",
    }
  ]

  let dropshipping = [
    {
      titulo: "Dropshipping"
    },
    {
      dica: "Dropshipping é um método de venda online onde um vendedor vende produtos para um cliente diretamente. O cliente compra o produto na loja, o vendedor entrega o produto ao cliente, e o cliente paga o vendedor a taxa de entrega.",
      dica1: "Faça login na plataforma",
      dica2: "Completa login na plataforma",
    }
  ]

  return (
    <div className="info_card" id="information">
      <h2>ESCOLHA O QUE MAIS COMBINA COM SEU PERFIL</h2>
      <div className="cards">
        <Cards titulo={criptomoeda[0].titulo} dicas={criptomoeda[1]} />
        <Cards titulo={Investimentos[0].titulo} dicas={Investimentos[1]} />
        <Cards titulo={dropshipping[0].titulo} dicas={dropshipping[1]} />
      </div>
    </div>
    
  )
}

export default Information;