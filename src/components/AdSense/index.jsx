/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./AdSense.scss";

// Componente genérico para AdSense
const AdSenseAd = ({ adClient, adSlot, style }) => {
  useEffect(() => {
    // Adiciona script do Google AdSense dinamicamente (apenas uma vez)
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.dataset.adClient = adClient;
    document.head.appendChild(script);

    // Força o AdSense a recarregar anúncios
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error: ", e);
    }

    return () => {
      // Remover script do AdSense se necessário (não obrigatório)
      document.head.removeChild(script);
    };
  }, [adClient]); // Executa apenas quando o adClient mudar

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

// Estilos pré-definidos
const asideAdStyle = { display: "block", width: "300px", height: "600px" };
const bannerAdStyle = { display: "block", textAlign: "center" };

// Componente para Aside Ad
const Aside = ({side}) => (
  <aside className={`sidebar sidebar-${side}`}>
    <div className="ad-space">
      <AdSenseAd
        adClient="ca-pub-7197788984433583"
        adSlot="8571427102"
        style={asideAdStyle}
      />
    </div>
  </aside>
);

// Componente para Banner Ad
const Banner = () => (
  <div className="ad-banner">
    <AdSenseAd
      adClient="ca-pub-7197788984433583"
      adSlot="8571427102"
      style={bannerAdStyle}
    />
  </div>
);

export { Aside, Banner };
