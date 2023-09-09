import React, { useState } from 'react'

const ItemCount = () => {

    const [contador, setContador] = useState(0)
    const onAdd = () =>{
        alert("Gracias!! Acabas de comprar: " + contador + "Productos")
        setContador(0)
    }

    return (
    <>
      <div className='center'>



        
      </div>
      <p>{contador}</p>
      <button onClick={onAdd}>Mostrar Cantidad</button>
    </>
  )
}

export default ItemCount