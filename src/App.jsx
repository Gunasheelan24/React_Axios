import React from 'react'
import Home from './Component/Home'
import Edit from './Component/Edit'
import { BrowserRouter, Route ,Routes  } from 'react-router-dom'
import UBDATE from './Component/UBDATE'

const App = () => {
  return (
    <>
    <BrowserRouter >
     <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/Add' element={<Edit />} />
      <Route path='/Ubdate/:id' element={<UBDATE />} />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App