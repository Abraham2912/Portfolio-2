import "./social.css"

// eslint-disable-next-line react/prop-types
function Social({icono, texto, enlace}) {
  return(
    <>
      <div className="social-container">

        <a href={enlace} className="social">         
          {icono}
          {texto}
        </a>
        <span className="social-back"/>
      </div>
      
    </>
  )
}
export default Social;