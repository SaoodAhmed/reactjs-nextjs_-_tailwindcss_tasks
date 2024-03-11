import React from 'react'

const GridHeaderFooter = () => {
  return (
    <div className='grid grid-rows-[auto,1fr,auto] min-h-screen p-10 rounded-lg'>
        <div className=' bg-blue-100  rounded-t-md p-6 text-lg font-bold'>Header</div>
        <div className='bg-slate-50 p-6  text-lg font-bold'>Content</div>
        <div className=' bg-blue-100 rounded-b-md p-6 text-lg font-bold'>Footer</div>
    </div>
  )
}

export default GridHeaderFooter