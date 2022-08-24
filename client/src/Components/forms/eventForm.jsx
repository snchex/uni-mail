import React from 'react'

let today = new Date().toLocaleDateString('en-ca');
function EventForm() {
  return (
    <div id="innerForm" className='flex justify-center m-[50px]'>{/*Beggining of the Form*/}
        <form className='bg-[#0C8AFA] rounded-lg px-[3rem] select-none'>
            <div id="title" className='text-2xl text-center font-bold py-10 px-2'>
                <h2>Registro de Creacion de email para evento</h2>
            </div>
            <div className='grid'>{/* fields to be filled */}
                
                <label className='text-white font-bold mb-[1rem] mx-8'>
                    <p>Nombre u Ocasi&oacute;n del Evento:</p>
                </label>
                <input type="text" name='name' className='mb-[1rem] mx-8 w-[60%]'/>
                
                <label className='text-white font-bold mb-[1rem] mx-8'>
                    <p>Solicitante:</p>
                </label>
                <input type="text" name='name' className='mb-[1rem] mx-8 w-[60%]'/>
                
                <label className='text-white font-bold mb-[1rem] mx-8'>
                    <p>Responsable:</p>
                </label>
                <input type="text" name='name' className='mb-[1rem] mx-8 w-[60%]'/>
                
                <label className='text-white font-bold mb-[1rem] mx-8'>
                    <p>Departamento:</p>
                </label>
                <input type="text" name='name' className='mb-[1rem] mx-8 w-[40%]'/>
                
                <label className='text-white font-bold mb-[1rem] mx-8'>
                    <p>Tipo de solicitud</p>
                </label>
                
                <select className='w-[25%] mx-8 pb-2 mb-[1rem]'>
                    <option value='email'>Correo</option>
                    <option value='memo'>Memo</option>
                </select>
                
                <label className='text-white font-bold mb-[1rem] mx-8'>
                    <p>Fecha de creaci&oacute;n:</p>
                </label>
                <input 
                    id="currentDate" 
                    type='date'
                    min={today}
                    max={today}
                    className='w-[25%] mx-8 pb-2 mb-[1rem]'>    
                </input>
                
                <label className='text-white font-bold mb-[1rem] mx-8'>
                    <p>Fecha de culminaci&oacute;n:</p>
                </label>
                <input 
                    id="currentDate" 
                    type='date'
                    min={today}
                    className='w-[25%] mx-8 pb-2 mb-[1rem]'>    
                </input>
                
                <input type='submit' value="Registrar" className='bg-[#174DE3] rounded-lg font-bold cursor-pointer flex justify-center p-2 mx-[35%] my-7 hover:scale-125 duration-100 hover:text-white'/>
            
            </div>
        </form>
    </div>
  )
}

export default EventForm