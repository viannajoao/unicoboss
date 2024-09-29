/* eslint-disable react/prop-types */
import "./Cards.scss";

function Cards({titulo, dicas}){

  const LiDicas = Object.values(dicas)
  
  return (
    <section>
      <h2>{titulo}</h2>
      <ul>
        {LiDicas.map((dica, index) => (
          <li key={index}>{dica}</li>
        ))}
      </ul>
      <div className="cards__btn">
        <button type="button">Ver mais</button>
      </div>
    </section>
  )
}

export default Cards;