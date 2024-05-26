import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    console.log('Navbar Rendered');
  return (
    <nav className="flex justify-between items-center p-[25px] font-PoppinsBold shadow-lg">
      <h1 className="text-xl"><Link to="/">SpaceX Project</Link></h1>
      <ul className="flex justify-between">
        <li className="mx-10">
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
            <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
