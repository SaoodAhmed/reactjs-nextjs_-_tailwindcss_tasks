import React from 'react'

const gridSideNav = () => {
  return (
    <div className='grid grid-cols-[22rem,1fr] min-h-screen p-10 rounded-lg'>
        <div className='bg-pink-700 font-bold text-lg text-white rounded-lg'>sidebar</div>
        <div className='bg-slate-50 font-bold text-lg rounded-lg'>Content</div>
    </div>
  )
}

export default gridSideNav