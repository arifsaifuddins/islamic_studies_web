import React from 'react'
import { Helmet } from 'react-helmet'
import { FiMonitor, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Haiah = () => {
  return (
    <>
      <Helmet>
        <title>Islamic Studies | هيئة التدريس</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>هيئة التدريس</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>هيئة التدريس لكلية الدراسات الإسلامية</h2>
          <div className="mx-auto lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="flex flex-col items-center md:flex-row-reverse gap-6 justify-between mb-20">
              <Link to='/haiah/lklkdlkd' className="flex flex-col items-center px-6 py-4 md:w-max w-full mx-auto pt-12 rounded-lg shadow bg-white">
                <div className="p-4 rounded-lg bg-purple-400 mb-4 text-white w-max text-2xl">
                  <FiUser />
                </div>
                <h3 className='text-yellow-600 font-bold'>عميد الكلية</h3>
                <h3 >د. أبوبكر حسن علي بخيت</h3>
              </Link>
              <a href='#' className="flex flex-col items-center px-6 py-4 md:w-max w-full mx-auto pt-12 rounded-lg shadow bg-white">
                <div className="p-4 rounded-lg bg-red-400 mb-4 text-white w-max text-2xl">
                  <FiMonitor />
                </div>
                <h3 className='text-yellow-600 font-bold'>مسجل الكلية</h3>
                <h3 >د. أبوبكر حسن علي بخيت</h3>
              </a>
              <a href='#' className="flex flex-col items-center px-6 py-4 md:w-max w-full mx-auto pt-12 rounded-lg shadow bg-white">
                <div className="p-4 rounded-lg bg-purple-400 mb-4 text-white w-max text-2xl">
                  <FiUser />
                </div>
                <h3 className='text-yellow-600 font-bold'>نائب العميد</h3>
                <h3 >د. أبوبكر حسن علي بخيت</h3>
              </a>
            </div>
            <div className="mt-20">
              <h2 className='text-lg text-white w-full px-4 py-2 bg-yellow-600 text-center'>قسم السنة وعلوم الحديث</h2>
              <ul className='bg-white shadow'>
                <li className='flex flex-row-reverse items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                  <p className='w-[65%] text-center'>الأسماء</p>
                  <div className='border-2 h-6 border-yellow-600' />
                  <p className='w-[30%] text-center'>الدرجة</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
              </ul>
            </div>
            <div className="mt-20">
              <h2 className='text-lg text-white w-full px-4 py-2 bg-yellow-600 text-center'>قسم السنة وعلوم الحديث</h2>
              <ul className='bg-white shadow'>
                <li className='flex flex-row-reverse items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                  <p className='w-[65%] text-center'>الأسماء</p>
                  <div className='border-2 h-6 border-yellow-600' />
                  <p className='w-[30%] text-center'>الدرجة</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
              </ul>
            </div>
            <div className="mt-20">
              <h2 className='text-lg text-white w-full px-4 py-2 bg-yellow-600 text-center'>قسم السنة وعلوم الحديث</h2>
              <ul className='bg-white shadow'>
                <li className='flex flex-row-reverse items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                  <p className='w-[65%] text-center'>الأسماء</p>
                  <div className='border-2 h-6 border-yellow-600' />
                  <p className='w-[30%] text-center'>الدرجة</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Haiah
