import React from 'react'
import Navbar from './Components/Navbar'
import {Route, Routes}  from 'react-router-dom'
import Forms from './Pages/Forms'
import Dashboard from './Pages/Dashboard'
const App = () => {
  return (
    <div className='app'>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/formelements' element={<Forms />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
