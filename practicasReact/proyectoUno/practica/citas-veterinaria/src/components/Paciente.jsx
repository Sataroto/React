function Paciente({paciente}) {
    const {nombre, dueno, email,alta,sintomas} = paciente
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl ">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
                    <span className="font-normal normal-case"> {nombre} </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:
                    <span className="font-normal normal-case"> {dueno} </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">email:
                    <span className="font-normal normal-case"> {email} </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta:
                    <span className="font-normal normal-case"> {alta} </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:
                    <span className="font-normal normal-case"> {sintomas} </span>
                </p>
                 <div className="flex justify-between mt-10" >
                    <button className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase rounded-lg "
                    type="button">
                        Editar
                        </button>
                    <button 
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase rounded-lg"
                    type="button">
                        Eliminar
                        </button>
                 </div>
            </div>
    );
}

export default Paciente;