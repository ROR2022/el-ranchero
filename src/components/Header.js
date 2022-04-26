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
    if (refMenu.current.style.top === "-1000vw"){
      refMenu.current.style.top = "0vw";
    } else {
      refMenu.current.style.top = "-1000vw";
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
        
        <Menu reff={refMenu}/>
        
        
    </div>
  )
}
