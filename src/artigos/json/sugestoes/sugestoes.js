let articles = [
  {
    id: 1,
    title: "Panetone",
    photo: "/images/artigos/panetones/panetone_capa.png",
    date: "20 de Outubro de 2024",
    page: "/Blog/ganharDinheiroEmNovembro",
    desc: "Entenda como algumas pessoas ganham muito dinheiro em novembro e enquanto algumas pessoas so gastam dinheiro",
    category: "Empreendimento"
  },
  {
    id: 2,
    title: "12 Renda Extra",
    photo: "/images/artigos/rendaExtra/12IdeiasDeRendaExtra.png",
    date: "10 de Outubro de 2024",
    page: "/Blog/RendaExtra",
    desc: "12 ideias de como obter Renda Extra para aumentar o seu capital",
    category: "Renda Extra"
  },
  {
    id: 3,
    title: "Criptomoeda",
    photo: "/images/artigos/Criptomoeda/Criptomoeda_capa.webp",
    date: "19 de Novembro de 2024",
    page: "/Blog/Criptomoeda",
    desc: "Conheça a moeda do futuro e aprenda como investir e conquistar a sua também !",
    category: "Criptomoeda"
  },
  {
    id: 4,
    title: "Investimentos",
    photo: "/images/artigos/investimentos/capa_investimentos.png",
    date: "18 de Novembro de 2024",
    page: "/Blog/Investimentos",
    desc: "Aprenda a como investir e administrar o seu dinheiro !",
    category: "Investimentos"
  },
  {
    id: 5,
    title: "10 Dicas para sair da Pobreza",
    photo: "/images/artigos/10DicasSairPobreza/10DicasFinanceira.png",
    date: "03 de Dezembro de 2024",
    page: "/Blog/ComoSairDaPobreza",
    desc: "10 dicas para sair da pobreza e conquistar a sua própria vida",
    category: "Dicas Financeira"

  },
  {
    id: 6,
    title: "Como Gastar Seu Dinheiro de Forma Inteligente",
    photo: "/images/artigos/ComoGastarDinheiroInteligente/ComoGastarDinheiroInteligente_capa.webp",
    date: "05 de Dezembro de 2024",
    page: "/Blog/ComoGastarDinheiroInteligente",
    desc: "Gastar dinheiro de forma inteligente é mais do que evitar compras desnecessárias.",
    category: "Dicas Financeira"
  },
  {
    id: 7,
    title: "Como Construir Riqueza com Salário Mínimo",
    photo: "/images/artigos/enriquecerComSalarioMinimo/enriquecerComSalarioMinimo_capa.webp",
    date: "07 de Dezembro de 2024",
    page: "/Blog/enriquecerComSalarioMinimo",
    desc: "Este artigo vai mostrar que, mesmo com recursos limitados, você pode trilhar um caminho para melhorar sua vida financeira",
    category: "Dicas Financeira"
  },
  {
    id: 8,
    title: "Renda Extra Sem Sair de Casa",
    photo: "/images/artigos/RendaExtraEmCasa/rendaEmCasa_capa.webp",
    date: "07 de Dezembro de 2024",
    page: "/Blog/rendaExtraSemSairDeCasa",
    desc: "A ideia de ganhar renda extra sem sair de casa é cada vez mais atrativa para os brasileiros.",
    category: "Renda Extra"
  },
  {
    id: 9,
    title: "Empreender no Brasil: Como Abrir seu Negócio e Alavancar sua Renda",
    photo: "/images/artigos/empreenderNoBrasil/empreenderNoBrasil.webp",
    date: "09 de Dezembro de 2024",
    page: "/Blog/comoEmpreenderNoBrasil",
    desc: "O empreendedorismo no Brasil tem se tornado uma alternativa cada vez mais procurada por pessoas que desejam independência financeira",
    category: "Empreendimento"
  },
  {
    id: 10,
    title: "Como Mudar Sua Mentalidade e Atingir Seus Objetivos Financeiros",
    photo: "/images/artigos/mindsetParaGanharDinheiro/mindsetParaGanharDinheiro.webp",
    date: "05 de Dezembro de 2024",
    page: "/Blog/mindsetParaEnriquecer",
    desc: "Vamos explorar o conceito de mindset financeiro, como ele pode impactar suas finanças e quais passos você pode tomar para reprogramar sua mente.",
    category: "Empreendimento"
  },
  {
    id: 11,
    title: "Como Criar um Planejamento Financeiro Pessoal e Organizar Suas Finanças em 2025",
    photo: "/images/artigos/planejamentoFinanceiro/planejamentoFinanceiro.webp",
    date: "03 de Dezembro de 2024",
    page: "/Blog/planejamentoFinanceiro2025",
    desc: "O planejamento financeiro pessoal é uma ferramenta essencial para quem deseja alcançar estabilidade.",
    category: "Dicas Financeira"
  },
  {
    id: 12,
    title: "Fundos Imobiliários para Gerar Renda Passiva",
    photo: "/images/artigos/fundosImobiliario/fundosImobiliarios_capa.webp",
    date: "19 de Novembro de 2024",
    page: "/Blog/fundosImobiliariosParaGerarRendaPassiva",
    desc: "Gerar renda passiva é o sonho de muitos brasileiros que buscam liberdade financeira e uma vida mais tranquila.",
    category: "Investimentos"
  },
  {
    id: 13,
    title: "Cartão de Crédito: Como Usar com Sabedoria para Ganhar Benefícios e Evitar Juros Altos",
    photo: "/images/artigos/cartaoDeCredito/cartaoDeCredito_capa.webp",
    date: "08 de Dezembro de 2024",
    page: "/Blog/cartaoCreditoComoUsar",
    desc: "O cartão de crédito é uma ferramenta poderosa no dia a dia financeiro, especialmente no Brasil, onde ele pode facilitar compras, oferecer benefícios e até ajudar a organizar as finanças.",
    category: "Dicas Financeira"
  },
  {
    id: 14,
    title: "Como Criar um Fundo de Emergência Ganhando Salário Mínimo",
    photo: "/images/artigos/fundoEmergencia/fundoEmergencia_capa.jpg",
    date: "12 de Dezembro de 2024",
    page: "/Blog/fundoDeEmergencia",
    desc: "Descubra como construir um fundo de emergência mesmo com recursos limitados. Aprenda passos práticos, dicas para economizar e estratégias para alcançar segurança financeira.",
    category: "Dicas Financeira"
  },
  {
    id: 15,
    title: "Poupança x Investimentos: Qual a Melhor Opção para Seu Dinheiro em 2024?",
    photo: "/images/artigos/poupancaXInvestimentos/poupancaXInvestimento.webp",
    date: "11 de Dezembro de 2024",
    page: "/Blog/poupancaOuInvestimentos",
    desc: "Em um cenário econômico em constante transformação, a pergunta sobre onde alocar seu dinheiro se torna mais crucial do que nunca. Vamos explorar as nuances de cada alternativa para te ajudar a tomar a melhor decisão para o seu futuro financeiro.",
    category: "Investimentos"
  },
  {
    id: 16,
    title: "Como Economizar no Mercado: Estratégias para Reduzir a Conta Sem Passar Fome",
    photo: "/images/artigos/economizarMercado/economizarMercado_capa.webp",
    date: "11 de Dezembro de 2024",
    page: "/Blog/economizarNoMercadoSemPassarFome",
    desc: "Descubra estratégias práticas para economizar no mercado, reduzir seus gastos e manter uma alimentação de qualidade. Transforme pequenas economias em grandes resultados financeiros.",
    category: "Dicas Financeira"
  },
  {
    id: 17,
    title: "Empreender com Pouco Dinheiro: Ideias de Negócios para Começar com Menos de R$ 500,00",
    photo: "/images/artigos/empreenderPoucoDinheiro/empreenderPoucoDinheiro.webp",
    date: "06 de Dezembro de 2024",
    page: "/Blog/empreenderComPoucoDinheiro",
    desc: "Descubra ideias de negócios para começar com menos de R$ 500,00 no Brasil. Aprenda estratégias práticas para empreender com um orçamento limitado e alcançar o sucesso.",
    category: "Empreendimento"
  },
  {
    id: 18,
    title: "Transforme seus Talentos em Dinheiro: Como Lucrar com Habilidades Simples",
    photo: "/images/artigos/talentosEmDinheiro/talentosEmDinheiro_capa.webp",
    date: "04 de Dezembro de 2024",
    page: "/Blog/TalentosParaGerarRendaExtra",
    desc: "Descubra como transformar seus talentos e habilidades em uma fonte de renda. Aprenda a identificar oportunidades, calcular preços e divulgar seu trabalho para alcançar a liberdade financeira.",
    category: "Renda Extra"
  },
  {
    id: 19,
    title: "Investindo com Pouco Dinheiro: Como Começar a Investir com Apenas R$ 30,00",
    photo: "/images/artigos/InvestirComPoucoDinheiro/investirComPoucoDinheiro_capa.webp",
    date: "02 de Dezembro de 2024",
    page: "/Blog/investirComPoucoDinheiro",
    desc: "Aprenda a investir com pouco dinheiro no Brasil. Descubra opções acessíveis a partir de R$ 30,00, estratégias práticas e como transformar sua vida financeira.",
    category: "Investimentos"
  },
  {
    id: 20,
    title: "Dropshipping: O Guia Completo para Iniciantes e Empreendedores em 2025",
    photo: "/images/artigos/dropshipping/dropshipping_capa.png",
    date: "28 de Outubro de 2024",
    page: "/Blog/dropshipping",
    desc: "Descubra o que é dropshipping, suas vantagens, riscos e como iniciar um negócio online lucrativo em 2025.",
    category: "Dropshipping"
  },
  {
    id: 21,
    title: "Administração Financeira para Microempreendedores: Como Gerenciar o Dinheiro do Seu Negócio",
    photo: "/images/artigos/administracaoParaMicroempreendedores/administracaoParaMicroempreendedores.png",
    date: "28 de Outubro de 2024",
    page: "/Blog/administracaoParaMicroempreendedores",
    desc: "Aprenda a gerenciar as finanças do seu pequeno negócio com este guia completo de administração financeira para microempreendedores. Organize suas contas, evite erros comuns e impulsione o sucesso da sua empresa.",
    category: "Dropshipping"
  },
  {
    id: 22,
    title: "Os Melhores Investimentos para Quem Ganha Até R$ 2.000,00 por Mês",
    photo: "/images/artigos/InvestirParaGanhar2000/investirParaGanhar2000_capa2.png",
    date: "29 de Outubro de 2024",
    page: "/Blog/investirParaGanhar2000",
    desc: "Descubra como investir com pouco dinheiro e construir um futuro financeiro mais sólido. Explore as melhores opções de investimento para quem ganha até R$ 2.000,00 por mês.",
    category: "Investimentos"
  },
  {
    id: 23,
    title: "Mindset Financeiro para Baixa Renda: Como Evitar Dívidas e Focar no Futuro",
    photo: "/images/artigos/MindsetBaixaRenda/mindsetBaixaRenda.png",
    date: "29 de Outubro de 2024",
    page: "/Blog/mindsetParaBaixaRenda",
    desc: "Administrar o dinheiro com baixa renda pode ser desafiador, mas com o mindset correto, é possível evitar dívidas e construir um futuro financeiro estável. Aprenda como.",
    category: "Investimentos"
  },
  {
    id: 24,
    title: "Alugar ou Financiar sua casa própria?",
    photo: "/images/artigos/alugarOuFinanciar/alugarOuFinanciar_capa.webp",
    date: "19 de Dezembro de 2024",
    page: "/Blog/alugarOuFinanciarSuaCasaPrópria",
    desc: "A decisão entre alugar ou financiar um imóvel é crucial. Analisamos os prós e contras de cada opção no contexto econômico atual para ajudar você a decidir.",
    category: "Imoveis"
  },
  {
    id: 25,
    title: "Precisa de Faculdade para Saber Investir e Ganhar Dinheiro com Dividendos? Um Guia Completo",
    photo: "/images/artigos/",
    date: "19 de Dezembro de 2024",
    page: "/Blog/precisa-de-faculdade-para-investir",
    desc: "Este guia explora se é necessário ter formação acadêmica para investir com sucesso em dividendos, oferecendo insights para investidores com ou sem diploma.",
    category: "Investimento"
  },
  {
    id: 26,
    title: "Quais os melhores gastos para me trazer renda?",
    photo: "/images/artigos/",
    date: "19 de Dezembro de 2024",
    page: "/Blog/melhores-gastos-para-obter-renda",
    desc: "Descubra como transformar seus gastos em investimentos inteligentes que geram renda. Explore diversas estratégias e opções no contexto brasileiro.",
    category: "Investimentos"
  }
]


export default articles;