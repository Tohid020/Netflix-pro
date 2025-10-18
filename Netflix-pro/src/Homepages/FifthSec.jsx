import React from 'react'

const FifthSec = () => {
  return (
<>
<div className='bg-black w-full h-screen'>
<h1 className='text-white text-center p-[20px] text-xl'>Ready to watch? Enter your email to create or restart your membership.</h1>

<input  className='border-1 outline-none border-white ml-[380px] w-[430px] h-[50px] mt-[20px]  rounded-sm placeholder:text-white p-4' type='text' placeholder='Email address'/>
<button className='text-white w-[150px] h-[50px]  bg-red-600 ml-[10px] font-bold text-xl rounded-sm' >Get Started {">"}</button>
<p className='text-white/80 ml-[130px] mt-[70px] text-lg' >Questions? Call <u> 000-800-919-1743</u></p>

{/* List */}
<div className='flex text-white/80 gap-[150px] mt-[40px] '>
<ol className=' text-lg ml-[160px] mt-[20px]'>
    <li><u>FAQ</u></li>
    <li><u>Investor Relations</u></li>
    <li><u>Privacy</u></li>
    <li><u>Speed Test</u></li>
</ol>

<ol className=' text-lg  mt-[20px]'>
    <li><u>Help Centre</u></li>
    <li><u>Jobs</u></li>
    <li><u>Cookie Preferences</u></li>
    <li><u>Legal Notices</u></li>
</ol>


<ol className=' text-lg  mt-[20px]'>
    <li><u>Account</u></li>
    <li><u>Ways to Watch</u></li>
    <li><u>Corporate Information</u></li>
    <li><u>Only on Netflix</u></li>
</ol>

<ol className=' text-lg  mt-[20px]'>
    <li><u>Media Centre</u></li>
    <li><u>Terms of Use</u></li>
    <li><u>Contact Us</u></li>
  
</ol>


</div>


<button  className='border-2 outline-none border-white w-[120px] h-[35px] mt-[40px]  ml-[150px]'>
  <select  className=' text-white bg-black text-lg'>
    <option>English</option>
  <option>Hindi</option>
 </select>
</button>
<p className='text-white/80 ml-[150px] text-sm mt-[10px] '>Netflix India</p>
<p className='text-white/80 ml-[150px] text-sm mt-[10px]'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<u> Learn more.</u></p>

</div>
</>
  )
}

export default FifthSec