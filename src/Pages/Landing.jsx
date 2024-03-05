import { useEffect } from 'react'
import { Footer } from '../components/Footer'
import MainHero from '../components/MainHero'
import { Navbar } from '../components/Navbar'
import { PerfilHackathon } from '../components/PerfilHackathon'
import Premios from '../components/Premios'
import Register from '../components/Register'
import DaviPlata from '../components/DaviPlata'
import Fechas from '../components/Fechas'

const Landing = () => {

    useEffect(() => {
        const hash = window.location.hash.slice(1); // Remove the '#' character
        if (hash) {
            const targetElement = document.getElementById(hash);
            if (targetElement) {
                setTimeout(()=>{
                    targetElement.scrollIntoView(true);
                },100)
            }
        }
    }, []);

    return (
        <>
            < Navbar />
            < MainHero />
            < PerfilHackathon />
            < Fechas />
            < Premios />
            < Register />
            < DaviPlata />
            < Footer />
        </>
    )
}

export default Landing