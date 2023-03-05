import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { FiTrash } from 'react-icons/fi'
import apis from '../apis'
import { ConfirmAlert } from '../confirm'
import { useCookies } from 'react-cookie'
import Loader from '../layouts/Loader'

const Kuliat = () => {
  const [Kuliat, setKuliat] = useState(null)
  const [cookies] = useCookies()
  const php = import.meta.env.VITE_PURL

  useEffect(() => {
    apis.getKuliat().then(a => setKuliat(a.data))
  }, [])

  return (
    <>
      <Helmet>
        <title>Islamic Studies | الكليات المنتسبة</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>الكليات المنتسبة</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto  xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>الكليات المنتسبة للدراسات الإسلامية</h2>
          <div className="mx-auto lg:w-[900px] w-full py-32 leading-9">
            {
              Kuliat != null ? Kuliat?.map(a => {
                return (
                  <div key={a.id} className="mb-20 flex flex-col">
                    <h3 className='py-2 mb-12 px-6 text-center text-2xl text-yellow-600 font-bold '>{a.title}</h3>
                    <div className='relative'>
                      {
                        cookies.admin && cookies.id_admin && (
                          <button onClick={() => ConfirmAlert(a?.id, 'kuliat')} className="h-8 w-8 rounded-bl-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute right-0">
                            <FiTrash color='white' />
                          </button>

                        )
                      }
                      <img src={`${php}/assets/${a.poster}`} alt={a.title} className='object-cover mb-6 w-full' />
                      {
                        JSON.parse(a.paragraph).map((a, i) => {

                          return (
                            <p className="mb-8" key={i}>{a}</p>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              }) : (
                <Loader />
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Kuliat
