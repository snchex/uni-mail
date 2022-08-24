import React from 'react'

let today = new Date().toLocaleDateString('en-ca');

function GroupForm() {
  return (
    <div id="innerForm" className='flex justify-center m-[50px]'>
        <form className='bg-[#0C8AFA] rounded-lg px-[3rem] select-none'>
            <div id="title" className='text-2xl text-center font-bold py-10 px-2'>
                <h2>Registro de Creacion de email Grupal</h2>
            </div>
            <div className='grid'>
                <label className='text-white font-bold mb-[1rem] mx-8'>
                    Nombre del grupo:
                </label>
                <input type="text" name='name' className='mb-[1rem] mx-8 w-[60%]'/>
                <label className='text-white font-bold mb-[1rem] mx-8'>
                    Jefe de Departamento:
                </label>
                <input type="text" name='name' className='mb-[1rem] mx-8 w-[60%]'/>
                <label className='text-white font-bold mb-[1rem] mx-8'>
                    Departamento:
                </label>
                <input type="text" name='name' className='mb-[1rem] mx-8 w-[40%]'/>
                <label className='text-white font-bold mb-[1rem] mx-8'>
                    Integrantes:
                </label>
                <textarea className='mb-[1rem] mx-8 w-[80%] h-[250px]' />
                <label className='text-white font-bold mb-[1rem] mx-8'>
                    Tipo de solicitud
                </label>
                <select className='w-[25%] mx-8 pb-2 mb-[1rem]'>
                    <option value='email'>Correo</option>
                    <option value='memo'>Memo</option>
                </select>
                <label className='text-white font-bold mb-[1rem] mx-8'>
                    Fecha de creacion:
                </label>
                <input 
                    id="currentDate" 
                    type='date'
                    min={today}
                    max={today}
                    className='w-[25%] mx-8 pb-2 mb-[1rem]'>    
                </input>
                <input type='submit' value="Registrar" className='bg-[#174DE3] rounded-lg font-bold cursor-pointer flex justify-center p-2 mx-[35%] my-7 hover:scale-125 duration-100 hover:text-white'/>
            </div>
        </form>
    </div>
  )
}

export default GroupForm