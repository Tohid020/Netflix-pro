import React, { useState } from 'react'
import { GrAdd, GrSubtract } from "react-icons/gr";

const FourSec = () => {

    const [open ,Setopen] = useState(false);
  
  return (
<>
<div className='  bg-black w-full h-screen p-[10px] '>
<h1 className='text-white ml-[130px]  mt-[40px] text-2xl font-semibold'>Frequently Asked Questions</h1>


{/* Card  1*/}
<div className=' relative w-[1000px] h-[90px] bg-black/80  ml-[120px] mt-[30px] border-2 border-white'>
<h1 className='text-3xl text-white p-[25px]'>What is Netflix?</h1>
<button  onClick={()=>Setopen(!open)}   className=' absolute bottom-8 left-238 text-white text-3xl cursor-pointer'> 
 <GrAdd  />   
    </button>  
</div>
{ open &&( <div className=' relative w-[1000px] h-[260px] bg-black/80  ml-[120px] mt-[3px] border-2 border-white'>
<h1 className='text-3xl text-white p-[25px]'>Netflix is a streaming service that offers a wide variety of award-winning 
TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
</h1>

</div>  
)}





     
</div>
</>
  )
}

export default FourSec