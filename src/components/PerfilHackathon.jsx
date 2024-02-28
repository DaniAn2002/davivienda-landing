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
                                <span className="font-extrabold"> podrían ganar hasta $3,000 dólares</span>.
                            </p>
                        </div>
                        <div className="rounded-[40px] bg-davivienda-smoke w-fit h-fit my-5 mx-auto p-2">
                            <img src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1708970708/davi/dll7s0xt9kudhwekbzjr.jpg"
                                className="w-full rounded-[40px] block sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] md:text-start lg:max-w-[500px]"
                                alt="hombre con laptop" />
                        </div>
                    </div>

                    <div className="md:grid md:grid-flow-rows md:grid-cols-auto bg-gray-200 rounded-md">
                        <div className="tracking-wide pt-4 lg:flex md:border-r md:border-l backdrop-blur-md bg-white/90 rounded-md m-1">
                            <div className="lg:w-1/2 lg:my-5 lg:drop-shadow-md lg:p-1">
                                <img src="https://res.cloudinary.com/dbhtbf2uu/image/upload/v1708923931/Davivienda-landing/j3o6ew7n5lcpopjzddp8.png"
                                    className="w-2/6 md:w-24 lg:w-40 block mx-auto my-2"
                                    alt="Reto" />
                                <span className="block font-bold text-2xl text-center mx-auto">
                                    El Reto
                                </span>
                            </div>
                            <p className="lg:w-1/2 text-center text-cyan-950 sm:text-center lg:text-left sm:text-xl text-balance font-medium lg:text-2xl pt-10 pb-9 px-[calc(1.5rem+5vw)] sm:px-16 md:px-4 xl:px-3 lg:my-5">
                                Diseñar la oferta de valor y experiencia para los jóvenes universitarios que fortalezca el ecosistema digital
                                de pagos en la universidades.
                            </p>
                        </div>

                        <div className="lg:flex lg:items-center tracking-wide p-4 md:border-r md:border-l backdrop-blur-md bg-white/90 rounded-md m-1 h-auto">
                            <div className="lg:w-1/2 lg:my-5 lg:drop-shadow-md lg:p-1">
                                <img src="https://res.cloudinary.com/dbhtbf2uu/image/upload/v1708923960/Davivienda-landing/m15568pq46o3vyhkqv0x.png"
                                    className="w-2/6 md:w-24 lg:w-40 block mx-auto my-2"
                                    alt="Participantes" />
                                <span className="block font-bold text-2xl text-center mx-auto">
                                    ¿Quiénes participan?
                                </span>
                            </div>
                            <div className="block text-cyan-950 lg:w-1/2">
                                <p className="block sm:text-center lg:text-left text-balance font-medium pt-10 pb-9 px-[calc(1.5rem+5vw)] sm:text-xl sm:px-20 md:px-2 lg:text-2xl">
                                    Equipos de 2 a 5 personas conformados por estudiantes, egresados y graduados de Universidades de El Salvador,
                                    de cualquier carrera afín a tecnología, administración de empresas y diseño.
                                </p>
                                <h2 className="text-xl font-bold px-[calc(1.5rem+5vw)] sm:px-20 md:px-10 lg:px-2">Carreras</h2>
                                <ul className="mx-auto font-medium text-wrap pt-2 pb-4 px-[calc(1.5rem+5vw)] sm:px-20 md:text-lg md:px-10 lg:px-2">
                                    <li className="max-w-fit mb-4 p-px tracking-wide border-b-davivienda-red border-b-2">Lic. En Innovación y Transformación Digital</li>
                                    <li className="max-w-fit mb-4 p-px tracking-wide border-b-davivienda-red border-b-2">Ing. En Software y Negocios Digitales</li>
                                    <li className="max-w-fit mb-4 p-px tracking-wide border-b-davivienda-red border-b-2">Ingeniería Industrial, Informática, en Sistemas y de Negocios</li>
                                    <li className="max-w-fit mb-4 p-px tracking-wide border-b-davivienda-red border-b-2">Diseño Estratégico</li>
                                    <li className="max-w-fit mb-4 p-px tracking-wide border-b-davivienda-red border-b-2">Comunicación y Estrategia Digital</li>
                                    <li className="max-w-fit mb-4 p-px tracking-wide border-b-davivienda-red border-b-2">Administración de Empresas y Mercadeo</li>
                                    <li className="max-w-fit mb-4 p-px tracking-wide border-b-davivienda-red border-b-2">Ciencia de Datos</li>
                                </ul>
                            </div>
                        </div>

                        <div className="tracking-wide pt-4 lg:flex lg:items-center md:border-r md:border-l backdrop-blur-md bg-white/90 rounded-xl m-1">
                            <div className="lg:w-1/2 lg:my-5 lg:drop-shadow-md lg:p-1">
                                <img src="https://res.cloudinary.com/dbhtbf2uu/image/upload/v1708923984/Davivienda-landing/fynovvllmkwocdpobkfw.png"
                                    className="w-2/6 md:w-24 lg:w-40 block mx-auto my-2"
                                    alt="Mockup" />
                                <span className="block font-bold text-2xl text-center mx-auto">
                                    ¿Qué se debe entregar?
                                </span>
                            </div>
                            <p className="lg:w-1/2 text-center text-cyan-950 sm:text-xl lg:text-2xl sm:text-center lg:text-left text-balance font-medium pt-8 pb-9 px-[calc(1.5rem+5vw)] sm:px-16 md:px-4 lg:py-0 xl:px-3">
                                Durante el evento de la Hackathon los equipos deben conceptualizar, prototipar a nivel de mockups y desarrollar
                                la nueva oferta de valor dentro de Daviplata y su código de desarrollo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
