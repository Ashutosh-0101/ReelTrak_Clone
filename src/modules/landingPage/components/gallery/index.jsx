import React from "react";

const Gallery = () => {
  return (
        <div className="flex flex-col lg:flex-row px-10 lg:px-24 gap-4 lg:gap-10 justify-center lg:h-screen py-20 bg-slate-100">
        <div className="flex gap-10 lg:w-6/12 w-full  ">
        <div >
           
           <img src="https://images.stockcake.com/public/4/4/d/44d4a8d0-2533-4429-8fcd-e9eb78ca0268_large/futuristic-technology-portrait-stockcake.jpg" alt=""
            className=" h-[12rem] lg:h-[20rem] w-[16.75rem] mb-10 rounded-md " />
         
          
           <img src="https://images.stockcake.com/public/4/4/d/44d4a8d0-2533-4429-8fcd-e9eb78ca0268_large/futuristic-technology-portrait-stockcake.jpg" alt=""
            className=" h-[12rem] lg:h-[20rem] w-[16.75rem] rounded-md " />
          
        </div>
        <div className="mt-10">
        <img src="https://images.stockcake.com/public/4/4/d/44d4a8d0-2533-4429-8fcd-e9eb78ca0268_large/futuristic-technology-portrait-stockcake.jpg" alt="" 
        className="  h-[12rem] lg:h-[20rem] w-[16.75rem] mb-10 rounded-md"/>
        <img src="https://images.stockcake.com/public/4/4/d/44d4a8d0-2533-4429-8fcd-e9eb78ca0268_large/futuristic-technology-portrait-stockcake.jpg" alt=""
        className=" h-[12rem] lg:h-[20rem] w-[16.75rem] rounded-md" />
        </div>
      </div>
      <div className=" lg:w-6/12 w-full  mt-10">
        <h4 className=" text-sky-400">REEL TRAK</h4>
        <h2 className=" text-4xl my-4 font-bold">REEL TRAK: WHO WE ARE <br /> AND WHAT WE DO</h2>
        <p className=" text-slate-500 leading-8 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sunt
          modi ea, tenetur enim reprehenderit, nam itaque dicta commodi non quos
          laudantium. Ducimus aliquid laboriosam iure debitis ut! Totam quia aut
          vel excepturi, dignissimos, minus, veritatis ullam dicta molestiae quo
          nulla consequuntur minima maxime adipisci tempora? Culpa ullam quos
          reprehenderit,ut vitae impedit magni odio illo sunt ab eaque quibusdam
          consequuntur minus, pariatur tenetur vel necessitatibus animi! Nisi,
          perferendis? Eum, adipisci rerum temporibus animi, illo consequuntur
          non placeat aliquam alias, quibusdam praesentium fugit quod possimus
          nostrum ducimus saepe eaque odio ea voluptate? Deleniti debitis
          repellat magni beatae quisquam ut sint cum eum, qui nisi quaerat in
          facilis molestiae animi soluta consequuntur vero reprehenderit est
          atque optio. Suscipit, at unde? Dolorem, harum molestiae nulla
          quisquam cum nostrum fugit labore laudantium adipisci sed a tempore
          necessitatibus ad esse. Itaque consectetur commodi molestias possimus
          laborum id, ut dolorum velit labore voluptas debitis voluptates.
        </p>
        <button className='h-12 w-32 bg-sky-400 p-2 rounded-md my-10'>Explore More</button>
      </div>
    </div>
  );
};

export default Gallery;
