/* eslint-disable react/jsx-key */
import './App.css'
import Header from './components/header/header'
import Experience from './components/experience/experience'
import ProjectComponent from './components/projectComponent/projectComponent'
import proyectoIMG from "./assets/513shots_so.png"


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
            <ProjectComponent 
              title="Hola mundo" 
              img={proyectoIMG} 
              technologies=
            {
              [
                <span className='project-technologies'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
                    <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
                    <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                    <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/>
                    <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/>
                  </svg>
                  HTML5
                </span>,
                <span className='project-technologies'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="#264de4" d="M71.357 460.819 30.272 0h451.456l-41.129 460.746L255.724 512z"/><path fill="#2965f1" d="m405.388 431.408 35.148-393.73H256v435.146z"/><path fill="#ebebeb" d="m124.46 208.59 5.065 56.517H256V208.59zm-5.041-57.875H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"/><path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"/></svg>
                  CSS3
                </span>
              ]
            }
              description="Este es un proyecto de prueba Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quasi enim? Dolorem ullam et architecto qui, explicabo sapiente debitis ratione, ipsa placeat fuga inventore exercitationem nisi, quibusdam beatae error assumenda."
              enlace="#"
            ></ProjectComponent>
            <ProjectComponent 
              title="Hola mundo" 
              img={proyectoIMG} 
              technologies=
            {
              [
                <span className='project-technologies'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
                    <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
                    <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                    <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/>
                    <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/>
                  </svg>
                  HTML5
                </span>,
                <span className='project-technologies'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="#264de4" d="M71.357 460.819 30.272 0h451.456l-41.129 460.746L255.724 512z"/><path fill="#2965f1" d="m405.388 431.408 35.148-393.73H256v435.146z"/><path fill="#ebebeb" d="m124.46 208.59 5.065 56.517H256V208.59zm-5.041-57.875H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"/><path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"/></svg>
                  CSS3
                </span>
              ]
            }
              description="Este es un proyecto de prueba Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quasi enim? Dolorem ullam et architecto qui, explicabo sapiente debitis ratione, ipsa placeat fuga inventore exercitationem nisi, quibusdam beatae error assumenda."
              enlace="#"
            ></ProjectComponent>
            {/* <ProjectComponent></ProjectComponent>
            <ProjectComponent></ProjectComponent>
            <ProjectComponent></ProjectComponent> */}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
