import React, { useState } from "react";
import CountUp from "react-countup";
const Customers = () => {

  return (
    <div className="px-10 lg:px-24 py-20 border-b-4">
      <h3 className=" text-xl text-sky-400 mb-5"> MILESTONE</h3>

     
      <div className="flex flex-col lg:flex-row justify-between my-4">
        <div className=" lg:w-4/12 w-full font-bold text-2xl lg:text-4xl">
          DISCOVER THE <br />
          INDUSTRIES FINEST VENDORS
        </div>
        <div className=" lg:w-6/12 w-full py-4 text-slate-500 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt sequi
          dicta adipisci unde blanditiis quos earum iure quam eius Lorem ipsum
          dolor sit, amet consectetur
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-10  mt-10">
        <div className="w-full lg:w-3/5 ">
          <img
            src="https://media.licdn.com/dms/image/sync/v2/D5627AQFt_9rcU0DdiA/articleshare-shrink_800/articleshare-shrink_800/0/1716300155964?e=2147483647&v=beta&t=bgR3lyPQTFlXZQRLOYY3Jd_GdmXXowTDBLV0fZbPUsE"
            alt=""
            className=" w-[100.5rem]"
          />
        </div>
        <div className=" text-center lg:w-2/5  px-20 py-5 bg-black text-yellow-200 rounded-xl ">
          <div className="border-b-4 py-5">
            <h1 className="text-2xl lg:text-6xl font-bold mb-2">
                <CountUp 
                start={1}
                end={80}
                duration={2} 
                enableScrollSpy
                />+
                </h1>
            <h3 className="text-xl lg:text-2xl font-semibold">Years of Exprience</h3>
          </div>
          <div className="border-b-4 py-5">
            <h1 className="text-2xl lg:text-6xl font-bold mb-2">
            <CountUp 
                start={1}
                end={1600}
                duration={2} 
                enableScrollSpy
                />+</h1>
            <h3 className="text-xl lg:text-2xl font-semibold">Successfull Projects</h3>
          </div>
          <div className="border-b-4 py-5">
            <h1 className="text-2xl lg:text-6xl font-bold mb-2"><CountUp 
                start={1}
                end={98}
                duration={2}
                enableScrollSpy />%</h1>
            <h3 className="text-xl lg:text-2xl font-semibold">Client Satisfaction Rate </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
