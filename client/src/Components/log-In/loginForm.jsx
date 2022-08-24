import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'

const LoginForm = () => {
  return (
      <form className='text-center min-w-[600px]'>
          <div id="form-inner" className='bg-[#174DE3] flex flex-col align-middle content-center px-[100px] pt-[30px] mx-[50px] my-[100px] rounded-3xl shadow-lg --tw-shadow-color: #103233'>
              <h2 className="uppercase text-4xl text-white font-bold align-middle mb-[3rem]">Ingresar</h2>
              <div id="form-group">
                <div id="user-group"className='flex justify-center gap-3 p-2 m-2'>
                    <div className='bg-[#fff] rounded-lg'>
                        <AiOutlineUser size="30"/>
                    </div>
                    <label htmlFor="User" className='text-xl text-white font-bold pr-[36px]'>Usuario:</label>
                    <input type="text" name="user" id="user"/>
                </div>
                <div id="pass-group"className='flex justify-center gap-3 p-2 m-2'>
                    <div className='bg-[#fff] rounded-lg'>
                        <RiLockPasswordLine size="30"/>
                    </div>
                    <label htmlFor="password" className='text-xl text-white font-bold'>Contraseña:</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div id='submitgroup'className='grid py-10 my-5'>
                    <input type='submit' value='Ingresar' className='text-xl text-white font-bold uppercase bg-[#3869E8] rounded-lg p-2 mb-[60px] cursor-pointer hover:scale-110 duration-100'/>
                    <a href='#' className='text-white hover:underline underline-offset-8'>¿Has olvidado tu contraseña?</a>
                </div>
              </div>
          </div>
      </form>  
  )
}

export default LoginForm