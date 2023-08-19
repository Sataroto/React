function Paciente() {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl ">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
                    <span className="font-normal normal-case">Hook</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:
                    <span className="font-normal normal-case">Pablo</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">email:
                    <span className="font-normal normal-case">ger.a@something.com</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta:
                    <span className="font-normal normal-case">10 de diciembre del 2022</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:
                    <span className="font-normal normal-case">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, adipisci sunt perspiciatis ad dicta totam deserunt debitis possimus voluptatibus, alias perferendis iste consectetur. Ea suscipit perspiciatis debitis repellendus doloribus? Blanditiis?</span>
                </p>
            </div>
    );
}

export default Paciente;