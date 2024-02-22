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
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-14 w-14" src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/nrzpd2uy39chgynisq04" alt="Your Company" />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <button className="text-white hover:bg-zinc-50 hover:text-black rounded-md px-3 py-2 text-sm font-medium"> Home </button>
                                    <button className="text-white hover:bg-zinc-50 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Premios</button>
                                    <button className="text-white hover:bg-zinc-50 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Participantes</button>
                                    <button className="text-white hover:bg-zinc-50 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Hackaton</button>
                                </div>
                            </div>
                        </div>
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

                {menuOpen && (
                    <div className="md:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            <button onClick={closeMenu} className="text-white hover:bg-zinc-50 hover:text-black block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</button>
                            <button onClick={closeMenu} className="text-white hover:bg-zinc-50 hover:text-black block rounded-md px-3 py-2 text-base font-medium">Premios</button>
                            <button onClick={closeMenu} className="text-white hover:bg-zinc-50 hover:text-black block rounded-md px-3 py-2 text-base font-medium">Participantes</button>
                            <button onClick={closeMenu} className="text-white hover:bg-zinc-50 hover:text-black block rounded-md px-3 py-2 text-base font-medium">Hackaton</button>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};
