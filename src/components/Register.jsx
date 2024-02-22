const Register = () => {
    return <>
        <section className="bg-register flex flex-wrap justify-between items-center relative max-w-[1280px] mb-10 mx-4 md:justify-evenly md:mx-auto lg:justify-around">
            <img src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1708545394/davi/sacdfba7gty3ygahcrwj.png"
                alt="inscribase" className="w-full rounded-[10%] sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] lg:max-w-[500px]" />
            <div className="max-full text-center sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] md:text-start lg:max-w-[500px]">
                <p className="text-2xl font-bold mb-2 text-pretty sm:text-3xl md:text-balance lg:text-4xl">
                    ¡Participa y haz historia en el Hackatón de Pagos Universitarios!</p>
                <a href="#" className="block rounded-3xl text-white font-bold text-lg bg-red-600 p-5 mb-5 w-fit mx-auto sm:text-2xl md:mx-0 hover:bg-orange-600 hover:shadow-xl hover:shadow-slate-950/40 hover:scale-105">Inscribase y participe</a>
            </div>
        </section>
        <section className=" flex flex-wrap justify-between content-center text-center items-center relative max-w-[1280px] mb-10 mx-4 md:justify-evenly md:mx-auto lg:justify-around bg-red-600 p-5">
            <div className="max-full text-center sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] md:text-start lg:max-w-[500px]">
                <p className="text-center text-white text-2xl">
                    Mientras tanto, <span className="font-bold">puedes ir, </span><span className=" text-white italic font-bold underline underline-offset-8">descangando la app DaviPlata</span> en las siguientes plataformas
                </p>
                <div className="flex flex-wrap justify-between items-center relative max-w-[1280px] mb-10 mx-4 my-8 md:justify-evenly md:mx-auto lg:justify-around">
                    <a href="https://itunes.apple.com/sv/app/daviplata-el-salvador/id1441370114?mt=8" target="_blank" className="block rounded-lg text-white font-bold text-lg bg-black p-5 mb-5 w-fit mx-auto sm:text-2xl md:mx-0 hover:bg-rgray-300 hover:shadow-xl hover:shadow-slate-950/40 hover:scale-105">App Store</a>
                    <a href="https://play.google.com/store/apps/details?id=imoves.com.daviplata&hl=es" target="_blank" className="block rounded-lg text-white font-bold text-lg bg-black p-5 mb-5 w-fit mx-auto sm:text-2xl md:mx-0 hover:bg-gray-300  hover:shadow-xl hover:shadow-slate-950/40 hover:scale-105">Google Play</a>
                </div>
            </div>
            <div className="text-center mx-auto">
                <img src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1708564974/davi/ud0in9dgw183jakvlukn.gif"
                    alt="daviplata" className=" rounded-[10%] sm:max-w-[calc(200px+4vw)] md:max-w-[calc(200px+3vw)] lg:max-w-[200px] " />
            </div>
        </section>
    </>
}
export default Register