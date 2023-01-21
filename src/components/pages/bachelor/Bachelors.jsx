import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import apis from '../../apis'
import { useCookies } from 'react-cookie'
import { FiTrash } from 'react-icons/fi'
import { ConfirmAlert } from '../../confirm'

const Bachelors = () => {
  const [cookies] = useCookies()
  const [Studies, setStudies] = useState(null)

  useEffect(() => {
    apis.getStudies().then(a => setStudies(a.data))
  }, [])

  const all_major_1 = Studies?.filter(a => a.class == '1' && a.program == 'all_major')
  const all_major_2 = Studies?.filter(a => a.class == '2' && a.program == 'all_major')
  const all_major_3 = Studies?.filter(a => a.class == '3' && a.program == 'all_major')
  const all_major_4 = Studies?.filter(a => a.class == '4' && a.program == 'all_major')

  return (
    <>
      <Helmet>
        <title>Islamic Studies | جميع التخصصات</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>جميع التخصصات</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto  xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>الفصل الأول والثاني والثالث والرابع</h2>
          <div className="mx-auto lg:w-[900px] w-full text-end leading-9 py-32">
            {
              all_major_1?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-yellow-600 text-center'>الفصل الدراسي الأول</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row-reverse items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-yellow-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        all_major_1?.map(a => {
                          return (
                            <li key={a._id} className='flex flex-row-reverse relative items-center gap-6 border-b-4 px-6 py-2'>
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
              all_major_2?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-yellow-600 text-center'>الفصل الدراسي الثاني</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row-reverse items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-yellow-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        all_major_2?.map(a => {
                          return (
                            <li key={a._id} className='flex flex-row-reverse relative items-center gap-6 border-b-4 px-6 py-2'>
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
              all_major_3?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-yellow-600 text-center'>الفصل الدراسي الثالث</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row-reverse items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-yellow-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        all_major_3?.map(a => {
                          return (
                            <li key={a._id} className='flex flex-row-reverse relative items-center gap-6 border-b-4 px-6 py-2'>
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
              all_major_4?.length > 0 && (
                <>
                  <div className="mb-20">
                    <h2 className='text-lg text-white w-full px-4 py-2 bg-yellow-600 text-center'>الفصل الدراسي الرابع</h2>
                    <ul className='bg-white border-x'>
                      <li className='flex flex-row-reverse items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                        <p className='w-[65%] text-center'>المواد الدراسية</p>
                        <div className='border-2 h-6 border-yellow-600' />
                        <p className='w-[30%] text-center'>الساعات</p>
                      </li>
                      {
                        all_major_4?.map(a => {
                          return (
                            <li key={a._id} className='flex flex-row-reverse relative items-center gap-6 border-b-4 px-6 py-2'>
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

export default Bachelors
