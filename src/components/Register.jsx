import hero from '../assets/hackathon/participa.jpg'

const Register = () => {
    return <>
        <section id="hackaton" className="pt-20">
            <div className="bg-davivienda-red rounded-[40px] flex flex-wrap items-center relative max-w-[1280px] mb-5 mx-4 sm:justify-evenly md:mx-auto lg:justify-around">
                <div className="rounded-[40px] bg-davivienda-smoke p-2 m-5">
                    <img src={hero}
                    alt="inscribase" className="w-full rounded-[40px] sm:max-w-[calc(225px+4vw)] md:max-w-[calc(320px+3vw)] lg:max-w-[425px]" />
                </div>
                <div className="bg-davivienda-smoke rounded-[40px] max-full text-center m-2 p-5 sm:max-w-[calc(220px+4vw)] md:my-4 md:max-w-[calc(290px+3vw)] md:text-start lg:max-w-[480px]">
                    <p className="text-xl font-bold text-pretty text-center mb-8 sm:text-2xl md:text-3xl md:text-balance lg:text-4xl text-cyan-950">
                    ¡Participa y haz historia en la primera gran Hackathon de jóvenes universitarios!</p>
                    <a href="https://forms.gle/QVHpSVtXZ33TsanTA" target="_blank" className="block rounded-3xl text-white md:text-nowrap font-bold text-lg bg-red-600 p-5 w-fit mx-auto sm:text-2xl hover:bg-rose-700 hover:shadow-xl hover:shadow-slate-950/40 hover:scale-105">
                        Inscríbete y participa</a>
                </div>
            </div>
        </section>
        <a href="#" className="bg-[#F78E20] rounded-2xl block text-lg text-cyan-950 font-bold w-fit p-5 mb-14 mx-auto sm:text-2xl hover:brightness-90 hover:shadow-xl hover:shadow-slate-950/40 hover:scale-105">Términos y Condiciones</a>
    </>
}
export default Register