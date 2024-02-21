import './App.css'
import { Footer } from './components/Footer'
import MainHero from './components/MainHero'
import { Navbar } from './components/Navbar'
import { PerfilHackathon } from './components/PerfilHackathon'
import { Premios } from './components/Premios'
import Register from './components/Register'

function App() {

  return (
    <>
      < Navbar />
      < MainHero />
      <PerfilHackathon />
      < Premios />
      < Register />
      < Footer />
    </>
  )
}

export default App
