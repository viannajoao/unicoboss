import "./AdSense.scss";

const Aside = () => {
  return(
    <aside className="sidebar">
    <div className="ad-space">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7197788984433583"
      crossOrigin="anonymous"></script>
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-7197788984433583"
      data-ad-slot="8571427102"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
    <script>
      {`(adsbygoogle = window.adsbygoogle || []).push({ })`};
    </script>
    </div>
   
  </aside>
  )
}

const Banner = () => {
  return (
    <div className='ad-banner'>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7197788984433583"
      crossOrigin="anonymous"></script>
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-7197788984433583"
      data-ad-slot="8571427102"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
    <script>
      {`(adsbygoogle = window.adsbygoogle || []).push({ })`};
    </script>  
    </div>
  )
}

export {Aside, Banner};