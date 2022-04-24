import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <a href="https://www.facebook.com/El-Ranchero-Chorizo-Artesanal-100457325995043">
            <img className='logoface' src='./images/face.png' alt=''/>
        </a>
        <a href="https://goo.gl/maps/RbqBXeo8yLDHjWX96">
            <img className='logoface' src='./images/ubi.png' alt=''/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5217331207567&text=%C2%A1Hola%20me%20gustar%C3%ADa%20hacer%20un%20pedido!">
        <img className='logoface' src='./images/wats.png' alt=''/>
        </a>
        
    </div>
  )
}
