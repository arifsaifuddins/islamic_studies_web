import React from 'react'
import { Helmet } from 'react-helmet'
import { FiSearch, FiSliders } from 'react-icons/fi'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Programs = () => {
  const nav = useNavigate()
  return (
    <>
      <Helmet>
        <title>Islamic Studies | البرامج والأخبار والمؤتمرات</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>البرامج والأخبار</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>البرامج والأخبار والمؤتمرات</h2>
          <div className="mx-auto lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="flex-row-reverse flex items-center gap-4 relative">
              <input onChange={(e) => e.target.value == '' ? nav('/programs') : nav(`/programs/s/${e.target.value}`)} type="text" className='bg-transparent text-base py-2 outline-none shadow-none text-end w-full pl-4 pr-12 border rounded-lg border-yellow-600' placeholder='ابحث عن برنامج' />
              <div className="p-2 text-2xl rounded-lg text-yellow-600 absolute right-2">
                <FiSearch />
              </div>
              <div className="p-2 cursor-pointer text-2xl relative rounded-lg bg-yellow-600 text-white" onClick={() => { document.querySelector('.filter').classList.toggle('hidden'); document.querySelector('.filter').classList.toggle('flex') }}>
                <FiSliders />
                <div className="flex-col hidden text-base filter items-end text-slate-800 rounded-lg shadow overflow-hidden absolute w-52 left-0 z-20 top-[120%] bg-white">
                  <Link to="/programs" className='py-2 px-3 hover:underline border-b w-full text-end'>إظهار الكل</Link>
                  <Link to="/programs/c/program" className='py-2 px-3 hover:underline border-b w-full text-end'>البرامج</Link>
                  <Link to="/programs/c/news" className='py-2 px-3 hover:underline border-b w-full text-end'>الأخبار</Link>
                  <Link to="/programs/c/muktamar" className='py-2 px-3 hover:underline border-b w-full text-end'>المؤتمرات</Link>
                  <Link to="/programs/c/bachelor" className='py-2 px-3 hover:underline border-b w-full text-end'>البكالوريوس</Link>
                  <Link to="/programs/c/master" className='py-2 px-3 hover:underline border-b w-full text-end'>الماجستير</Link>
                  <Link to="/programs/c/phd" className='py-2 px-3 hover:underline border-b w-full text-end'>الدكتوراه</Link>
                </div>
              </div>
            </div>
            <p className="my-8 text-center text-lg font-bold text-yellow-600">جميع البرامج والمؤتمرات والأخبار</p>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Programs
