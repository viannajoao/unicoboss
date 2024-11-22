import "./PrivacyPolicy.scss"; // Estilização opcional

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Política de Privacidade</h1>

      <p>
        Bem-vindo ao nosso site! Estamos comprometidos em proteger sua
        privacidade. Esta política explica como coletamos, usamos, e protegemos
        suas informações.
      </p>

      <h2>1. Informações que coletamos</h2>
      <p>
        Podemos coletar informações pessoais que você nos fornece, como nome,
        e-mail e telefone, bem como informações não pessoais, como o endereço
        IP e o tipo de navegador.
      </p>

      <h2>2. Como usamos suas informações</h2>
      <ul>
        <li>Para fornecer os serviços solicitados por você.</li>
        <li>Para melhorar nosso site e serviços.</li>
        <li>Para enviar atualizações, promoções ou informações relevantes.</li>
      </ul>

      <h2>3. Compartilhamento de informações</h2>
      <p>
        Não compartilhamos suas informações com terceiros, exceto quando
        necessário para:
      </p>
      <ul>
        <li>Atender às exigências legais.</li>
        <li>Proteger nossos direitos e propriedades.</li>
        <li>Fornecer serviços através de parceiros confiáveis.</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        Usamos cookies para melhorar a experiência do usuário em nosso site.
        Você pode desativá-los nas configurações do seu navegador, mas isso
        pode limitar algumas funcionalidades do site.
      </p>

      <h2>5. Segurança</h2>
      <p>
        Implementamos medidas de segurança para proteger suas informações.
        Contudo, nenhuma transmissão de dados pela internet é 100% segura.
      </p>

      <h2>6. Alterações nesta política</h2>
      <p>
        Podemos atualizar esta política periodicamente. Recomendamos que você
        reveja esta página regularmente para se manter informado.
      </p>

      <h2>7. Contato</h2>
      <p>
        Se você tiver dúvidas ou preocupações sobre esta política, entre em
        contato conosco:
      </p>
      <p>
        <strong>E-mail:</strong> contato@seusite.com.br <br />
        <strong>Instagram:</strong> @unico_boss
      </p>

      <p>Última atualização: 21 de novembro de 2024</p>
    </div>
  );
};

export default PrivacyPolicy;
