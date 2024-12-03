import blogContent from "../../artigos/json/10dicasParaSairDaPobreza/10dicas.json";
import PageLayout from "../../components/PageLayout";

function SairDaProbreza() {
  return (
    <>
      <PageLayout
        title="10 Estratégias para Sair da Pobreza e Alcançar a Independência Financeira"
        description="A independência financeira é um objetivo almejado por muitas pessoas, mas que pode parecer distante para quem enfrenta desafios econômicos diários. No entanto, a mudança começa com a mentalidade e com ações práticas. Este artigo se baseia em 10 lições diretas e poderosas que podem transformar sua relação com o dinheiro e colocar você no caminho da liberdade financeira."
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


export default SairDaProbreza;