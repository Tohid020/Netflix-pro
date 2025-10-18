import React from 'react'

const Detail=[
  {
    heading:"Enjoy on your TV",
    paragrph:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    img:"public/Tvicon.png"
  },
{
    heading:"Download your shows to watch offline",
    paragrph:"Save your favourites easily and always have something to watch..",
    img:"public/Arrowicon.png"
  },
  {
    heading:"Watch everywhere",
    paragrph:"Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    img:"public/Rocketicon.png"
  },
{
    heading:"Watch everywhere",
    paragrph:"Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    img:"public/Emojiicon.png"
  },




]






const ThirdSec = () => {
  return (
<>
<Card/>

</>
  )
}

export default ThirdSec



export const Card = () => {
  return (
  <>
  <div className='bg-black w-full h-screen '>

<h1 className='text-white pt-[50px] ml-[30px] text-3xl font-bold' >More reasons to join</h1>
{/* Card */}
<div className='flex '>
{Detail.map((item,idx)=>(
<div className=" w-[265px] h-[320px] bg-[#1d1a33] ml-[50px] mt-[30px] rounded-sm ">
<h1 className='text-white pt-[25px] ml-[20px] font-bold text-2xl' key={idx}>{item.heading}</h1>
<p className='text-white mt-[10px] ml-[12px] mt-[20px]' key={idx}>{item.paragrph}</p>
<img className=' mt-[50px] ml-[180px]' key={idx} src={item.img}  alt='img'/>

</div>

))}
</div>
</div>
  
  </>
  )
}
