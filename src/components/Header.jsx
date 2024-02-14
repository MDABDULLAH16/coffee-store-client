import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='flex justify-center text-white bg-indigo-400 p-2'>
      <div>
        <Link className='ml-4 hover:text-orange-400  font-bold ' to='/'>
          Home
        </Link>
        <Link
          className='ml-4 hover:text-orange-400  font-bold '
          to='/addCoffee'
        >
          Add Coffee
        </Link>
        <Link
          className='ml-4 hover:text-orange-400  font-bold '
          to='/storeCoffee'
        >
          Store Coffee
        </Link>
        <Link className='ml-4 hover:text-orange-400  font-bold '>About Us</Link>
      </div>
    </div>
  );
};

export default Header;
