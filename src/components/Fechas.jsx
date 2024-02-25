const Fechas = () => {
    return (
        <section className="bg-[#DC2626] text-white drop-shadow-lg">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-1/2 my-2">
                    <img src="https://res.cloudinary.com/dgxmqoyv4/image/upload/v1708554227/Davivienda/computer-program-coding-screen_wrk4lh.jpg" alt="Hero Image" className="md:angled-mask drop-shadow-lg" />
                </div>
                <div id="fechas" className="mb-10 pt-20 mx-2 md:w-1/2 md:mb-0 2xl:my-0">
                    <div  className="bg-fake-white text-cyan-950 rounded-xl mb-6 p-2 2xl:mb-12">
                        <h2 className="text-4xl font-bold leading-tight mb-2 text-center drop-shadow-lg">
                        ¡Tres días de intensa innovación!</h2>
                        <p className="text-center text-balance text-xl font-bold mb-2">Tú y tu equipo reunidos <span className="underline">presencialmente</span> para competir y compartir con la comunidad.</p>
                    </div>
                    <div className="flex flex-wrap flex-row justify-center items-center">
                        <h1 className="bg-[url('/calendar.svg')] bg-no-repeat rounded font-bold text-6xl text-white text-center flex items-center justify-center w-32 h-32 pt-4 mx-auto drop-shadow-lg md:w-28 md:h-28 lg:w-32 lg:h-32">
                            17
                        </h1>
                        <h1 className="bg-[url('/calendar.svg')] bg-no-repeat rounded font-bold text-6xl text-white text-center flex items-center justify-center w-32 h-32 pt-4 mx-auto drop-shadow-lg md:w-28 md:h-28 lg:w-32 lg:h-32">
                            18
                        </h1>
                        <h1 className="bg-[url('/calendar.svg')] bg-no-repeat rounded font-bold text-6xl text-white text-center flex items-center justify-center w-32 h-32 pt-4 mx-auto drop-shadow-lg md:w-28 md:h-28 lg:w-32 lg:h-32">
                            19
                        </h1>
                        <div className="justify-center items-center">
                            <h1 className="rounded-full font-bold text-6xl text-center p-10 drop-shadow-lg">
                                de Mayo
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Fechas