/* eslint-disable react/prop-types */
import "./News.scss";

function News({ title, date, photo, description }) {
  return (
    <div className="card-news">
      <div className="photo-frame">
        <img src={photo} alt="" />
      </div>
      <div>
        <span className="data-criacao">{date}</span>
        <h3 className="titulo">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default News;