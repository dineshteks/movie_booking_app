import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './component/NavBar'
import Footer from './component/Footer'
import Home from './pages/Home'
import MovieCard from './component/Moviecard'
import movieData from './data/Moviedata'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TheaterCard from './component/TheaterCard'
import theaterData from './data/theaterData'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
    
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<MovieCard movie={movieData}/>}/>
          <Route path="/theaters" element={<TheaterCard theater={theaterData}/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
