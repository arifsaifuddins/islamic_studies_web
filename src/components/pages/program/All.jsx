import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCalendar, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import apis from '../../apis'
import { ConfirmAlert } from '../../confirm'
import { FiTrash } from 'react-icons/fi'
import { useCookies } from 'react-cookie'
import Loader from '../../layouts/Loader'

const All = () => {
  const php = import.meta.env.VITE_PURL
  const [Blogs, setBlogs] = useState(null)
  const [Page, setPage] = useState(0)
  const [cookies] = useCookies()

  useEffect(() => {
    apis.getAllPrograms(Page).then(a => setBlogs(a))
  }, [Page])

  return (
    <>
      {
        Blogs != null ? Blogs?.data != null && (
          <div key={Blogs.data[0].id} className="lg:flex hidden flex-col shadow-lg hover:shadow-xl overflow-hidden bg-white mb-14">
            <Link to={`/programs/${Blogs.data[0].id_post}`} className="relative">
              <img src={`${php}/assets/${Blogs.data[0].poster}`} alt={Blogs.data[0].title} className="w-full lg:h-80 h-60 object-cover hover:object-right-bottom transition-all duration-500" />
              <div className="flex justify-end bg-cover text-slate-100 flex-col absolute right-0 bottom-0 left-0">
                <h1 className="md:text-2xl text-sm font-bold p-4 bg-opacity-50 bg-slate-200 hover:underline hover:text-yellow-600">{(Blogs.data[0].title.length < 50) ? Blogs.data[0].title : Blogs.data[0].title.slice(0, 50)}</h1>
              </div>
            </Link>
          </div>
        ) : (
          <Loader />
        )
      }
      {
        Blogs != null && Blogs?.data != null && Blogs?.data?.map(a => {
          const body = a?.body.replace(/<[^>]+>/g, ' ').trim()
          return (
            <div key={a.id} className="flex flex-row  mt-10 md:gap-6 gap-4" data-aos="fade-up">
              <Link to={`/programs/${a.id_post}`} ><img src={`${php}/assets/${a.poster}`} alt={a.title} className='object-cover aspect-square hover:object-right-bottom transition-all duration-500 h-32 md:h-44' /></Link>
              <div>
                <Link to={`/programs/${a.id_post}`} >
                  <h2 className='font-bold md:text-2xl text-sm text-yellow-600 hover:underline'>{(a.title.length < 30) ? a.title : a.title.slice(0, 30) + '...'}</h2>
                  <p className='md:text-lg text-xs md:mt-4 mt-2'>{(body?.replaceAll('&nbsp;', ' ').trim().length < 50) ? body?.replaceAll('&nbsp;', ' ').trim() : body?.replaceAll('&nbsp;', ' ').trim().slice(0, 50) + '...'}</p>
                </Link>
                <p className="pt-2 flex flex-row text-sm md:text-md gap-3 items-center">
                  <FiCalendar />
                  <span>{a.date}</span>
                  {
                    cookies.admin && cookies.id_admin && (
                      <button onClick={() => ConfirmAlert(a.id, 'program')} className="text-lg cursor-pointer font-bold">
                        <FiTrash color='red' />
                      </button>
                    )
                  }
                </p>
              </div>
            </div>
          )
        })
      }
      <div className="flex flex-row py-1 bg-yellow-600 text-white mx-auto md:mx-0 items-center text-sm md:text-xl w-max mt-24">
        {
          Blogs != null && Blogs?.data != null && Blogs?.previouspage == 0 ? (
            <p onClick={() => setPage(1)} className='px-4 text-slate-600 cursor-not-allowed py-2'><FiChevronsRight /></p>
          ) : (
            <p onClick={() => setPage(1)} className='px-4 cursor-pointer hover:underline py-2'><FiChevronsRight /></p>
          )
        }
        {
          Blogs != null && Blogs?.data != null && Blogs?.previouspage != 0 && (
            <p onClick={() => setPage(Blogs.previouspage)} className='px-4 hover:underline cursor-pointer py-2 '>{Blogs.previouspage}</p>
          )
        }
        {
          Blogs != null && Blogs?.data != null && Blogs?.currentpage >= 1 && Blogs.nextpage >= 0 && (
            <p onClick={() => setPage(Blogs.currentpage)} className='px-4 border-x-2 hover:underline cursor-pointer py-2 '>{Blogs.currentpage}</p>
          )
        }
        {
          Blogs != null && Blogs?.data != null && Blogs?.nextpage != 0 && (
            <p onClick={() => setPage(Blogs.nextpage)} className='px-4 hover:underline cursor-pointer py-2 '>{Blogs.nextpage}</p>
          )
        }
        {
          Blogs != null && Blogs?.data != null && Blogs?.nextpage == 0 ? (
            <p onClick={() => setPage(Blogs.totalpage)} className='px-4 text-slate-600 cursor-not-allowed py-2'><FiChevronsLeft /></p>
          ) : (
            <p onClick={() => setPage(Blogs.totalpage)} className='px-4 hover:underline cursor-pointer py-2'><FiChevronsLeft /></p>
          )
        }
      </div>
    </>
  )
}

export default All
