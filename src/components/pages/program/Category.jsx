import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiCalendar, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import apis from '../../apis'
import Loader from '../../layouts/Loader'

const Category = () => {
  const php = import.meta.env.VITE_PURL
  const { category } = useParams()
  const [Blogs, setBlogs] = useState(null)
  const [Page, setPage] = useState(0)

  useEffect(() => {
    apis.getProgramCategories(category, Page).then(a => setBlogs(a))
  }, [Page, category])

  return (
    <>
      {
        Blogs != null ? Blogs?.data != null && Blogs?.data?.map(a => {
          const body = a?.body.replace(/<[^>]+>/g, ' ').trim()
          return (
            <Link to={`/programs/${a.id_post}`} key={a.id} className="flex flex-row  mt-10 md:gap-6 gap-4" data-aos="fade-up">
              <img src={`${php}/assets/${a.poster}`} alt={a.title} className='object-cover  hover:object-right-bottom transition-all duration-500 aspect-square h-32 md:h-44' />
              <div className="text-start">
                <h2 className='font-bold md:text-2xl text-sm text-blue-600 hover:underline'>{(a.title.length < 30) ? a.title : a.title.slice(0, 30) + '...'}</h2>
                <p className='md:text-lg text-xs md:mt-4 mt-2'>{(body?.replaceAll('&nbsp;', ' ').trim().length < 50) ? body?.replaceAll('&nbsp;', ' ').trim() : body?.replaceAll('&nbsp;', ' ').trim().slice(0, 50) + '...'}</p>
                <p className="pt-2 flex flex-row text-sm md:text-md gap-3 items-center">
                  <FiCalendar />
                  <span>{a.date}</span>
                </p>
              </div>
            </Link>
          )
        }) : (
          <Loader />
        )
      }
      <div className="flex flex-row py-1 bg-blue-600 text-white mx-auto md:mx-0 items-center text-sm md:text-xl w-max mt-24">
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

export default Category
