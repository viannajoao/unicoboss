import NavBar from '../../components/NavBar';
import PageLayout from '../../components/PageLayout';
import "./Panetones.scss";
import blogContent from "../../artigos/json/panetones/panetones.json";

const Panetones = () => {
  return (
    <>
      <NavBar />
      <PageLayout
        title="COMO GANHAR DINHEIRO EM NOVEMBRO DE 2024"
        description="Aqui você ira encontrar formas lucrativas para ganhar dinheiro nesse mês de Novembro de 2024 !!"
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

export default Panetones;
