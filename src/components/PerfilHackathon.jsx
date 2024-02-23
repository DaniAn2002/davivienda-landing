export const PerfilHackathon = () => {
    return (
        <>
            <section id="participantes" className="py-16">
                <div name="PerfilHackathon" className="container mx-auto rounded-xl shadow-md my-4">
                    <div className="bg-red-600 md:grid md:grid-flow-col md:grid-cols-2 justify-center gap-5 p-5 rounded-t-xl">
                        <div className="content-center tracking-wide m-auto">
                            <p className="text-xl md:text-3xl lg:text-4xl text-center text-balance align-middle p-5 text-white font-medium">
                                Si tienes entre 18 y 29 años y
                                <span className="font-bold"> eres estudiante, egresado o graduado</span>,
                                ¡acepta el desafío! Junto con tu equipo, <span className="font-extrabold"> podrían ganar hasta $3,000.00 dólares</span>.
                            </p>
                        </div>
                        <div className="tracking-wide m-auto">
                            <img src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1708690740/davi/p2vuvs8bwbiin9otgfdm.jpg"
                                className="w-full rounded-[10%] block mx-auto p-5 sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] md:text-start lg:max-w-[500px]"
                                alt="hombre con laptop" />
                        </div>
                    </div>
                    <div className="md:grid md:grid-flow-col md:grid-cols-3">
                        <div className="tracking-wide pt-4">
                            <img src="https://res.cloudinary.com/dbhtbf2uu/image/upload/v1708569620/Davivienda-landing/mtcz0ofpnmooedlfezlk.png"
                                className="w-24 block mx-auto my-2"
                                alt="Reto" />
                            <span className="block font-bold text-2xl text-center mx-auto">
                                El Reto
                            </span>
                            <p className="text-xl text-center text-balance font-medium pt-4 pb-9 px-[calc(1.5rem+5vw)] sm:px-16 md:px-4 xl:px-8">
                                Diseñar la oferta de valor y experiencia para los jóvenes universitarios que fortalezca el ecosistema digital
                                de pagos en la universidades.
                            </p>
                        </div>
                        <div className="tracking-wide pt-4 md:border-r md:border-l md:border-slate-200">
                            <img src="https://res.cloudinary.com/dbhtbf2uu/image/upload/v1708475022/Davivienda-landing/tj9oybrpm45ywkuraa9h.png"
                                className="w-24 block mx-auto my-2"
                                alt="Participantes" />
                            <span className="block font-bold text-2xl text-center mx-auto">
                                ¿Quiénes participan?
                            </span>
                            <p className="text-xl text-center text-balance font-medium pt-4 pb-9 px-[calc(1.5rem+5vw)] sm:px-20 md:px-2">
                                Equipos de 2 a 5 personas conformados por estudiantes, egresados y graduados de Universidades de El Salvador,
                                de cualquier carrera afín a tecnología, administración de empresas y diseño.
                            </p>
                        </div>
                        <div className="tracking-wide pt-4">
                            <img src="https://res.cloudinary.com/dbhtbf2uu/image/upload/v1708475686/Davivienda-landing/nxtqasvnvf82rbbqt904.png"
                                className="w-24 block mx-auto my-2"
                                alt="Mockup" />
                            <span className="block font-bold text-2xl text-center mx-auto">
                                ¿Qué se debe entregar?
                            </span>
                            <p className="text-xl text-center text-balance font-medium pt-4 pb-9 px-[calc(1.5rem+5vw)] sm:px-16 md:px-4 xl:px-7">
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
