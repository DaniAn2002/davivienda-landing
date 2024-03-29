import hero from '../assets/participantes/hero_edad.jpg'
import reto from '../assets/participantes/reto.png'
import participantes from '../assets/participantes/participantes.png'
import mockup from '../assets/participantes/mockup.png'

export const PerfilHackathon = () => {
    return (
        <>
            <section id="participantes" className="pt-16">
                <div name="PerfilHackathon" className="container mx-auto rounded-xl shadow-md my-4">
                    <div className="bg-red-600 md:grid md:grid-flow-col md:grid-cols-2 justify-center items-center gap-5 p-5 rounded-t-xl">
                        <div className="content-center tracking-wide m-auto">
                            <p className="text-xl md:text-4xl lg:text-5xl 2xl:leading-[3.4rem] text-center text-balance align-middle p-5 text-white font-medium">
                                Si tienes entre <span className="font-bold">18</span> y <span className="font-bold">
                                    29</span> años,
                                ¡acepta el desafío! Junto con tu equipo,
                                <span className="font-extrabold"> podrían ganar hasta $5,000 dólares</span>.
                            </p>
                        </div>
                        <div className="rounded-[40px] bg-davivienda-smoke w-fit h-fit my-5 mx-auto p-2">
                            <img src={hero}
                                className="w-full rounded-[40px] block sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] md:text-start lg:max-w-[500px]"
                                alt="hombre con laptop" />
                        </div>
                    </div>

                    <div className="md:grid md:grid-flow-rows md:grid-cols-auto bg-gray-200 rounded-md">
                        <div className="tracking-wide pt-4 lg:flex md:border-r md:border-l backdrop-blur-md bg-white/90 rounded-md m-1">
                            <div className="lg:w-1/2 lg:my-5 lg:drop-shadow-md lg:p-1">
                                <img src={reto}
                                    className="w-2/6 md:w-24 lg:w-40 block mx-auto my-2"
                                    alt="Reto" />
                                <span className="block font-bold text-2xl text-center mx-auto">
                                    El Reto
                                </span>
                            </div>
                            <p className="lg:w-1/2 text-center text-cyan-950 sm:text-center lg:text-left sm:text-xl text-balance font-medium lg:text-2xl pt-10 pb-9 px-[calc(1.5rem+5vw)] sm:px-16 md:px-4 xl:px-3 lg:my-5">
                                Diseñar la oferta de valor y experiencia para los jóvenes universitarios que fortalezca el ecosistema digital de pagos en las universidades por medio del uso de DaviPlata.
                            </p>
                        </div>

                        <div className="lg:flex lg:items-center tracking-wide p-4 md:border-r md:border-l backdrop-blur-md bg-white/90 rounded-md m-1 h-auto">
                            <div className="lg:w-1/2 lg:my-5 lg:drop-shadow-md lg:p-1">
                                <img src={participantes}
                                    className="w-2/6 md:w-24 lg:w-40 block mx-auto my-2"
                                    alt="Participantes" />
                                <span className="block font-bold text-2xl text-center mx-auto">
                                    ¿Quiénes participan?
                                </span>
                            </div>
                            <p className="block text-cyan-950 lg:w-1/2 text-center lg:text-left text-balance font-medium pt-10 pb-9 px-[calc(1.5rem+5vw)] sm:text-xl sm:px-20 md:px-2 lg:text-2xl xl:px-3">
                                Equipos de <span className="font-bold text-davivienda-red">2 a 5 personas</span> conformados por estudiantes, egresados y graduados de Universidades de El Salvador,
                                de cualquier carrera afín a <span className="font-bold text-davivienda-red">tecnología, innovación, administración de empresas y diseño.</span>
                            </p>
                        </div>
                        <div className="tracking-wide pt-4 lg:flex lg:items-center md:border-r md:border-l backdrop-blur-md bg-white/90 rounded-xl m-1">
                            <div className="lg:w-1/2 lg:my-5 lg:drop-shadow-md lg:p-1">
                                <img src={mockup}
                                    className="w-2/6 md:w-24 lg:w-40 block mx-auto my-2"
                                    alt="Mockup" />
                                <span className="block font-bold text-2xl text-center mx-auto">
                                    ¿Qué se debe entregar?
                                </span>
                            </div>
                            <p className="lg:w-1/2 text-center text-cyan-950 sm:text-xl lg:text-2xl lg:text-left text-balance font-medium pt-8 pb-9 px-[calc(1.5rem+5vw)] sm:px-16 md:px-4 lg:py-0 xl:px-3">
                                ¡Mockups, prototipo funcional y código de la solución desarrollada!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
