import React from 'react'
import './Menu.css'





export default function Menu(props) {
  
   const menuStyle = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    /* top: props.mostrar ? "0vw" : "-1000vw", */
    top: "-1000vw",
    transition: "0.3s"
} 
return (
    <div ref={props.reff} style={menuStyle}>
      <a href="https://www.facebook.com/El-Ranchero-Chorizo-Artesanal-100457325995043">
          <img className='faceMenu' src='./images/face2.png' alt=''/>
      </a>
        <a href="https://goo.gl/maps/RbqBXeo8yLDHjWX96">
            <img className='ubiMenu' src='./images/ubi2.png' alt=''/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5217331207567&text=%C2%A1Hola%20me%20gustar%C3%ADa%20hacer%20un%20pedido!">
        <img className='watsMenu' src='./images/wats2.png' alt=''/>
        </a>
        
    </div>
  )
}
