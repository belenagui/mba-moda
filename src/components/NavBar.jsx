import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,Box, Spacer,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box p='4' bg='red.400'>
          <h3>MBA-Moda</h3>
        </Box>
        <Spacer />
        <Box p='4' bg='green.400'>
          <Menu>

            <MenuButton>
              categories
            </MenuButton>
            <MenuList>
              <MenuItem>Abrigos</MenuItem>
              <MenuItem>Musculosas</MenuItem>
              <MenuItem>Pantalones</MenuItem>
              <MenuItem>Sport</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        
        <Box p='4'>
              <CartWidget/>
        </Box>
      </Flex>
    </div>
  )
}

export default NavBar