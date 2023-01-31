import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import apis from '../../apis'
import { useCookies } from 'react-cookie'
import { FiTrash } from 'react-icons/fi'
import { ConfirmAlert } from '../../confirm'

const Doctorals = () => {
  const [cookies] = useCookies()
  const [Studies, setStudies] = useState(null)

  useEffect(() => {
    apis.getStudies().then(a => setStudies(a.data))
  }, [])

  const phd_1 = Studies?.filter(a => a.class == '1' && a.program == 'phd')
  const phd_2 = Studies?.filter(a => a.class == '2' && a.program == 'phd')
  const phd_3 = Studies?.filter(a => a.class == '3' && a.program == 'phd')
  const phd_4 = Studies?.filter(a => a.class == '4' && a.program == 'phd')
  const phd_5 = Studies?.filter(a => a.class == '5' && a.program == 'phd')
  const phd_6 = Studies?.filter(a => a.class == '6' && a.program == 'phd')
  const phd_7 = Studies?.filter(a => a.class == '7' && a.program == 'phd')
  const phd_8 = Studies?.filter(a => a.class == '8' && a.program == 'phd')

  return (
    <>
      <Helmet>
        <title>Islamic Studies | الدكتوراه</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>الدكتوراه</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute rounded-bl-lg bg-yellow-600 w-max text-white'>الفصول الدراسية</h2>
          <div className="mx-auto lg:w-[900px] w-full leading-9 py-32">
            {
              phd_1?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-yellow-600 text-center'>الفصل الدراسي الأول</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-yellow-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        phd_1?.map(a => {
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
              phd_2?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-yellow-600 text-center'>الفصل الدراسي الثاني</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-yellow-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        phd_2?.map(a => {
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
              phd_3?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-yellow-600 text-center'>الفصل الدراسي الثالث</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-yellow-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        phd_3?.map(a => {
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
              phd_4?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-yellow-600 text-center'>الفصل الدراسي الرابع</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-yellow-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        phd_4?.map(a => {
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
              phd_5?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-yellow-600 text-center'>الفصل الدراسي الرابع</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-yellow-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        phd_5?.map(a => {
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
              phd_6?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-yellow-600 text-center'>الفصل الدراسي الرابع</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-yellow-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        phd_6?.map(a => {
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
              phd_7?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-yellow-600 text-center'>الفصل الدراسي الرابع</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-yellow-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        phd_7?.map(a => {
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
              phd_8?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-yellow-600 text-center'>الفصل الدراسي الرابع</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-yellow-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        phd_8?.map(a => {
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

export default Doctorals
