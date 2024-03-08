import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import kodiAuthors from "./KodiAuthors"
export const Authors = () => {



  return (
    <>

      <Navbar />
      <section className="flex flex-wrap justify-between  relative max-w-[1280px] mx-4 pt-20 md:justify-evenly md:mx-auto lg:justify-arounditems-center me-4">
        {kodiAuthors.map((author, index) => (
          <a key={index} href={author.github} className="group relative bg-black gap-2 my-2">
            <img
              alt={author.name}
              src={author.img}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-red-500">Developer</p>

              <p className="text-xl font-bold text-white sm:text-2xl">{author.name}</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                    Kodigo
                  </p>
                </div>
              </div>
            </div>
          </a>

        ))}
      </section>
      <Footer />

    </>
  )
}

