import React from 'react'

const SecondSec = () => {
  return (
<>
  
  
<Card   img={'https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYgqP-FM9E4u1IbMtOKfqd2ha2nti95bI-jg9xOXxJAcO6Xj9hwy02O4dFu0-oZ_jSi-NQFHPZQwn1NO7eA5LVqqGZIfy9YPjg1G6GzZPMRODawEZXb_7Ks9Ryjl-xUANYCs.webp?r=d90'}  number={1}

/>




</>
  )
}

export default SecondSec







export const Card = ({img , number}) => {
  return (
  <>
  
  {/* Heading and bg */}
<div className='bg-black w-full h-screen'>
<h1 className='text-white font-bold ml-[50px] pt-[50px] text-3xl font-semibold'>Trending Now</h1>

{/* Card Section */}
<div className=' relative w-[230px] h-[300px] ml-[60px] mt-[20px] rounded-sm ml-[20px] flex gap-[80px]' >

<img className='w-full 'h-ful src={img} alt=''/>
<p className='absolute  top-[100px] -left-[25px] text-8xl text-white' >{number}</p>








</div>

</div>
  
  </>
  )
}
