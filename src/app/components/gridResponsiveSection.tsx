import React from 'react'

const GridResponsiveSection = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 items-center'>
        <img src='./vercel.svg ' className='sm:row-start-1 sm:row-end-3 md:col-start-2'/>
        <div className='md:col-start-1 md:text-right'>
            <h1 className=' text-blue-600 font-bold m-2 '>Lorem</h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet labore nam obcaecati aperiam tempore aliquam architecto ut natus earum.</p>
            <h1 className=' text-blue-600 font-bold m-2 '>Lorem</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet labore nam obcaecati aperiam tempore aliquam architecto ut natus earum.</p>
            <h1 className=' text-blue-600 font-bold m-2 '>Lorem</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet labore nam obcaecati aperiam tempore aliquam architecto ut natus earum.</p>
        </div>
        <div className=''>
            <h1 className=' text-blue-600 font-bold m-2 '>Loremaa</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet labore nam obcaecati aperiam tempore aliquam architecto ut natus earum.</p>
            <h1 className=' text-blue-600 font-bold m-2 '>Lorem</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet labore nam obcaecati aperiam tempore aliquam architecto ut natus earum.</p>
            <h1 className=' text-blue-600 font-bold m-2 '>Lorem</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet labore nam obcaecati aperiam tempore aliquam architecto ut natus earum.</p>
        </div>
        
    </div>
  )
}

export default GridResponsiveSection