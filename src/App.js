import React from 'react'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import AddItems from './Components/AddItems'
const App = () => {
  return (

      
     <BrowserRouter>
      <Navbar />
      {/* <Homepage /> */}
      <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/nxtwave_assignment/' element={<Homepage />}/>
      <Route path='/additems' element={<AddItems />}/>

      </Routes>
     </BrowserRouter>
  )
}

export default App