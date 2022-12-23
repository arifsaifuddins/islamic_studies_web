import React from 'react'
import { Helmet } from 'react-helmet'
import AdminField from './fields/Admin'
import AnnoucField from './fields/Annouce'
import FeesField from './fields/Fees'
import HaikalField from './fields/Haikal'
import PostField from './fields/Post'
import TasjeelField from './fields/Tasjeel'
import VisMissField from './fields/VisMiss'

const Admin = () => {
  return (
    <>
      <Helmet>
        <title>Islamic Studies | إشراف موقع الكلية</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>إشراف موقع الكلية</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>برامج كلية الدراسات الإسلامية</h2>
          <div className="mx-auto  lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="relative w-full mx-auto p-3 rounded-lg shadow">
              <PostField />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:left-0 left-4 rounded-br-lg bg-yellow-600 w-max text-white'>إعلانات ومشرف كلية الدراسات الإسلامية</h2>
          <div className="mx-auto flex flex-col gap-8 xl:flex-row lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="relative w-full mx-auto p-3 rounded-lg bg-white h-max shadow">
              <AdminField />
            </div>
            <div className="relative w-full mx-auto p-3 rounded-lg bg-white h-max shadow">
              <AnnoucField />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>التعريف والهيكل الوظيفي للكلية</h2>
          <div className="mx-auto flex flex-col gap-8 xl:flex-row lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="relative w-full mx-auto p-3 rounded-lg shadow h-max">
              <VisMissField />
            </div>
            <div className="relative w-full mx-auto p-3 rounded-lg shadow h-max">
              <HaikalField />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:left-0 left-4 rounded-br-lg bg-yellow-600 w-max text-white'>التسجيل والقبول والشروط للكلية</h2>
          <div className="mx-auto flex flex-col gap-8 xl:flex-row lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="relative w-full mx-auto p-3 rounded-lg bg-white h-max shadow">
              <TasjeelField />
            </div>
            <div className="relative w-full mx-auto p-3 rounded-lg bg-white h-max shadow">
              <FeesField />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin
