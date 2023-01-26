import React, { useState } from 'react'
import { useEffect } from 'react'
import useCookies from 'react-cookie/cjs/useCookies'
import { Helmet } from 'react-helmet'
import { FiLogOut, FiTrash } from 'react-icons/fi'
import apis from '../../apis'
import { ConfirmAlert } from '../../confirm'
import AdminField from './fields/Admin'
import AnnoucField from './fields/Annouce'
import FeesField from './fields/Fees'
import HaikalField from './fields/Haikal'
import KuliatField from './fields/Kuliat'
import MawadField from './fields/Mawad'
import PostField from './fields/Post'
import TasjeelField from './fields/Tasjeel'
import TeacherField from './fields/Teacher'
import VisMissField from './fields/VisMiss'


const Admin = () => {
  const [cookies] = useCookies()
  const node = import.meta.env.VITE_NURL
  const php = import.meta.env.VITE_PURL

  const [Admins, setAdmins] = useState(null)
  const [Admin, setAdmin] = useState(null)
  const [cookie, _, removeCookie] = useCookies()

  useEffect(() => {
    apis.getAdmins().then(a => setAdmins(a.data))
    apis.getAdmin(cookie.id_admin).then(a => setAdmin(a.data[0]))
  }, [])

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
              <PostField url={php} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:left-0 left-4 rounded-br-lg bg-yellow-600 w-max text-white'>إعلانات ومشرف كلية الدراسات الإسلامية</h2>
          <div className="mx-auto flex flex-col gap-8 xl:flex-row lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="relative w-full mx-auto p-3 rounded-lg bg-white h-max shadow">
              <AdminField url={node} />
            </div>
            <div className="relative w-full mx-auto p-3 rounded-lg bg-white h-max shadow">
              <AnnoucField url={php} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>التعريف والهيكل الوظيفي للكلية</h2>
          <div className="mx-auto flex flex-col gap-8 xl:flex-row lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="relative w-full mx-auto p-3 rounded-lg shadow h-max">
              <VisMissField url={node} />
            </div>
            <div className="relative w-full mx-auto p-3 rounded-lg shadow h-max">
              <HaikalField url={node} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:left-0 left-4 rounded-br-lg bg-yellow-600 w-max text-white'>التسجيل والقبول والشروط للكلية</h2>
          <div className="mx-auto flex flex-col gap-8 xl:flex-row lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="relative w-full mx-auto p-3 rounded-lg bg-white h-max shadow">
              <TasjeelField url={node} />
            </div>
            <div className="relative w-full mx-auto p-3 rounded-lg bg-white h-max shadow">
              <FeesField url={node} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>التعريف والهيكل الوظيفي للكلية</h2>
          <div className="mx-auto flex flex-col gap-8 xl:flex-row lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="relative w-full mx-auto p-3 rounded-lg shadow h-max">
              <KuliatField url={php} />
            </div>
            <div className="relative w-full mx-auto p-3 rounded-lg shadow h-max">
              <MawadField url={node} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:left-0 left-4 rounded-br-lg bg-yellow-600 w-max text-white'>التسجيل والقبول والشروط للكلية</h2>
          <div className="mx-auto flex flex-col gap-8 xl:flex-row lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="relative w-full mx-auto p-3 rounded-lg bg-white h-max shadow">
              <TeacherField url={php} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>المشرفون المسجلون</h2>
          <div className="mx-auto flex flex-col gap-8 xl:flex-row lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="relative w-full mx-auto p-3 rounded-lg shadow h-max">
              <div className=" overflow-hidden w-full">
                <h1 className="text-center text-xl pb-6 pt-2 font-bold ">دخلت إشرافا</h1>
                <div >
                  {
                    Admin != null && (
                      <div className="text-center">
                        <h1 className="text-2xl mt-4 font-bold text-yellow-600">{Admin.name}</h1>
                        <p>@{Admin.email}</p>
                        <div onClick={() => {
                          removeCookie('admin'); removeCookie('id_admin'); location.reload()
                        }} className='mt-10 w-72 cursor-pointer justify-center bg-red-600 py-1 text-white rounded-lg flex flex-row-reverse mx-auto  items-center gap-2'><FiLogOut /> الخروج عن الإشراف</div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
            <div className="relative w-full mx-auto p-3 rounded-lg shadow h-max">
              <div className=" overflow-hidden w-full">
                <h1 className="text-center text-xl pb-6 pt-2 font-bold ">المشرفون</h1>
                <div className="h-52 overflow-auto border-t">
                  {
                    Admins != null && Admins.map(c => {
                      return (
                        <div key={c._id} className="flex text-md p-4 gap-4 justify-between items-center border-b hover:bg-slate-50 relative">
                          <h1 className=" font-bold text-yellow-600">{c.name}</h1>
                          <i className="fa fa-trash text-red-500 hover:text-red-700 cursor-pointer"></i>
                          {
                            cookies.admin && cookies.id_admin && (
                              <button onClick={() => ConfirmAlert(c._id, 'admin')} className="text-lg font-bold cursor-pointer">
                                <FiTrash color='red' />
                              </button>
                            )
                          }
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin
