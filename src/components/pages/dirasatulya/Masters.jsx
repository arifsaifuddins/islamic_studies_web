import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import apis from '../../apis'
import { useCookies } from 'react-cookie'
import { FiTrash } from 'react-icons/fi'
import { ConfirmAlert } from '../../confirm'
import Loader from '../../layouts/Loader'

const Masters = () => {
  const [cookies] = useCookies()
  const [Studies, setStudies] = useState(null)

  useEffect(() => {
    apis.getStudies().then(a => setStudies(a.data))
  }, [])

  const hadith_master_1 = Studies?.filter(a => a.class == '1' && a.program == 'hadith_master')
  const hadith_master_2 = Studies?.filter(a => a.class == '2' && a.program == 'hadith_master')

  const dakwah_master_1 = Studies?.filter(a => a.class == '1' && a.program == 'dakwah_master')
  const dakwah_master_2 = Studies?.filter(a => a.class == '2' && a.program == 'dakwah_master')

  const akidah_master_1 = Studies?.filter(a => a.class == '1' && a.program == 'akidah_master')
  const akidah_master_2 = Studies?.filter(a => a.class == '2' && a.program == 'akidah_master')

  return (
    <>
      <Helmet>
        <title>Islamic Studies | الماجستير</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>الماجستير</h1>
      </div>
      <div className="bg-white border-t-4 border-blue-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute  rounded-bl-lg bg-blue-600 w-max text-white'>ماجستير السنة وعلوم الحديث</h2>
          <div className="mx-auto lg:w-[900px] w-full  leading-9 py-32">
            {
              hadith_master_1 != null ? hadith_master_1?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-blue-600 text-center'>الفصل الدراسي الأول</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row items-center font-bold gap-6 border-b-4 px-6 py-2 text-blue-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-blue-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        hadith_master_1?.map(a => {
                          return (
                            <li key={a._id} className='flex flex-row relative items-center gap-6 border-b-4 px-6 py-2'>
                              {
                                cookies.admin && cookies.id_admin && (
                                  <button onClick={() => ConfirmAlert(a._id, 'studies')} className="h-8 w-8 rounded-r-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute left-0">
                                    <FiTrash color='white' />
                                  </button>
                                )
                              }
                              <p className='w-[65%]'>{a.madah}</p>
                              <div className='border-2 h-6 border-gray-600' />
                              <p className='w-[30%] text-center'>{a.time}</p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </>
              ) : (
                <Loader />
              )
            }
            {
              hadith_master_2?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-blue-600 text-center'>الفصل الدراسي الثاني</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row items-center font-bold gap-6 border-b-4 px-6 py-2 text-blue-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-blue-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        hadith_master_2?.map(a => {
                          return (
                            <li key={a._id} className='flex flex-row relative items-center gap-6 border-b-4 px-6 py-2'>
                              {
                                cookies.admin && cookies.id_admin && (
                                  <button onClick={() => ConfirmAlert(a._id, 'studies')} className="h-8 w-8 rounded-r-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute left-0">
                                    <FiTrash color='white' />
                                  </button>
                                )
                              }
                              <p className='w-[65%]'>{a.madah}</p>
                              <div className='border-2 h-6 border-gray-600' />
                              <p className='w-[30%] text-center'>{a.time}</p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-t-4 border-blue-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:left-0 left-4 rounded-br-lg bg-blue-600 w-max text-white'>ماجستير الدعوة والسيرة</h2>
          <div className="mx-auto lg:w-[900px] w-full  leading-9 py-32">
            {
              dakwah_master_1?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-blue-600 text-center'>الفصل الدراسي الأول</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row items-center font-bold gap-6 border-b-4 px-6 py-2 text-blue-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-blue-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        dakwah_master_1?.map(a => {
                          return (
                            <li key={a._id} className='flex flex-row relative items-center gap-6 border-b-4 px-6 py-2'>
                              {
                                cookies.admin && cookies.id_admin && (
                                  <button onClick={() => ConfirmAlert(a._id, 'studies')} className="h-8 w-8 rounded-r-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute left-0">
                                    <FiTrash color='white' />
                                  </button>
                                )
                              }
                              <p className='w-[65%]'>{a.madah}</p>
                              <div className='border-2 h-6 border-gray-600' />
                              <p className='w-[30%] text-center'>{a.time}</p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </>
              )
            }
            {
              dakwah_master_2?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-blue-600 text-center'>الفصل الدراسي الثاني</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row items-center font-bold gap-6 border-b-4 px-6 py-2 text-blue-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-blue-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        dakwah_master_2?.map(a => {
                          return (
                            <li key={a._id} className='flex flex-row relative items-center gap-6 border-b-4 px-6 py-2'>
                              {
                                cookies.admin && cookies.id_admin && (
                                  <button onClick={() => ConfirmAlert(a._id, 'studies')} className="h-8 w-8 rounded-r-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute left-0">
                                    <FiTrash color='white' />
                                  </button>
                                )
                              }
                              <p className='w-[65%]'>{a.madah}</p>
                              <div className='border-2 h-6 border-gray-600' />
                              <p className='w-[30%] text-center'>{a.time}</p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
      <div className="bg-white border-t-4 border-blue-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute  rounded-bl-lg bg-blue-600 w-max text-white'>ماجستير العقيدة والفكر الإسلامي</h2>
          <div className="mx-auto lg:w-[900px] w-full  leading-9 py-32">
            {
              akidah_master_1?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-blue-600 text-center'>الفصل الدراسي الأول</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row items-center font-bold gap-6 border-b-4 px-6 py-2 text-blue-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-blue-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        akidah_master_1?.map(a => {
                          return (
                            <li key={a._id} className='flex flex-row relative items-center gap-6 border-b-4 px-6 py-2'>
                              {
                                cookies.admin && cookies.id_admin && (
                                  <button onClick={() => ConfirmAlert(a._id, 'studies')} className="h-8 w-8 rounded-r-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute left-0">
                                    <FiTrash color='white' />
                                  </button>
                                )
                              }
                              <p className='w-[65%]'>{a.madah}</p>
                              <div className='border-2 h-6 border-gray-600' />
                              <p className='w-[30%] text-center'>{a.time}</p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </>
              )
            }
            {
              akidah_master_2?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-blue-600 text-center'>الفصل الدراسي الثاني</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row items-center font-bold gap-6 border-b-4 px-6 py-2 text-blue-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-blue-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        akidah_master_2?.map(a => {
                          return (
                            <li key={a._id} className='flex flex-row relative items-center gap-6 border-b-4 px-6 py-2'>
                              {
                                cookies.admin && cookies.id_admin && (
                                  <button onClick={() => ConfirmAlert(a._id, 'studies')} className="h-8 w-8 rounded-r-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute left-0">
                                    <FiTrash color='white' />
                                  </button>
                                )
                              }
                              <p className='w-[65%]'>{a.madah}</p>
                              <div className='border-2 h-6 border-gray-600' />
                              <p className='w-[30%] text-center'>{a.time}</p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Masters
