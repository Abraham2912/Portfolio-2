/* eslint-disable react/prop-types */
import './experience.css';

function Experience({ title, enterprise, date, description }) {
  console.log
  return(
    <>
      <div className='experience-content'>
        <h2 className='experience-title'>{title}</h2>
        <em className='experience-enterprise'>{enterprise}</em>
         <p className='experience-date'><b>{date}</b></p>
        <ul className='experience-description'>
          {description.map((item, index) => <li key={index}>{item}</li>)}
          {/* <li>
            Mantenimiento y desarrollo de aplicaciones web, asegurando su correcto funcionamiento y 
            optimización. 
          </li>
          <li>
            Implementación de buenas prácticas en <strong>API</strong>s desarrolladas con <strong>Express.js</strong> para mejorar la eficiencia del 
            código así como su legibilidad.
          </li>
          <li>
            Colaboración en el desarrollo de una aplicación móvil utilizando Velneo, participando en el desarrollo 
            de nuevas funcionalidades. 
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default Experience;