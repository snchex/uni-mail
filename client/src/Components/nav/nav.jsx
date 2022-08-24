import React, { useState } from 'react'
import { Link, BrowserRouter as Router} from "react-router-dom"
import "./nav.css"
import { navItems } from './navItems.js'
import DropdownList from './dropdown'

function Nav() {
	const [dropdown, setDropdown] = useState(false);
	return (
		<>
			<Router>
				<nav className='navbar bg-[#251834] w-full h-full hover:py-[60px]' >
					<ul className='nav-navItems flex justify-center h-[13vh] text-white items-center font-bold text-xl'>
						{/*SE RECORRE EL DICC PARA TRAER LOS ITEMS DEL NAV*/}
						{navItems.map((item) => {
							if(item.title === "Personales") {
								return (
									<li
										key={item.id}
										className={item.cName}
										onMouseEnter={() => setDropdown(true)}
										onMouseLeave={() => setDropdown(false)}
									>
										<Link to={item.path}>{item.title}</Link>
										{dropdown && <DropdownList />}
									</li>
								);
							}
							return (
								<li 
									key={item.id} 
									className={item.cName} 
									onMouseEnter={() => setDropdown(true)} 
									onMouseLeave={() => setDropdown(false)}
								>
                	<Link to={item.path}>{item.title}</Link>
									{dropdown && <DropdownList />}
              	</li>
							);
						})}
					</ul>
				</nav>
			</Router>
		</>
	)
}

export default Nav