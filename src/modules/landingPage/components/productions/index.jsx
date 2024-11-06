import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "../../../../Components/carousel";

const Production = () => {
  return (
    <div className="px-10 lg:px-24 py-10">
      <h3 className=" text-xl text-sky-400 mb-5"> PRODUCTION</h3>
      <div className="flex flex-col lg:flex-row justify-between my-4">
        <div className=" lg:w-4/12 w-full font-bold text-2xl lg:text-4xl">
          We Make Your <br />
          Business Stand Out
        </div>
        <div className=" lg:w-6/12 w-full py-4 text-slate-500 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt sequi
          dicta adipisci unde blanditiis quos earum iure quam eius Lorem ipsum
          dolor sit, amet consectetur
        </div>
      </div>
      {/* carausel */}
      <div className="mt-10 mb-20 border-b-4 py-20 ">
           <Carousel/>
      </div>
       {/* Download APP */}
      <div className="flex flex-col gap-10 lg:flex-row justify-between my-4">
        <div className=" lg:w-6/12">
          <h1 className=" text-4xl my-4 font-bold">
            Download The ReelTrak APP
          </h1>
          <p className=" lg:w-6/12 text-slate-500 leading-8 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
            dolore, asperiores harum exercitationem expedita cum libero qui
            quae.
          </p>
          <h3 className=" text-lg text-sky-400 mb-5">Download Our App</h3>
          <div className="flex gap-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPsFjlwKqZqxfVwyBMz0u8xPqiOuS-YUdzDw&s" className=" h-10 w-32" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPsFjlwKqZqxfVwyBMz0u8xPqiOuS-YUdzDw&s" className=" h-10 w-32" alt="" />

          </div>
         
        </div>
        <div className=" lg:w-6/12 lg:flex lg: justify-center">
          <img
            src="https://khetigaadi.com/images/mobile-app/mobile-app.png"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
};

export default Production;
