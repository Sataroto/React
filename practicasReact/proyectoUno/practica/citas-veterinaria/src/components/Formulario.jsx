import {useState, useEffect} from 'react'
const Formulario = () => {
   
  const [nombre, setNombre] = useState('') //primera regla: en la parte superior del componente y dentro del componente
  //no definir un hook dentro dentro de un condicional
  //no se define despues del return
  //y solo definir hooks dentro del componente
  
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold" >Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-5" action="">
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
            </label>

          <input
            id="mascota" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  
            type="text"
            placeholder="Nombre de la mascota"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propetario
            </label>

          <input
            id="propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  
            type="text"
            placeholder="Nombre del propietario"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            email
            </label>

          <input
            id="email" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  
            type="email"
            placeholder="Direccion email del propietario"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
            </label>

          <input
            id="alta" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  
            type="date"
            placeholder="Fecha de cita"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
            </label>
          <textarea
          id="sintomas"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Describe los sintomas"
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
          value="Agregar paciente"

        
        />

      </form>
    </div>
  )
}

export default Formulario
