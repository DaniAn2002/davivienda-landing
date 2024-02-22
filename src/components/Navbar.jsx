export const Navbar = () => {
    return (

        <div className="min-h-full">
            <nav style={{ backgroundColor: 'rgba(214,35,41,255)' }}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-14 w-14" src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/nrzpd2uy39chgynisq04" alt="Your Company" />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">

                                    <a href="#" className="text-gray-300 hover:bg-zinc-50 hover:text-black rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                                    <a href="#" className="text-gray-300 hover:bg-zinc-50 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Premios</a>
                                    <a href="#" className="text-gray-300 hover:bg-zinc-50 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Participantes</a>
                                    <a href="#" className="text-gray-300 hover:bg-zinc-50 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Hackaton</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        <a href="#" className="text-gray-300 hover:bg-zinc-50 hover:text-black block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
                        <a href="#" className="text-gray-300 hover:bg-zinc-50 hover:text-black block rounded-md px-3 py-2 text-base font-medium">Premios</a>
                        <a href="#" className="text-gray-300 hover:bg-zinc-50 hover:text-black block rounded-md px-3 py-2 text-base font-medium">Participantes</a>
                        <a href="#" className="text-gray-300 hover:bg-zinc-50 hover:text-black block rounded-md px-3 py-2 text-base font-medium">Hackaton</a>
                    </div>
                </div>
            </nav>


        </div>

    )
}
