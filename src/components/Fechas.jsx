import timeline from '../assets/fechas/line.png'
import hero from '../assets/fechas/hero_fechas.jpg'
import arrow from '../assets/fechas/downArrow.png'

const Fechas = () => {
    return (
        <section>
            <h1 id="fechas" className="text-center font-bold text-6xl pt-20 pb-8">Fechas</h1>
            <div className="bg-[#DC2626] lg:p-4">
                <section className="p-1 lg:border-4 lg:border-davivienda-smoke lg:rounded-2xl text-white md:max-w-screen-md lg:max-w-[945px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center max-w-screen-xl ">
                        <div className="hidden md:block w-fit mb-2">
                            <img src={hero} alt="Timeline Image"
                                className="angled-mask drop-shadow-xl border-2 border-davivienda-smoke h-[550px] w-[400px] rounded-tl-2xl" />
                        </div>
                        <div className="mb-2 mx-2 md:w-[400px] 2xl:my-0">
                            <div className="relative grid grid-cols-1 mx-auto text-davivienda-smoke w-[calc(290px+8vw)] min-[400px]:w-[calc(375px+5vw)] md:w-full md:max-w-[400px]">
                                <img className="absolute self-center justify-self-center h-[70%] mb-8"
                                    src={timeline} alt="Timeline Bar" />
                                <div className="grid items-center mt-2">
                                    <div className="bg-davivienda-red border border-davivienda-smoke rounded-2xl drop-shadow-xl shadow shadow-davivienda-smoke w-[calc(128px+5vw)] p-2 md:w-[170px] lg:w-[185px]">
                                        <h2 className="text-lg font-bold underline md:text-xl">Convocatoria</h2>
                                        <span className="block text-sm md:text-base">Virtual</span>
                                        <p className="text-sm italic md:text-base">8 MAR - 28 ABR</p>
                                        <p className="font-semibold md:text-lg">Inscripción</p>
                                    </div>
                                    <div className="absolute w-[18px] h-[18px] bg-[#F78E20] border border-davivienda-smoke rounded-full justify-self-center">
                                    </div>
                                </div>
                                <div className="grid items-center">
                                    <div className="bg-davivienda-red border border-davivienda-smoke rounded-2xl drop-shadow-xl shadow shadow-davivienda-smoke w-[calc(128px+5vw)] p-2 md:w-[170px] lg:w-[185px] justify-self-end">
                                        <h2 className="text-lg font-bold underline md:text-xl">Kickoff</h2>
                                        <span className="block text-sm md:text-base">Virtual</span>
                                        <p className="text-sm italic md:text-base">30 ABR</p>
                                        <p className="font-semibold">Introducción</p>
                                    </div>
                                    <div className="absolute w-[18px] h-[18px] bg-[#F78E20] border border-davivienda-smoke rounded-full justify-self-center">
                                    </div>
                                </div>
                                <div className="grid items-center">
                                    <div className="bg-davivienda-red border border-davivienda-smoke rounded-2xl drop-shadow-xl shadow shadow-davivienda-smoke w-[calc(128px+5vw)] p-2 md:w-[170px] lg:w-[185px]">
                                        <h2 className="text-lg font-bold underline md:text-xl">Sesión Q&A</h2>
                                        <span className="block text-sm md:text-base">Virtual</span>
                                        <p className="text-sm italic md:text-base">3 MAY</p>
                                        <p className="font-semibold">Metodología</p>
                                    </div>
                                    <div className="absolute w-[18px] h-[18px] bg-[#F78E20] border border-davivienda-smoke rounded-full justify-self-center">
                                    </div>
                                </div>             
                                <div className="grid items-center">
                                    <div className="bg-davivienda-red border border-davivienda-smoke rounded-2xl drop-shadow-xl shadow shadow-davivienda-smoke w-[calc(128px+5vw)] p-2 md:w-[170px] lg:w-[185px] justify-self-end">
                                        <h2 className="text-lg font-bold underline lg:text-xl">¡Evento principal!</h2>
                                        <span className="block text-sm md:text-base">Universidad Dr José Matías Delgado - Campus 1</span>
                                        <p className="text-sm mb-2 italic md:text-base">18 - 20 MAY</p>
                                        <img className="w-9 mx-auto" src={arrow} alt="Arrow Direction" />
                                    </div>
                                    <div className="absolute w-[18px] h-[18px] bg-[#F78E20] border border-davivienda-smoke rounded-full justify-self-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#DC2626] p-1 pb-2 2xl:pt-1 max-w-screen-xl">
                        <div className="bg-davivienda-red border border-davivienda-smoke rounded-[20px] drop-shadow-lg shadow shadow-davivienda-smoke w-full mx-auto p-4 max-w-screen-sm lg:max-w-screen-md">
                            <div className=" text-davivienda-smoke rounded-xl mb-6 mx-2 2xl:mb-12">
                                <h2 className="text-4xl font-bold leading-tight mb-2 text-center drop-shadow-lg">
                                    ¡Tres días de intensa innovación!</h2>
                                <p className="text-center text-balance text-xl font-bold mb-2">Tú y tu equipo reunidos en las instalaciones de la <span className="underline italic">Universidad Dr. José Matías Delgado</span> para competir y compartir con la comunidad.</p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-3 items-center">
                                <h1 className="bg-[url('/src/assets/fechas/calendar.svg')] rounded font-bold text-6xl text-davivienda-smoke text-center flex items-center justify-center w-32 h-32 pt-4 drop-shadow-lg md:w-28 md:h-28 lg:w-32 lg:h-32">
                                    18
                                </h1>
                                <h1 className="bg-[url('/src/assets/fechas/calendar.svg')] rounded font-bold text-6xl text-davivienda-smoke text-center flex items-center justify-center w-32 h-32 pt-4 drop-shadow-lg md:w-28 md:h-28 lg:w-32 lg:h-32">
                                    19
                                </h1>
                                <h1 className="bg-[url('/src/assets/fechas/calendar.svg')] rounded font-bold text-6xl text-davivienda-smoke text-center flex items-center justify-center w-32 h-32 pt-4 drop-shadow-lg md:w-28 md:h-28 lg:w-32 lg:h-32">
                                    20
                                </h1>
                                <h1 className="rounded-full font-bold text-6xl text-center text-davivienda-smoke drop-shadow-lg p-4">
                                    de Mayo
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Fechas