import React, {useRef} from 'react'
import './Header.css'
import Menu from './Menu'



export default function Header(props) {
  const [estado, setEstado] = React.useState(false);
  let refMenu= useRef(), 
      refMenubtn= useRef();

  const mostrar = (e) => {
    /* setEstado (prevEstado => !prevEstado) */
    console.log(refMenu);
    if (refMenu.current.style.visibility === "hidden"){
      refMenu.current.style.visibility = "visible";
    } else {
      refMenu.current.style.visibility = "hidden";
    }
    
  }

  const muestraLogo= (e) => {
    window.open(e.target.src)
  }

  //cambie el logo
  return (
    <div className='cabecera'>
        <img className="logo" onClick={muestraLogo} src="./images/qrcode.png" alt='' />
        <h2 className='titulo' onClick={props.toggle}>EL RANCHERO</h2>
        <h3 className='subtitulo'>chorizo artesanal</h3>
        <img className='menuImg' 
        onClick={mostrar}
        ref={refMenubtn}
        src='./images/menu.png' alt='' />
        <Menu ref={refMenu} style={{visibility:"hidden"}}/>
    </div>
  )
}
