import React from 'react'
import Tarjeta from './Tarjeta'
import data from './data'

const tarjetas = {
  display: "grid",    
  gridTemplateColumns: "repeat(auto-fill,minmax(35vw,1fr))",
  gridGap: "0px"
}

export default function Main() {
  const [estado, setEstado] = React.useState(data.data);

  const hideTar = (id) => {
    setEstado(prevEstado => {
      return prevEstado.filter(item=> item.id!=id)
    })
  }
  const newData = estado.map(item => {
    return (
      <Tarjeta 
              key={item.id}
              item={item}
              hideTar={()=>hideTar(item.id)}
      />
    )
  })
  return (
    <div style={tarjetas}>
      {newData}
    </div>
  )
}
