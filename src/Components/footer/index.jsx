import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { LiaTwitterSquare } from "react-icons/lia";


const Footer = () => {
  return (
     <div className='px-10 lg:px-24 py-10 bg-black text-white'>
      <div className="flex flex-col lg:flex-row justify-between border-b-4 py-2 list-none" >
        <div className='w-full lg:w-3/12  '>
           <h1 className='font-bold text-2xl lg:text-4xl mb-4'>
               Let's Start a <br />
               Work Together
           </h1>
           <p className=' leading-8 mb-4 text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Molestias voluptatibus, quisquam dignissimos sit sequi recusandae iusto possimus perspiciatis mollitia ab?
           </p>
           <h2 className='font-bold text-lg lg:text-xl mb-2'>
Address
           </h2>
           <p className='mb-2'>
            132, My Street,KINSTOn, New York
           </p>
           <h2 className='font-bold text-lg lg:text-xl mb-2'>
             Give Us a Call
           </h2>
           <p className='mb-2'>
         (123) 123-123
           </p>
           <h2 className='font-bold text-lg lg:text-xl mb-2'>
           Send Us Email
           </h2>
           <p className='mb-2'>
             support@reeltrak.com
           </p>
        </div>
        <div>
          <h2 className='font-bold text-lg lg:text-xl mb-2'>
        Category
          </h2>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Term and Condition</li>
        </div>
        <div>
        <h2 className='font-bold text-lg lg:text-xl mb-2'>
        Legal
          </h2>
          <li>Term and Condition</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          
        </div>
    </div>
    <div className='flex gap-4 mt-4'>
        <FaInstagram/>
        <CiLinkedin/>
        <FaXTwitter/>
        <FaInstagram/>
        <CiLinkedin/>
        <FaXTwitter/>
        <LiaTwitterSquare/>
    </div>
    </div>
  )
}

export default Footer