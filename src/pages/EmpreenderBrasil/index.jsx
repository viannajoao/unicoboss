import PageLayout from '../../components/PageLayout';
import blogContent from "../../artigos/json/EmpreenderNoBrasil/empreenderNoBrasil.json";

const EmpreenderNoBrasil = () => {
  return (
    <>
      <PageLayout
        title="Empreender no Brasil"
        description="O empreendedorismo no Brasil tem se tornado uma alternativa cada vez mais procurada por pessoas que desejam independência financeira."
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

export default EmpreenderNoBrasil;