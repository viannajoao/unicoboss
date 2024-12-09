import PageLayout from '../../components/PageLayout';
import blogContent from "../../artigos/json/FundosImobiliarios/fundosImobiliarios.json";

const FundosImobiliarios = () => {
  return (
    <>
      <PageLayout
        title="Como Criar um Planejamento Financeiro Pessoal e Organizar Suas Finanças em 2025"
        description="O planejamento financeiro pessoal é uma ferramenta essencial para quem deseja alcançar estabilidade."
      >
        <div>
          {blogContent.content.map((item, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: item.html }} />
          ))}
        </div>
      </PageLayout>
    </>
  );
};

export default FundosImobiliarios;