const Register = () => {
    return <>
        <section className="bg-register flex flex-wrap justify-between items-center relative max-w-[1280px] mb-10 mx-4 md:justify-evenly md:mx-auto lg:justify-around">
        <img src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1708545394/davi/sacdfba7gty3ygahcrwj.png"
                alt="hero-img" className="w-full rounded-[10%] sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] lg:max-w-[500px]" />
            <div className="max-full text-center sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] md:text-start lg:max-w-[500px]">
                <p className="text-2xl font-bold mb-2 text-pretty sm:text-3xl md:text-balance lg:text-4xl">
                    ¡Participa y haz historia en el Hackatón de Pagos Universitarios!</p>
                <a href="#" className="block rounded-3xl text-white font-bold text-lg bg-red-600 p-5 mb-5 w-fit mx-auto sm:text-2xl md:mx-0 hover:bg-orange-600 hover:shadow-xl hover:shadow-slate-950/40 hover:scale-105">Inscribase y participe</a>
            </div>
        </section>
        <section className=" text-center p-10 tracking-wider">
            <p className="text-center text-black text-2xl">
                Mientras tanto, <span className="font-bold">vaya por las fotocopias o las onces, </span><span className=" text-red-600 italic font-bold underline underline-offset-8">descangando su DaviPlata</span>
            </p>
        </section>
    </>
}
export default Register