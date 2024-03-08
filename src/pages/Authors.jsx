import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import kodiAuthors from "./KodiAuthors"
export const Authors = () => {



  return (
    <>

      <Navbar />
      <section>
        <h1 className="text-center text-3xl font-bold pt-20 mb-5">Kodigo Team</h1>
        <div className="flex flex-wrap gap-1 justify-evenly relative max-w-[1280px] mx-4 sm:mx-0 md:mx-auto lg:justify-around items-center me-4">
          {kodiAuthors.map((author, index) => (
            <a key={index} href={author.github} className="block max-w-[425px] w-full mx-auto lg:w-1/4 group relative bg-black my-4 sm:w-5/12 sm:mx-0 md:max-w-[375px]">
              <img
                alt={author.name}
                src={author.img}
                className="relative w-full aspect-square opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="absolute bottom-0 p-4 sm:p-6 lg:p-8">
                <p style={{ textShadow: '1px 1px 1px red' }} className="text-sm font-medium uppercase tracking-widest text-red-500">Developer</p>
                <p style={{ textShadow: '1px 1px 1px black' }} className="text-xl font-bold text-white sm:text-2xl">{author.name}</p>
              </div>

              <div className="absolute bottom-0 right-0 p-4 pb-8 sm:pb-16 md:pb-14">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                    Kodigo
                  </p>
                </div>
              </div>

            </a>
          ))}
        </div>
      </section>
      <Footer />

    </>
  )
}

