const Premios = () => {
    return (
        <section>
            <section className="flex flex-wrap flex-col justify-center items-center m-2">
                <h1 id="premios" className="rounded-full font-bold text-6xl text-center pt-20 pb-8">
                    Premios
                </h1>
            </section>
            <section className="flex justify-center gap-[calc(4px+2vw)] lg:gap-6 mx-1 items-end">
                <div className="bg-gradient-to-b from-red-500 bg-davivienda-red rounded-tl-xl rounded-tr-xl w-[calc(90px+3vw)] h-[calc(300px+3vw)] sm:w-1/5 sm:h-[350px] md:h-[375px] lg:w-1/6 lg:h-[400px] xl:w-56">
                    <img className="py-4 w-32 sm:w-[72px] md:w-32 mx-auto brightness-105" src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1709175691/davi/dvmty8ofcjyk0kvuzopz.png"/>
                    <div className="flex flex-col justify-center items-center text-center text-davivienda-smoke">
                        <h5 className="font-bold tracking-tight mb-2 px-3 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">$2,000 </h5>
                        <span className="font-bold tracking-tight mb-2 px-3 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">dólares</span>
                        <p className="pb-5 sm:text-lg md:text-xl lg:text-2xl">Segundo Lugar</p>
                    </div>         
                </div>
                <div className="bg-gradient-to-b from-red-500 bg-davivienda-red rounded-tl-xl rounded-tr-xl w-[calc(90px+3vw)] h-[calc(375px+3vw)] sm:w-1/5 sm:h-[425px] md:h-[450px] lg:w-1/6 lg:h-[475px] xl:w-56">
                    <img className="py-4 w-32 sm:w-[72px] md:w-32 mx-auto brightness-105" src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1709175690/davi/d6pqr2bu9phpzz5ehmiv.png"/>
                    <div className="flex flex-col justify-center items-center text-center text-davivienda-smoke">
                        <h5 className="font-bold tracking-tight mb-2 px-3 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">$3,000</h5>
                        <span className="font-bold tracking-tight mb-2 px-3 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">dólares</span>
                        <p className="pb-5 sm:text-lg md:text-xl lg:text-2xl">Primer Lugar</p>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-red-500 bg-davivienda-red rounded-tl-xl rounded-tr-xl w-[calc(90px+3vw)] h-[calc(225px+3vw)] sm:w-1/5 sm:h-[275px] md:h-[300px] lg:w-1/6 lg:h-[325px] xl:w-56">
                    <img className="py-4 w-32 sm:w-[72px] md:w-32 mx-auto brightness-[115%]" src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1709175691/davi/h4fpsxcr27d4i1074b0e.png"/>
                    <div className="flex flex-col justify-center items-center text-center text-davivienda-smoke">
                        <h5 className="font-bold tracking-tight mb-2 px-3 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">$1,000</h5>
                        <span className="font-bold tracking-tight mb-2 px-3 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">dólares</span>
                        <p className="pb-5 sm:text-lg md:text-xl lg:text-2xl">Tercer Lugar</p>
                    </div>             
                </div>
            </section>
            <div className="bg-davivienda-red border-t h-[calc(20px+5vw)] mx-auto min-[400px]:w-[calc(380px+5vw)] min-[400px]:rounded-tl-xl min-[400px]:rounded-tr-xl sm:w-[calc(580px+6vw)] sm:h-14 md:w-[calc(650px+8vw)] md:h-16 lg:w-[calc(750px+10vw)] lg:h-20 xl:w-[880px]">

            </div>
        </section>
    )
}

export default Premios