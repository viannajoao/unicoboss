/* eslint-disable react/prop-types */
import "./Cards.scss";


function Cards({ titulo, dicas, src }) {

  const LiDicas = Object.values(dicas)

  return (
    <section className="cards-banner">
      <h3>{titulo}</h3>
      <ul>
        {LiDicas.map((dica, index) => (
          <li key={index}>{dica}</li>
        ))}
      </ul>
      <div className="cards__btn">
        <a className="link" href={src}>
          <button src={src} type="submit">Ver mais</button>
        </a>
      </div>


    </section>
  )
}

export default Cards;