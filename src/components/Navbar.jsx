export const Navbar = () => {
    return (
        <nav className="sticky top-0 px-12 bg-color-nav navbar-font">
            <ul className="flex justify-between">
                <div className="flex justify-start">
                    <li className="px-8 -mr-6"><img className="davivienda-navbar-img" src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/davivienda-landing/uxszluory8yt2ilgqrgw" alt="" /></li>
                    <li className="px-8 text-xl pt-4"><a href="">Home</a></li>
                    <img src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/davivienda-landing/zgx46rn03ikuckzdizdv" className="davivienda-navbar-icons" alt="" />
                    <li className="px-8 text-xl pt-4"><a href="">Sobre Nosotros</a></li>
                    <img src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/davivienda-landing/ihnqgocjkdq4dgqhv1he" className="davivienda-navbar-icons-light" alt="" />
                    <li className="px-8 text-xl pt-4"><a href="">Contactanos</a></li>
                    <img src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/davivienda-landing/w5ubkj9dxrcceuqejwfm" className="davivienda-navbar-icons-light" alt="" />
                </div>
                <div className="flex">
                    <li><button className="px-8 text-xl py-2 bg-inscribete"><a href="">Registrate</a></button></li>
                </div>
            </ul >
        </nav >
    )
}
