import React from 'react'
import { Helmet } from 'react-helmet-async'

const Blank = () => {

  return (
    <>
      <Helmet>
        <title>Islamic Studies | 404</title>
      </Helmet>

      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>404 | غير موجودة</h1>
      </div>
    </>
  )
}

export default Blank
