import React from 'react'
import Header from '../../Components/header'
import Gallery from './components/gallery'
import Customers from './components/customers'
import Studios from './components/studios'
import Production from './components/productions'
import Footer from '../../Components/footer'

const LandingPage = () => {
  return (
    <>
    <Header/>
    <div style={{ backgroundImage: `url("https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    className=' h-screen flex w-full '>
    <div className=' md:w-full lg:w-6/12 text-left content-center px-10 lg:px-24'>
          <h1 className='text-white font-bold md: text-2xl mb-4 lg:text-6xl '>
          Technology for the entertainment industry
          </h1>
          <p className='lg:text-2xl md: text-sm text-slate-500 text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint sunt non vel ab voluptatem quos ipsam architecto reprehenderit dolor.
             Delectus ipsum a pariatur optio hic vero dolorem sunt rem beatae dignissimos deserunt maiores laudantium provident itaque officia tenetur numquam vel omnis ad, quis quae nam adipisci placeat. A, eum.
          </p>
        </div>
    </div>
    <Gallery/>
    <Customers/>
    <Studios/>
    <Production/>
    <Footer/>
    </>
  )
}

export default LandingPage