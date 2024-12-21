import courses from "../../courses/courses.js";
import "./Courses.scss";

function Courses(){
  return (
    <div className="container-courses">
      <h2>Cursos</h2>
      <ul className="course-list">
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <a className="saiba-mais" target="_blank" href={course.url}>Saiba mais</a>
          </li>
        ))}
      </ul>

      {/* Adicione mais cursos aqui */}

      
    </div>
  )
}

export default Courses;