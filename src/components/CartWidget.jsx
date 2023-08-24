import { Divider, Flex, Box } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
  return (
    <div>
      <Flex>

        <box>
          <span className="material-symbols-outlined">
              shopping_cart
          </span>

        </box>
        <Divider/>
        <box className = 'carritoContainer'>
          <p>5</p>

        </box>
      </Flex>
    </div>

  )
}

export default CartWidget