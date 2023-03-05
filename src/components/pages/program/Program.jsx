import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { FiCalendar, FiUser } from 'react-icons/fi'
import apis from '../../apis'
import parse from 'html-react-parser'
import Loader from '../../layouts/Loader'

const Program = () => {

  const php = import.meta.env.VITE_PURL
  const { id } = useParams()
  const [Blog, setBlog] = useState(null)

  useEffect(() => {
    apis.getProgram(id).then(a => setBlog(a.data))
  }, [])

  return (
    <>
      <Helmet>
        <title>Islamic Studies | البرامج</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>البرامج والأخبار</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute rounded-bl-lg bg-yellow-600 w-max text-white'>البرامج والمؤتمرات والأخبار</h2>
          {
            Blog != null ? (
              <div className="mx-auto lg:w-[900px] w-full  leading-9 py-32">
                <Link className="text-red-600 underline hover:text-red-800 font-bold text-xl" to={`/programs/c/${Blog[0].category}`}># {Blog[0].category}</Link>
                <div className="pt-4 pb-6 flex flex-row gap-6 items-center">
                  <p className="flex flex-row gap-3 items-center">
                    <FiCalendar />
                    <span>{Blog[0].date}</span>
                  </p>
                  <p className="flex flex-row gap-3 items-center">
                    <FiUser />
                    <span>الدراسات الإسلامية</span>
                  </p>
                </div>
                <img src={`${php}/assets/${Blog[0].poster}`} alt={Blog[0].title} className='object-cover w-full' />
                <p className=" lg:text-4xl text-3xl my-12 leading-normal font-bold text-yellow-600">{Blog[0].title}</p>
                <article>
                  {parse(Blog[0].body)}
                </article>
              </div>
            ) : (
              <Loader />
            )
          }
        </div>
      </div>
    </>
  )
}

export default Program
