import PageLayout from '../../components/PageLayout';
import blogContent from "../../artigos/json/MindsetEnriquecer/mindsetEnriquecer.json";

const MindsetEnriquecer = () => {
  return (
    <>

      <PageLayout
        title="Como Mudar Sua Mentalidade e Atingir Seus Objetivos Financeiros"
        description="Vamos explorar o conceito de mindset financeiro, como ele pode impactar suas finanças e quais passos você pode tomar para reprogramar sua mente."
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

export default MindsetEnriquecer;
