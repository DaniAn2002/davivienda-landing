const MainHero = () => {
  return (
    <section className="flex flex-wrap justify-between items-center relative max-w-[1280px] mb-10 mx-4 md:justify-evenly md:mx-auto lg:justify-around">
      <div className="max-full text-center sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] md:text-start lg:max-w-[500px]">
        <h1 className="text-4xl block text-[#ED1C27] tracking-wide font-bold mb-4 sm:text-[calc(2.5rem+2vw)] md:text-[4.2rem]/[1] lg:text-[5.7rem]">
          Hackatón Davivienda
        </h1>
        <p className="text-2xl mb-2 text-pretty sm:text-3xl md:text-balance lg:text-4xl">
          Primer Hackatón con jóvenes universitarios en <span className="text-blue-600">El Salvador</span>
        </p>
        <a href="#" className="block text-xs mb-5 hover:underline min-[425px]:text-sm hover:decoration-[#ED1C27] hover:text-[#ED1C27]">Powered by DaviPlata</a>
        <a href="#" className="block rounded-3xl text-white font-bold text-lg bg-red-600 p-5 mb-5 w-fit mx-auto sm:text-2xl md:mx-0 hover:bg-rose-700 hover:shadow-xl hover:shadow-slate-950/40 hover:scale-105">Inscribase aquí</a>
      </div>
      <img src="https://res.cloudinary.com/dk2oxzxoo/image/upload/v1708385914/kodigo-Davivienda/hero-clean_jtgyno.png"
        alt="hero-img" className="w-full rounded-[10%] sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] lg:max-w-[500px]" />
    </section>
  )
}

export default MainHero