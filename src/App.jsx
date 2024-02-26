import './App.css'
import { Footer } from './components/Footer'
import MainHero from './components/MainHero'
import { Navbar } from './components/Navbar'
import { PerfilHackathon } from './components/PerfilHackathon'
import Premios from './components/Premios'
import Register from './components/Register'
import DaviPlata from './components/DaviPlata'
import Carreras from './components/Carreras'
import Fechas from './components/Fechas'
function App() {

  return (
    <>
      < Navbar />
      < MainHero />
      < PerfilHackathon />
      < Carreras />
      < Fechas />
      < Premios />
      < Register />
      < DaviPlata />
      < Footer />
    </>
  )
}

export default App
