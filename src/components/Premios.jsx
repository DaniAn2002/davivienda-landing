import "../index.css";

export const Premios = () => {
    return (
        <>
            <section className="bg-red-900 text-white drop-shadow-lg">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/2">
                        <img src="https://res.cloudinary.com/dgxmqoyv4/image/upload/v1708554227/Davivienda/computer-program-coding-screen_wrk4lh.jpg" alt="Hero Image" className="md:angled-mask drop-shadow-lg" />
                    </div>
                    <div className=" md:w-1/2 mb-10 md:mb-0">
                        <h2 className="text-4xl font-bold leading-tight mb-4 text-center drop-shadow-lg pt-10">
                            ¡Tres días de intensa innovación!</h2>
                        <div className="flex flex-wrap flex-row justify-center items-center">
                            <h1 className="rounded font-bold text-6xl text-white text-center  flex items-center justify-center w-32 h-32 p-10 bg-white border border-gray-200 drop-shadow-lg hover:bg-red-100 dark:bg-red-700 dark:border-red-700 dark:hover:bg-red-700 mx-auto my-4">
                                17
                            </h1>
                            <h1 className="rounded font-bold text-6xl text-white text-center  flex items-center justify-center w-32 h-32 p-10 bg-white border border-gray-200 drop-shadow-lg hover:bg-red-100 dark:bg-red-700 dark:border-red-700 dark:hover:bg-red-700 mx-auto my-4">
                                18
                            </h1>
                            <h1 className="rounded font-bold text-6xl text-white text-center  flex items-center justify-center w-32 h-32 p-10 bg-white border border-gray-200 drop-shadow-lg hover:bg-red-100 dark:bg-red-700 dark:border-red-700 dark:hover:bg-red-700 mx-auto my-4">
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

            <div className="flex flex-wrap  flex-col justify-center items-center m-2">
                <h1 id="premios" className="rounded-full font-bold text-6xl text-center pt-20 pb-10">
                    Premios
                </h1>
            </div>
            <div className="flex flex-wrap flex-row max-w-full p-6 rounded-lg text-centered justify-center items-center">

                <div className="flex flex-wrap flex-col justify-center items-center m-10 max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-red-100 dark:bg-red-700 dark:border-red-700 dark:hover:bg-red-700">
                    <div className="flex flex-wrap flex-row justify-center items-center">
                        <img className="mt-auto pb-0 w-16 md:w-16 drop-shadow-lg" src="https://res.cloudinary.com/dgxmqoyv4/image/upload/v1708550691/Davivienda/oro_xoekiv.png" />
                        <div className="flex flex-col justify-center items-center">
                            <h5 className="mb-2 text-4xl pl-3 font-bold tracking-tight text-gray-900 dark:text-white text-center">$3000 dolares</h5>
                            <p className="font-normal text-white text-center text-xl pb-5">Primer Lugar</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap flex-col justify-center items-center m-10 max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-red-100 dark:bg-red-700 dark:border-red-700 dark:hover:bg-red-700">
                    <div className="flex flex-wrap flex-row justify-center items-center">
                        <img className="mt-auto pb-0 w-16 md:w-16 drop-shadow-lg" src="https://res.cloudinary.com/dgxmqoyv4/image/upload/v1708550691/Davivienda/silver_yhy8vp.png" />
                        <div className="flex flex-col justify-center items-center">
                            <h5 className="mb-2 text-4xl  pl-3 font-bold tracking-tight text-gray-900 dark:text-white text-center">$2000 dolares</h5>
                            <p className="font-normal text-white text-center text-xl">Segundo Lugar</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-center m-10 max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-red-100 dark:bg-red-700 dark:border-red-700 dark:hover:bg-red-700">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <img className="mt-auto pb-0 w-16 md:w-16 drop-shadow-lg" src="https://res.cloudinary.com/dgxmqoyv4/image/upload/v1708550691/Davivienda/bronze_doquji.png" />
                        <div className="flex flex-col justify-center items-center">
                            <h5 className="mb-2 text-4xl  pl-3 font-bold tracking-tight text-gray-900 dark:text-white text-center">$1000 dolares</h5>
                            <p className="font-normal text-white text-center text-xl">Tercer Lugar</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}