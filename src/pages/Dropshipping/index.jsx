import PageLayout from "../../components/PageLayout";
import blogContent from "../../artigos/json/dropshipping/dropshipping.json";


function Dropshipping(){
  return (
    <>
    <PageLayout
    title="Dropshipping em 2025: Guia Completo para Iniciantes e Empreendedores"
    description="Descubra tudo sobre dropshipping: como funciona, vantagens, riscos, quanto é possível ganhar e se ainda vale a pena investir em 2025. Comece seu negócio online agora!."
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

export default Dropshipping;