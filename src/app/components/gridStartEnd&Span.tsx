import React from 'react'

const GridStartEndSpan = () => {
  return (
    <div className=' grid grid-rows-[auto,1fr,auto] grid-cols-[22rem,1fr] min-h-screen p-8 '> 
            {/* col-span-2 = col-start-1 col-end-3 */}
        <div className='bg-gray-700 text-white col-start-1 col-end-3  p-2 rounded-t-md'>Header</div> 
        <div className='bg-gray-500 p-2'>Side Bar</div>
        <div className='bg-gray-50 p-2'>Main Content</div>

        {/* col-span-2 = col-start-1 col-end-3 */}
        <div className='bg-gray-700 text-white col-span-2 p-2 rounded-b-md'>Footer</div>
    </div>
  )
}

export default GridStartEndSpan