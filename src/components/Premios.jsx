export const Premios = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center m-2">
                <h1 className="rounded-full font-bold text-6xl text-center p-10">
                    Premios
                </h1>
            </div>
        <div className="flex flex-row max-w-full p-6 bg-white border border-gray-200 rounded-lg text-centered justify-center items-center">
            
            <div className="flex flex-col justify-center items-center m-10 block max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-red-100 dark:bg-red-700 dark:border-red-700 dark:hover:bg-red-700">
                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center">$3000 dolares</h5>
                <p className="font-normal text-white text-center text-xl">Primer Lugar</p>
            </div>
            <div className="flex flex-col justify-center items-center m-10 block max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-red-100 dark:bg-red-700 dark:border-red-700 dark:hover:bg-red-700">
                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center">$2000 dolares</h5>
                <p className="font-normal text-white text-center text-xl">Segundo Lugar</p>
            </div>
            <div className="flex flex-col justify-center items-center m-10 block max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-red-100 dark:bg-red-700 dark:border-red-700 dark:hover:bg-red-700">
                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center">$1000 dolares</h5>
                <p className="font-normal text-white text-center text-xl">Tercer Lugar</p>
            </div>
        </div>
        <div className="pb-100"> </div>
        </>
)}