import PageLayout from '../../components/PageLayout';
import blogContent from "../../artigos/json/CartaoCredito/cartaoCredito.json";

const CartaoCredito = () => {
  return (
    <>
      <PageLayout
        title="Cartão de Crédito: Como Usar com Sabedoria para Ganhar Benefícios e Evitar Juros Altos"
        description="O cartão de crédito é uma ferramenta poderosa no dia a dia financeiro, especialmente no Brasil, onde ele pode facilitar compras, oferecer benefícios e até ajudar a organizar as finanças."
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

export default CartaoCredito;