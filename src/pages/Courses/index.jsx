import courses from "../../courses/courses.js";
import "./Courses.scss";

function Courses(){
  return (
    <main className="container-courses">
      <h1>Cursos</h1>
      <ul className="course-list">
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <img className="img-capa" src={course.photo} alt={course.title} />
            <p>{course.description}</p>
            <a className="saiba-mais" target="_blank" href={course.url}>Saiba mais</a>
          </li>
        ))}
      </ul>

      {/* Adicione mais cursos aqui */}

      
    </main>
  )
}

export default Courses;