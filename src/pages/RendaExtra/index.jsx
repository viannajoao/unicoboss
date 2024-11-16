import PageLayout from '../../components/PageLayout';
import blogContent from "../../artigos/json/12RendaExtra/rendaExtra.json";

const RendaExtra = () => {
  return (
    <>
      <PageLayout
        title="12 IDEIAS DE RENDA EXTRA"
        description="Descubra 12 ideias de renda extra super acessivel para você começar hoje."
      >
        <div>
          {blogContent.content.map((item, index) => (
            // React interpresta as tags dentro da função "dangerouslySetInnerHTML"
            <div key={index} dangerouslySetInnerHTML={{ __html: item.html }} />
          ))}
        </div>
      </PageLayout>
    </>
  );
};

export default RendaExtra;