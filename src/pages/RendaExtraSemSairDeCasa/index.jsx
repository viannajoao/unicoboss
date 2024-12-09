import PageLayout from '../../components/PageLayout';
import blogContent from "../../artigos/json/RendaExtraSemSairDeCasa/RendaExtraSemSairDeCasa.json";

const RendaExtraSemSairDeCasa = () => {
  return (
    <>
      <PageLayout
        title="Renda Extra Sem Sair de Casa"
        description="A ideia de ganhar renda extra sem sair de casa é cada vez mais atrativa para os brasileiros."
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

export default RendaExtraSemSairDeCasa;