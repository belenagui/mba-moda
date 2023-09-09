import React from 'react'
import Item from './Item'

const ItemList = ({product}) => {

  console.log(product)

  return (
    <div>
        {

            product.map((p)=>{
                return (
                    <Item producto={p}/>
                )
            })
        }
    </div>
  )
}

export default ItemList