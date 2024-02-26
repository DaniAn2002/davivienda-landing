const Premios = () => {
    return (
        <section>
            <section className="flex flex-wrap flex-col justify-center items-center m-2">
                <h1 id="premios" className="rounded-full font-bold text-6xl text-center pt-20 pb-8">
                    Premios
                </h1>
            </section>
            <section className="flex justify-center gap-[calc(4px+2vw)] lg:gap-6 mx-1 items-end">
                <div className="bg-davivienda-red rounded-tl-xl rounded-tr-xl w-[calc(90px+3vw)] h-[calc(375px+3vw)] sm:w-1/5 sm:h-[425px] md:h-[475px] lg:w-1/6 lg:h-[500px] xl:w-56">
                    <img className="py-4 w-16 sm:w-[72px] md:w-20 mx-auto drop-shadow-lg" src="https://res.cloudinary.com/dgxmqoyv4/image/upload/v1708550691/Davivienda/silver_yhy8vp.png"/>
                    <div className="flex flex-col justify-center items-center text-center text-davivienda-smoke">
                        <h5 className="font-bold tracking-tight mb-2 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">$2000 dólares</h5>
                        <p className="pb-5 sm:text-lg md:text-xl lg:text-2xl">Segundo Lugar</p>
                    </div>
                    <img className="pt-4 w-9/12 mx-auto drop-shadow-lg xl:w-[158px] xl:h-[228px]" src="https://res.cloudinary.com/dk2oxzxoo/image/upload/v1708942972/kodigo-Davivienda/banner-sky-blue_2nd_l7gpya.png" alt="Banner" />
                </div>
                <div className="bg-davivienda-red rounded-tl-xl rounded-tr-xl w-[calc(90px+3vw)] h-[calc(450px+3vw)] sm:w-1/5 sm:h-[500px] md:h-[565px] lg:w-1/6 lg:h-[600px] xl:w-56">
                    <img className="py-4 w-16 sm:w-[72px] md:w-20 mx-auto drop-shadow-lg" src="https://res.cloudinary.com/dgxmqoyv4/image/upload/v1708550691/Davivienda/oro_xoekiv.png"/>
                    <div className="flex flex-col justify-center items-center text-center text-davivienda-smoke">
                        <h5 className="font-bold tracking-tight mb-2 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">$3000 dólares</h5>
                        <p className="pb-5 sm:text-lg md:text-xl lg:text-2xl">Primer Lugar</p>
                    </div>
                    <img className="pt-4 w-9/12 mx-auto drop-shadow-lg xl:w-[158px] xl:h-[328px]" src="https://res.cloudinary.com/dk2oxzxoo/image/upload/v1708940077/kodigo-Davivienda/banner-sky-blue_npvhjt.png" alt="Banner" />
                </div>
                <div className="bg-davivienda-red rounded-tl-xl rounded-tr-xl w-[calc(90px+3vw)] h-[calc(300px+3vw)] sm:w-1/5 sm:h-[350px] md:h-[385px] lg:w-1/6 lg:h-[400px] xl:w-56">
                    <img className="py-4 w-16 sm:w-[72px] md:w-20 mx-auto drop-shadow-lg" src="https://res.cloudinary.com/dgxmqoyv4/image/upload/v1708550691/Davivienda/bronze_doquji.png"/>
                    <div className="flex flex-col justify-center items-center text-center text-davivienda-smoke">
                        <h5 className="font-bold tracking-tight mb-2 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">$1000 dólares</h5>
                        <p className="pb-5 sm:text-lg md:text-xl lg:text-2xl">Tercer Lugar</p>
                    </div>
                    <img className="pt-4 w-9/12 mx-auto drop-shadow-lg xl:w-[158px] xl:h-[128px]" src="https://res.cloudinary.com/dk2oxzxoo/image/upload/v1708942972/kodigo-Davivienda/banner_sky_blue_3rd_nzwkxs.png" alt="Banner" />
                </div>
            </section>
            <div className="bg-davivienda-red border-t h-[calc(20px+5vw)] mx-auto min-[400px]:w-[calc(380px+5vw)] min-[400px]:rounded-tl-xl min-[400px]:rounded-tr-xl sm:w-[calc(580px+6vw)] sm:h-14 md:w-[calc(650px+8vw)] md:h-16 lg:w-[calc(750px+10vw)] lg:h-20 xl:w-[880px]">

            </div>
        </section>
    )
}

export default Premios