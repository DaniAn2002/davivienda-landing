const MainHero = () => {
  return (
    <section className="flex flex-row justify-around mx-auto items-center hero-content">
      <div className="p-10">
        <h1 className="text-8xl block text-[#ED1C27] tracking-wide font-bold mb-4 text-hero">
          Primer Hackatón
        </h1>
        <p className="text-4xl mb-2">Innovación abierta con jóvenes universitarios en <span className="text-blue-800">El Salvador</span></p>
        <a href="#" className="block text-sm mb-5 hover:underline hover:decoration-[#ED1C27] hover:text-[#ED1C27]">Powered by DaviPlata</a>
        <a href="#" className="block rounded-3xl text-white font-bold bg-red-600 p-5 text-2xl mb-5 w-fit hover:shadow-xl hover:shadow-slate-950/40">Inscribase aquí</a>
      </div>
      <img src="https://res.cloudinary.com/dk2oxzxoo/image/upload/v1708385914/kodigo-Davivienda/hero-clean_jtgyno.png"
        alt="hero-img" className="rounded-[10%] hero-img"/>
    </section>
  )
}

export default MainHero