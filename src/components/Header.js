import React from 'react'
import './Header.css'
import Menu from './Menu'



export default function Header(props) {
  const [estado, setEstado] = React.useState(false);

  const mostrar = () => {
    setEstado (prevEstado => !prevEstado)
  }

  
  return (
    <div className='cabecera'>
        <img className="logo" src="./images/qrcode.png" alt='' />
        <h2 className='titulo' onClick={props.toggle}>EL RANCHERO</h2>
        <h3 className='subtitulo'>chorizo artesanal</h3>
        <img className='menuImg' 
        onClick={mostrar}
        src='./images/menu.png' alt='' />
        <Menu mostrar={estado}/>
    </div>
  )
}
