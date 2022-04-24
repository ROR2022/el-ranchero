import React from 'react'

const tar = {
    width: "43vw",
    height: "35vw",
    margin: "0.5vw",
    marginTop: "2vw",
    marginLeft: "3vw",
    marginBottom: "0vw",
    padding: "0vw",
    borderRadius: "3vw",
    position: "relative"
}




export default function Tarjeta(props) {
  
 
  const mainStyle = {
    background: "#ff6961"
  }
  const abreImagen= (e) => {
    console.log(e.target.src)
  }

  return (
    <div style={mainStyle}>
        
        <img style={tar} onClick={abreImagen} src={props.item.img} alt='' />
        
        
        
    </div>
  )
}
