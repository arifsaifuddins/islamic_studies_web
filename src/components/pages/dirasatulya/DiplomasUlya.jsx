import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import apis from '../../apis'
import { useCookies } from 'react-cookie'
import Loader from '../../layouts/Loader'

const DiplomaUlya = () => {
  const [cookies] = useCookies()
  const [Studies, setStudies] = useState(null)

  useEffect(() => {
    apis.getStudies().then(a => setStudies(a.data))
  }, [])

  const diploma_ulya_dirasat_1 = Studies?.filter(a => a.class == '1' && a.program == 'diploma_ulya_dirasat')
  const diploma_ulya_dirasat_2 = Studies?.filter(a => a.class == '2' && a.program == 'diploma_ulya_dirasat')

  const diploma_ulya_dakwah_1 = Studies?.filter(a => a.class == '1' && a.program == 'diploma_ulya_dakwah')
  const diploma_ulya_dakwah_2 = Studies?.filter(a => a.class == '2' && a.program == 'diploma_ulya_dakwah')
  return (
    <>
      <Helmet>
        <title>Islamic Studies | الدبلومات العليا</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>الدبلومات العليا</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute rounded-bl-lg bg-yellow-600 w-max text-white'>دبلوم الدراسات الإسلامية</h2>
          <div className="mx-auto lg:w-[900px] w-full leading-9 py-32">
            {
              diploma_ulya_dakwah_1 != null ? diploma_ulya_dirasat_1?.length > 0 && (
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
                        diploma_ulya_dirasat_1?.map(a => {
                          return (
                            <li key={a._id} className='flex flex-row items-center gap-6 border-b-4 px-6 py-2'>
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
              diploma_ulya_dirasat_2?.length > 0 && (
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
                        diploma_ulya_dirasat_2?.map(a => {
                          return (
                            <li key={a._id} className='flex flex-row items-center gap-6 border-b-4 px-6 py-2'>
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
      <div className="bg-slate-100 border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:left-0 left-4 rounded-br-lg bg-yellow-600 w-max text-white'>دبلوم الدعوة والسيرة العالي (الضباط)</h2>
          <div className="mx-auto lg:w-[900px] w-full leading-9 py-32">
            {
              diploma_ulya_dakwah_1?.length > 0 && (
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
                        diploma_ulya_dakwah_1?.map(a => {
                          return (
                            <li key={a._id} className='flex flex-row items-center gap-6 border-b-4 px-6 py-2'>
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
              diploma_ulya_dakwah_2?.length > 0 && (
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
                        diploma_ulya_dakwah_2?.map(a => {
                          return (
                            <li key={a._id} className='flex flex-row items-center gap-6 border-b-4 px-6 py-2'>
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

export default DiplomaUlya
