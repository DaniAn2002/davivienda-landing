import hero from '../assets/home/hero-clean.png'

const MainHero = () => {
  return (
    <section id="home" className="flex flex-wrap justify-between items-center relative max-w-[1280px] mx-4 pt-20 md:justify-evenly md:mx-auto lg:justify-around">
      <div className="max-full text-center sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] md:text-start lg:max-w-[500px]">
        <h1 className="text-4xl block text-davivienda-red tracking-wide font-bold mb-4 sm:text-[calc(2.5rem+2vw)] md:text-[4.2rem]/[1] lg:text-[5.7rem]">
          Hackathon Davivienda
        </h1>
        <p className="text-2xl mb-2 text-pretty sm:text-3xl md:text-balance lg:text-4xl">
          Primera Hackathon con jóvenes universitarios en <span className="text-davivienda-red font-medium">El Salvador</span>
        </p>
        <a href="https://www.daviplata.sv/" target="_blank" className="block text-xs w-fit mb-5 mx-auto sm:mb-6 md:mx-0 hover:underline min-[425px]:text-sm hover:decoration-davivienda-red hover:text-davivienda-red">Powered by DaviPlata</a>
        <a href="https://forms.gle/QVHpSVtXZ33TsanTA" target="_blank" className="block rounded-3xl text-white font-bold text-xl bg-red-600 p-5 mb-4 w-fit mx-auto sm:text-2xl sm:p-6 md:text-3xl md:p-7 md:mx-0 lg:text-4xl lg:p-8 hover:bg-rose-700 hover:shadow-xl hover:shadow-slate-950/40 hover:scale-105">Inscríbete aquí</a>
      </div>
      <img src={hero}
        alt="hero-img" className="w-full rounded-[10%] sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] lg:max-w-[500px]" />
    </section>
  )
}

export default MainHero