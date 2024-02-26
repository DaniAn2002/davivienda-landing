const Register = () => {
    return <>
        <section id="hackaton" className="pt-20">
            <div className="bg-register rounded-[40px] flex flex-wrap justify-between items-center relative max-w-[1280px] mb-10 mx-4 md:justify-evenly md:mx-auto lg:justify-around">
                <div className="rounded-[40px] bg-davivienda-smoke p-5 m-5">
                    <img src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1708691701/davi/qynsy2n6hiu4mug5n8yp.jpg"
                    alt="inscribase" className="w-full rounded-[40px] sm:max-w-[calc(225px+4vw)] md:max-w-[calc(320px+3vw)] lg:max-w-[425px]" />
                </div>
                <div className="bg-davivienda-smoke rounded-[40px] max-full text-center m-2 p-5 sm:max-w-[calc(220px+4vw)] md:my-4 md:max-w-[calc(290px+3vw)] md:text-start lg:max-w-[480px]">
                    <p className="text-2xl font-bold text-pretty text-center mb-8 sm:text-3xl md:text-balance lg:text-4xl text-cyan-950">
                        ¡Participa y haz historia en el Hackathon de Pagos Universitarios!</p>
                    <a href="#" className="block rounded-3xl text-white md:text-nowrap font-bold text-lg bg-red-600 p-5 w-fit mx-auto sm:text-2xl hover:bg-rose-700 hover:shadow-xl hover:shadow-slate-950/40 hover:scale-105">
                        Inscríbete y participa</a>
                </div>
            </div>
        </section>
    </>
}
export default Register