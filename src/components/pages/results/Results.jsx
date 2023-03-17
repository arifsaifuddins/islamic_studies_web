import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FiSearch } from 'react-icons/fi'
import { Outlet, useNavigate } from 'react-router-dom'

const Results = () => {
  const nav = useNavigate()
  return (
    <>
      <Helmet>
        <title>Islamic Studies | نتائج الكليات</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>النتائج للكليات</h1>
      </div>
      <div className="bg-white border-t-4 border-blue-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute rounded-bl-lg bg-blue-600 w-max text-white'>النتائج للكليات</h2>
          <div className="mx-auto lg:w-[900px] w-full leading-9 py-32 relative">
            <input onChange={(e) => e.target.value == '' ? nav('/results') : nav(`/results/s/${e.target.value}`)} type="text" className='bg-transparent text-base py-2 outline-none shadow-none  w-full pl-4 pr-12 border rounded-lg border-blue-600' placeholder='ابحث عن نتائج' />
            <div className="p-2 text-2xl rounded-lg text-blue-600 absolute right-1 top-[130px]">
              <FiSearch />
            </div>
            <p className="mb-10 mt-8 text-center text-xl font-bold text-blue-600">جميع النتائج لكليات الدراسات الإسلامية</p>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Results
