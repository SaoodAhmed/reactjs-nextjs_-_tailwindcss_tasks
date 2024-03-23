import React from 'react'

const GridJustifyend = () => {
  return (
    <div className='grid grid-cols-[auto,auto,1fr] gap-16 p-8 bg-white'>
        <div>
            <h1 className='text-2xl font-semibold'>Cheese & Grill Resturant</h1>
            <p>ST. Marks Street</p>
        </div>
        <span className='self-start bg-gray-200 rounded-full px-6 py-1 mx-auto text-center flex items-center '>Kid Friendly</span>
        <img className='justify-self-end' src='/next.svg' height={250} width={250} alt=''/>


        <div>
            <h1 className='text-2xl font-semibold'>Cheese & Grill Resturant</h1>
            <p>ST. Marks Street</p>
        </div>
        <span className=' self-start bg-gray-200 rounded-full px-6 py-1 mx-auto text-center flex items-center '>Kid Friendly</span>
        <img className='justify-self-end' src='/next.svg' height={250} width={250} alt=''/>
    </div>
  )
}

export default GridJustifyend