import React from 'react'

const Firstsec = () => {
  return (
   <>
   {/* images background */}
   <div className='realtive   h-screen'>
<p className=' absolute inset-0    h-screen  bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_large.jpg)]' ></p>

{/* overlay black color */}
<div className="absolute inset-0 bg-black/60">

{/* header */}
<div className='flex  ml-[40px]'>
<img  className='p-[40px]' src='public/Netflixlogo.png' alt='img' />
<button  className='border-2 outline-none border-white w-[90px] h-[30px] mt-[40px]  ml-[800px]'>
  <select  className=' text-white bg-black'>
    <option>English</option>
  <option>Hindi</option>
 </select>
</button>
<button className='text-white ml-[20px]  text-lg  w-[65px] h-[30px] mt-[40px] text-center font-bold rounded-sm bg-red-600 '>Sigin</button>
</div>

{/* heading and button */}
<div>
<h1 className='text-white text-center font-bold text-6xl mt-[40px]'>Unlimited movies, TV <br/>shows and more</h1>
<p className='text-white text-center font-bold text-2xl mt-[15px]'>Starts at ₹149. Cancel at any time.</p>
<p className=' text-white text-center  text-xl mt-[15px]'>Ready to watch? Enter your email to create or restart your membership.</p>
<input  className='border-1 outline-none border-white ml-[340px] w-[430px] h-[50px] mt-[20px]  rounded-sm placeholder:text-white p-4' type='text' placeholder='Email address'/>
<button className='text-white w-[150px] h-[50px]  bg-red-600 ml-[10px] font-bold text-xl rounded-sm' >Get Started {">"}</button>
</div>


</div>
 </div>
   
   
   </>
  )
}

export default Firstsec


