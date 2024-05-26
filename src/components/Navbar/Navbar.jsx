import React from 'react';

function Navbar() {
	return (
		<nav className="flex justify-between items-center p-[25px] font-PoppinsBold shadow-lg">
			<h1 className='text-xl'>SpaceX Project</h1>
			<ul className="flex justify-between">
				<li className=' mx-10'>
					<a>Sign In</a>
				</li>
				<li>
					<a>Sign Up</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
