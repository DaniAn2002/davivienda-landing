import UJMD from "../assets/footer/UJMD.png"
import domo from "../assets/footer/domo-i.png"
import daviplata from "../assets/footer/daviplata.webp"
import davivienda from "../assets/footer/davivienda_letras.jpg"
import kodigo from "../assets/footer/kodigo.png"

export const Footer = () => {
    return (
        <>
            <footer style={{ backgroundColor: '#22262A' }}>
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="flex flex-wrap mb-6 md:mb-0 w-full sm:w-2/3 md:w-72 items-center gap-2 lg:justify-center lg:content-start">
                            <a href="https://www.davivienda.com.sv/" target="_blank" className="items-center w-full mb-4 mr-4">
                                <img src={davivienda} className="w-3/4 rounded-lg lg:mx-auto md:w-11/12" alt="Logo Davivienda" />
                            </a>
                            <a href="https://www.daviplata.com/wps/portal/daviplata" target="_blank" className="items-center w-1/5 md:my-1 md:w-2/5">
                                <img src={daviplata} className="" alt="Logo DaviPlata" />
                            </a>
                            <a href="https://www.ujmd.edu.sv/" target="_blank" className="items-center w-1/5 md:my-1 md:w-2/5">
                                <img src={UJMD} className="w-2/3 mx-auto" alt="Logo U. Matias" />
                            </a>
                            <a href="https://sites.google.com/davivienda.com/efectoi/efecto-i/domo-i" target="_blank" className="items-center w-1/5 md:w-2/5">
                                <img src={domo} className="w-11/12 mx-auto" alt="Logo Domo i" />
                            </a>
                            <a href="https://kodigo.org/" target="_blank" className="items-center w-1/5 md:w-2/5">
                                <img src={kodigo} className="w-11/12 mx-auto" alt="Logo Kodigo" />
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-4">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-davivienda-smoke uppercase">Portales Davivienda</h2>
                                <ul className="text-gray-400 font-medium text-opacity-85">
                                    <li className="mb-4">
                                        <div className="flex flex-col">
                                            <a target="_blank" href="https://www.davivienda.com.sv" className="hover:underline">Banco Davivienda</a>
                                        </div>
                                    </li>
                                    <li className="mb-4">
                                        <div className="flex flex-col">
                                            <a target="_blank" href="https://www.daviplata.sv" className="hover:underline">DaviPlata</a>
                                        </div>
                                    </li>
                                    <li className="mb-4">
                                        <div className="flex flex-col">
                                            <a target="_blank" href="https://www.misfinanzasencasa.com/seleccione-su-pais" className="hover:underline">Mis Finanzas en Casa</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col">
                                            <a target="_blank" href="https://jobs.airavirtual.com/davivienda_filiales" className="hover:underline">Trabaja con nosotros</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-davivienda-smoke uppercase">Contacto</h2>
                                <ul className="text-gray-400 font-medium text-opacity-85">
                                    <li className="mb-4">
                                        <div className="flex flex-col">
                                            <h3 >Centro de Contacto</h3>
                                            <a className="hover:underline">2556-0000</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-davivienda-smoke uppercase">Interes</h2>
                                <ul className="text-gray-400 font-medium text-opacity-85">
                                    <li className="mb-4">
                                        <div className="flex flex-col">
                                            <a target="_blank" href="https://www.davivienda.com.sv/#/personas/legal" className="hover:underline">Modelos de Escrituración</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col">
                                            <a target="_blank" href="https://www.davivienda.com.sv/#/personas/https://www.davivienda.com.sv/#/personas/atencion_cliente" className="hover:underline">Escribanos</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-davivienda-smoke uppercase">Legal</h2>
                                <ul className="text-gray-400 font-medium text-opacity-85">
                                    <li className="mb-4">
                                        <a href="https://www.davivienda.com.sv/#/personas/personas_legal" target="_blank" className="hover:underline">Politicas de privacidad</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Terminos &amp; Condiciones</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div>
                            <span className="text-sm text-gray-400 sm:text-center">© 2024
                                <a href="https://www.davivienda.com.sv/" target="_blank" className="hover:underline"> Banco Davivienda S.A.</a> todos los derechos reservados.
                            </span>
                            <a href="/authors" target="_blank" className="text-sm text-gray-400 ml-2">Autores</a>
                        </div>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="https://www.facebook.com/DaviviendaElSalvador/?locale=es_LA" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                                </svg>
                                <span className="sr-only text-white">Facebook page</span>
                            </a>

                            <a href="https://twitter.com/daviviendasalv?lang=es" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                    <path d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" />
                                </svg>
                                <span className="sr-only text-white">Twitter page</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
