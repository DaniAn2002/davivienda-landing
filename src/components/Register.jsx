const Register = () => {
    return <>
        <section id="hackaton" className="pt-20">
            <section className="bg-register flex flex-wrap justify-between items-center relative max-w-[1280px] mb-10 mx-4 md:justify-evenly md:mx-auto lg:justify-around">
                <img src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1708691701/davi/qynsy2n6hiu4mug5n8yp.jpg"
                    alt="inscribase" className="w-full p-5 rounded-[10%] sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] lg:max-w-[500px]" />
                <div className="max-full text-center sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] md:text-start lg:max-w-[500px]">
                    <p className="text-2xl font-bold mb-2 text-pretty sm:text-3xl md:text-balance lg:text-4xl text-white">
                        ¡Participa y haz historia en el Hackathon de Pagos Universitarios!</p>
                    <a href="#" className="block rounded-3xl text-white font-bold text-lg bg-red-600 p-5 mb-5 w-fit mx-auto sm:text-2xl md:mx-0 hover:bg-orange-600 hover:shadow-xl hover:shadow-slate-950/40 hover:scale-105">Inscribete y participa</a>
                </div>
            </section>
        </section>
    </>
}
export default Register