import { BrowserRouter,Routes, Route } from 'react-router-dom'
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from "./components/Home"
import About from "./components/About"
import Cart from "./components/Cart"



const App = () => {
  document.body.style.backgroundColor ='#FCEADE'
return (
  <BrowserRouter>

    <NavBar/>

    <Routes>
      {/* <ItemListContainer />
      <ItemDetailContainer/> */}
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/Cart' element={<Cart/>}/>
      <Route exact path='/item' element={<ItemDetailContainer/>}/>

    </Routes>
    


  </BrowserRouter>
  )
}

export default App
