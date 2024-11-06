import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const  Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='flex justify-between px-10 lg:px-24 py-8'>
      <div>
        <img 
          src="https://cdn.prod.website-files.com/639c4f6c935459cee66e821d/639c5df7c9a6a24b0d1f067f_ReelTrak-Logo-Horizontal-NoPadding.svg" 
          alt="ReelTrak Logo" 
        />
      </div>

      <div className='hidden md:flex list-none gap-10'>
        <li>Production</li>
        <li>Store</li>
        <li>About Us</li>
        <li>Sign Up</li>
        <div>
          <button className='h-8 w-24 bg-sky-400 rounded-md'>Login</button>
        </div>
      </div>

      <div className='md:hidden flex items-center'>
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className='absolute top-16 right-0 bg-white w-full flex flex-col items-center list-none gap-4 p-4 md:hidden'>
          <li className='  cursor-pointer' >Production</li>
          <li className=' cursor-pointer'>Store</li>
          <li className=' cursor-pointer'>About Us</li>
          <li className=' cursor-pointer'>Sign Up</li>
          <button className='h-8 w-24 bg-sky-400 rounded-md'>Login</button>
        </div>
      )}
    </div>
  );
}
export default Header