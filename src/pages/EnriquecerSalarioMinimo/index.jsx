import blogContent from "../../artigos/json/EnriquecerSalarioMinimo/enriquecerSalarioMinimo.json";
import PageLayout from "../../components/PageLayout";

function EnriquecerSalarioMinimo() {
  return (
    <>
      <PageLayout
        title="Como Construir Riqueza com Salário Mínimo"
        description="Este artigo vai mostrar que, mesmo com recursos limitados, você pode trilhar um caminho para melhorar sua vida financeira e alcançar seus objetivos."
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


export default EnriquecerSalarioMinimo;