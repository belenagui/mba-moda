import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import CounterComponent from './components/CounterComponent'
import ItemDetailContainer from './components/ItemDetailContainer'

const App = () => {
  document.body.style.backgroundColor ='#FCEADE'
return (
  <>

    <NavBar/>
    <ItemListContainer />
    <ItemDetailContainer/>
    <CounterComponent/>
    

  </>
  )
}

export default App
