import './App.css'
import { Authors } from './pages/Authors'
import Landing from './pages/Landing'

function App() {

  const url = location.pathname

  return (
    <>
    
    {(url === '/authors') ? <Authors/> : <Landing/> }

    </>
  )
}

export default App
