import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import apis from '../apis'
import { useCookies } from 'react-cookie'
import { FiTrash } from 'react-icons/fi'
import { ConfirmAlert } from '../confirm'

const Qobul = () => {
  const [cookies] = useCookies()

  const [Fee, setFee] = useState(null)
  const [Sharat, setSharat] = useState(null)

  useEffect(() => {
    apis.getFees().then(a => setFee(a.data))
    apis.getTasjeel().then(a => setSharat(a.data))
  }, [])

  return (
    <>
      <Helmet>
        <title>Islamic Studies | التسجيل والقبول</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>التسجيل والقبول</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute rounded-bl-lg bg-yellow-600 w-max text-white'>رسوم كلية الدراسات الإسلامية</h2>
          <div className="mx-auto lg:w-[900px] w-full text-start leading-9 py-32">
            <ul className='bg-white mt-4 border-t border-x'>
              <li className='flex flex-row items-center font-bold gap-8 border-b-4 px-4 py-2 text-yellow-600'>
                <p className='md:w-[50%] w-full text-center'>الكليات الدراسية</p>
                <div className='border-2 hidden md:block h-6 border-yellow-600' />
                <p className=' hidden md:block w-[20%] text-center'>الدولار</p>
                <div className='border-2 hidden md:block h-6 border-yellow-600' />
                <p className=' hidden md:block w-[20%] text-center'>الجنيه</p>
              </li>
              {
                Fee != null && Fee?.map(a => {
                  return (
                    <li key={a._id} className='flex md:flex-row relative flex-col items-center gap-8 border-b-4 px-4 py-2'>
                      {
                        cookies.admin && cookies.id_admin && (
                          <button onClick={() => ConfirmAlert(Fee?._id, 'fees')} className="h-8 w-8 rounded-r-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute left-0">
                            <FiTrash color='white' />
                          </button>
                        )
                      }
                      <p className='md:w-[50%] w-full text-center md:text-start'>{a.name}</p>
                      <div className="p-1 rounded-lg w-full flex flex-row items-center justify-around md:hidden border">
                        <p className='md:hidden text-center'>{a.dollar}</p>
                        <div className='border-2 md:hidden h-6 border-gray-600' />
                        <p className='md:hidden text-center'>{a.pound}</p>
                      </div>
                      <div className='border-2 hidden md:block h-6 border-gray-600' />
                      <p className=' hidden md:block w-[20%] text-center'>{a.dollar}</p>
                      <div className='border-2 hidden md:block h-6 border-gray-600' />
                      <p className=' hidden md:block w-[20%] text-center'>{a.pound}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:left-0 left-4 rounded-br-lg bg-yellow-600 w-max text-white'>شروط كلية الدراسات الإسلامية</h2>
          <div className="mx-auto lg:w-[900px] w-full text-start leading-9 py-32">
            <h2 className='text-2xl font-bold text-yellow-600 mb-12'>شروط التسجيل والقبول</h2>
            <ul>
              {
                Sharat != null && Sharat?.map(a => {
                  return (
                    <li key={a._id} className='flex flex-row relative mb-4' data-aos="fade-up">
                      {
                        cookies.admin && cookies.id_admin && (
                          <button onClick={() => ConfirmAlert(Sharat?._id, 'tasjeel')} className="h-8 w-8 rounded-br-lg rounded-tl-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute left-0">
                            <FiTrash color='white' />
                          </button>
                        )
                      }
                      <p className='py-1 px-6 border-r-8 bg-white rounded-l-lg w-full border-yellow-600 pr-4'>{a.sharat}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Qobul
