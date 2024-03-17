import React from 'react'

const GridHorizentalForm = () => {
  return (
    <div className='grid grid-cols-[auto,1fr] items-center p-8'>
        <label>Full Name</label>
        <input className='px-4 py-2 rounded-md ' placeholder='Full Name'/>
        <label>Email Address</label>
        <input className='px-4 py-2 rounded-md ' placeholder='Full Name'/>
        <button className='rounded-full bg-pink-600 text-white py-2 px-4 col-start-1 col-end-2'>Create Account</button>
    </div>
  )
}

export default GridHorizentalForm