
import './App.css'
import Navbar from './components/Navbar'
import { Details, Favorite, Home } from './Pages'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='min-h-screen p-d bg-white text-gray-600 text-lg '>
      <Navbar/>
      <Routes>
        <Route
          path='/'
          element= {<Home/>}>
        </Route>
        <Route
          path='/favorites'
          element={<Favorite />}>
          </Route>
        <Route path='/recipe-items/:id'
        element={<Details/>}></Route>
      </Routes>
    </div>

  )
}

export default App
