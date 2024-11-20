import PageLayout from "../../components/PageLayout";
import blogContent from "../../artigos/json/criptomoeda/criptomoeda.json";


function Criptomoeda(){
  return (
    <>
    <PageLayout
    title="Investimentos: O Caminho para a Liberdade Financeira e Transformação Pessoal"
    description="Descubra como investir pode transformar sua vida, desde o crescimento financeiro até a mudança de mentalidade. Aprenda os benefícios, os riscos e como dar os primeiros passos rumo à liberdade financeira com estratégias simples e eficazes."
  >
    <div>
      {blogContent.content.map((item, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: item.html }} />
      ))}
    </div>
  </PageLayout>    
    </>
  )
}

export default Criptomoeda;