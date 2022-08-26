import React from 'react'
import LogoUni from '../../Assets/logo192.png'

function Footer() {
  return (
    <>
      <footer className='grid w-full h-[16rem] bg-black items-center select-none'>
				<div className='logo-container flex flex-row-reverse'>
					<a href='#' alt='logoUni'>
						<img src={LogoUni} alt='Logo Image' className='w-[200px]' />
					</a>
				</div>
				<div className='text-center'>
					<p className='text-white font-bold'>Todos los derechos reservados.</p>
				</div>
      </footer>
    </>
  )
}

export default Footer