const Register = () => {
    return <>
        <section className="grid grid-rows-1 text-center bg-register">
            <div className="grid grid-cols-2 ">
                <div className="p-5 m-5">
                    <label htmlFor="" className="font-bold text-white text-2xl">¡Participa y haz historia en el Hackatón de Pagos Universitarios!</label>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1708545394/davi/sacdfba7gty3ygahcrwj.png" alt="" className="img-register" />
                </div>
            </div>
            <div className="text-right">
                <button className=" rounded-2xl text-right text-white font-bold bg-red-600 p-5 text-2xl m-5">Inscribase y participe <span></span></button>
            </div>
        </section>
        <section className=" text-center p-10 tracking-wider">
            <p className="text-center text-black text-2xl">
                Mientras tanto, <span className="font-bold">vaya por las fotocopias o las onces, </span><span className=" text-red-600 italic font-bold underline underline-offset-8">descangando su DaviPlata</span>
            </p>
        </section>
    </>
}
export default Register