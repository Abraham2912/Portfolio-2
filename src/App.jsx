import './App.css'
import Header from './components/header/header'
import Experience from './components/experience/experience'
import ProjectComponent from './components/projectComponent/projectComponent'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <div className='experience-container'>
          <h1 id='experience'>Mi experiencia</h1>
          <ul className='experience-list'>
            <li><Experience title="Estudiante en prácticas" enterprise="E-ASY" date='marzo 2024-mayo 2024' description={["Mantenimiento y desarrollo de aplicaciones web, asegurando su correcto funcionamiento y optimización.", "Implementación de buenas prácticas en APIs desarrolladas con Express.js para mejorar la eficiencia del código así como su legibilidad.", "Colaboración en el desarrollo de una aplicación móvil utilizando Velneo, participando en el desarrollo  de nuevas funcionalidades."]}></Experience></li>
          </ul>
        </div>
        <div className='projects-container'>
          <h1 id='projects'>Mis proyectos</h1>
          <div className='projects-list'>
            <ProjectComponent></ProjectComponent>
            <ProjectComponent></ProjectComponent>
            <ProjectComponent></ProjectComponent>
            <ProjectComponent></ProjectComponent>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
