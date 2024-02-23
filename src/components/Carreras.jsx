const Carreras = () => {
    return <>
        <section className="w-[375px] mx-auto bg-white mb-10 shadow-lg shadow-gray-400  md:flex  md:w-[760px] md:h-[624px] md:rounded-3xl">
            <div className=" bg-gradient-to-b from-red-600 to-red-400 h-[356px] pt-8 px-10 text-center rounded-b-3xl md:w-[350px] md:h-full md:rounded-3xl md:pt-12">
                <div className="rounded-full h-[140px] w-[140px] mx-auto grid place-content-center mb-6 text-[18px] bg-gradient-to-t from-red-400 to-red-200 md:mb-10">
                   <img src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1708722575/davi/g7hxgxwdjawxhtitvnim.png" alt="daviplata" className="w-[100px] h-[100px]" />
                </div>
                <p className="text-white font-bold text-[18px] md:text-3xl md:mb-6 ">CARRERAS</p>
                <p className="text-white md:text-xl">Forma un equipo multidisciplinario con miembros de las siguientes carreras:</p>
            </div>
            <div className="p-8 h-[540px] md:w-[420px] md:h-[] md:py-5 md:px-10">
                <div className=" bg-red-200 flex place-content-between p-3 rounded-lg mb-4 h-[54px] items-center text-white font-bold md:text-lg md:px-4 md:h-[70px] md:w-full">
                    <p className="flex gap-2 text-red-900"><span>1. Lic. en innovación y transformación digital</span></p>
                </div>
                <div className="bg-red-200 flex place-content-between p-3 rounded-lg mb-4 h-[54px] items-center text-white font-bold  md:text-lg md:px-4 md:h-[70px] md:w-full">
                    <p className="flex gap-2 text-red-900"><span>2. Ing. en Software y Negocios digitales</span></p>
                </div>
                <div className="bg-red-200 flex place-content-between p-3 rounded-lg mb-4 h-[54px] items-center text-white font-bold md:text-lg md:px-4 md:h-[70px] md:w-full">
                    <p className="flex gap-2 text-red-900"><span>3. Ingenierías Industrial, Informática, en Sistemas, de Negocios.</span></p>
                </div>
                <div className="bg-red-200 flex place-content-between p-3 rounded-lg mb-4 h-[54px] items-center text-white font-bold md:text-lg md:px-4 md:h-[70px] md:w-full">
                    <p className="flex gap-2 text-red-900"><span> 4. Diseño estratégico</span></p>
                </div>
                <div className="bg-red-200 flex place-content-between p-3 rounded-lg mb-4 h-[54px] items-center text-white font-bold md:text-lg md:px-4 md:h-[70px] md:w-full">
                    <p className="flex gap-2 text-red-900"><span>  5. Comunicación y Estrategia Digital</span></p>
                </div>
                <div className="bg-red-200 flex place-content-between p-3 rounded-lg mb-4 h-[54px] items-center text-white font-bold md:text-lg md:px-4 md:h-[70px] md:w-full">
                    <p className="flex gap-2 text-red-900"><span>  6. Administración de Empresas y mercadeo</span></p>
                </div>
                <div className="bg-red-200 flex place-content-between p-3 rounded-lg mb-4 h-[54px] items-center text-white font-bold md:text-lg md:px-4 md:h-[70px] md:w-full">
                    <p className="flex gap-2 text-red-900"><span>  7. Ciencia de datos (desarrolladores/programadores)</span></p>
                </div>
            </div>
        </section>
    </>
}
export default Carreras