import "./nav.css"

function Nav() {
  return(
    <nav>
      <ul>
        <a href="#"><li>Sobre mi</li></a>
        <a href="#"><li>Experiencia</li></a>
        <a href="#"><li>Proyectos</li></a>
        <li className="CV">DESCARGAR CV</li>
      </ul>
    </nav>
  )
}
export default Nav;