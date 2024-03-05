import { useState } from 'react';

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const menu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(!menuOpen)
    }


    return (
        <div className="min-w-full fixed top-0 z-20">
            <nav style={{ backgroundColor: 'rgba(214,35,41,255)' }}>
                <div className="mx-auto max-w-7xl px-10 sm:px-10 lg:px-12">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/">
                                    <img className="h-14 w-14" src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/nrzpd2uy39chgynisq04" alt="Logo Davivienda" />
                                </a>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href='/#home' className="text-white hover:bg-zinc-50 hover:text-black rounded-md px-3 py-2 text-sm font-medium"> Inicio </a>
                                    <a href='/#participantes' className="text-white hover:bg-zinc-50 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Participantes</a>
                                    <a href='/#fechas' className="text-white hover:bg-zinc-50 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Fechas</a>
                                    <a href='/#premios' className="text-white hover:bg-zinc-50 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Premios</a>
                                    <a href='/#hackaton' className="text-white hover:bg-zinc-50 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Hackathon</a>

                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                                <a href='#' className="text-black bg-davivienda-smoke focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-zinc-50 hover:scale-105">
                                    Inscríbete
                                </a>
                            <div className="md:hidden">
                                <button onClick={menu} className="block text-white focus:outline-none">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {menuOpen ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            <a href='/#home' onClick={closeMenu} className="text-white hover:bg-zinc-50 hover:text-black block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
                            <a href='/#participantes' onClick={closeMenu} className="text-white hover:bg-zinc-50 hover:text-black block rounded-md px-3 py-2 text-base font-medium">Participantes</a>
                            <a href='/#fechas' onClick={closeMenu} className="text-white hover:bg-zinc-50 hover:text-black block rounded-md px-3 py-2 text-base font-medium">Fechas</a>
                            <a href='/#premios' onClick={closeMenu} className="text-white hover:bg-zinc-50 hover:text-black block rounded-md px-3 py-2 text-base font-medium">Premios</a>
                            <a href='/#hackaton' onClick={closeMenu} className="text-white hover:bg-zinc-50 hover:text-black block rounded-md px-3 py-2 text-base font-medium">Hackaton</a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};
