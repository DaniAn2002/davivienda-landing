import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { PerfilHackathon } from './components/PerfilHackathon/PerfilHackathon'
import { Premios } from './components/Premios'
import Register from './components/Register'

function App() {

  return (
    <>
      < Navbar />
      <PerfilHackathon />
      < Premios />
      < Footer />
      <Register />
    </>
  )
}

export default App
