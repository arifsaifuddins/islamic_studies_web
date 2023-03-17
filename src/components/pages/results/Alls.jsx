import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiDownload, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import apis from '../../apis'
import { ConfirmAlert } from '../../confirm'
import { FiTrash } from 'react-icons/fi'
import { useCookies } from 'react-cookie'
import Loader from '../../layouts/Loader'
import downloadFile from 'fs-browsers/dist/cjs/download-file/downloadFile'

const Alls = () => {
  const php = import.meta.env.VITE_PURL
  const [Result, setResult] = useState(null)
  const [Page, setPage] = useState(0)
  const [cookies] = useCookies()

  useEffect(() => {
    apis.getResults(Page).then(a => setResult(a))
  }, [Page])

  return (
    <>
      {
        Result != null ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
              Result?.data != null && Result?.data?.map((a, i) => {
                return (
                  <div key={i} className="w-full rounded-lg bg-white shadow-lg p-4">
                    <h1 className='text-xl font-bold'>{a.kuliah} - {a.name}</h1>
                    <p className='my-2'><Link to={`/results/${a.year}`} className='underline hover:text-blue-600 font-bold'>{a.year}</Link> - {a.qism}</p>
                    <div className="flex items-center gap-2">
                      <div onClick={() => downloadFile(`${php}/assets/${a.result}`, 'result.pdf')} className="bg-blue-600 text-white w-full cursor-pointer rounded-lg flex items-center justify-center gap-2 p-1">
                        <FiDownload /> {a.level}
                      </div>
                      {
                        cookies.admin && cookies.id_admin && (
                          <button onClick={() => ConfirmAlert(a.id, 'result')} className="text-lg cursor-pointer font-bold">
                            <FiTrash color='red' />
                          </button>
                        )
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        ) : (
          <Loader />
        )
      }
      <div className="flex flex-row py-1 bg-blue-600 text-white mx-auto md:mx-0 items-center text-sm md:text-xl w-max mt-24">
        {
          Result != null && Result?.data != null && Result?.previouspage == 0 ? (
            <p onClick={() => setPage(1)} className='px-4 text-slate-600 cursor-not-allowed py-2'><FiChevronsRight /></p>
          ) : (
            <p onClick={() => setPage(1)} className='px-4 cursor-pointer hover:underline py-2'><FiChevronsRight /></p>
          )
        }
        {
          Result != null && Result?.data != null && Result?.previouspage != 0 && (
            <p onClick={() => setPage(Result.previouspage)} className='px-4 hover:underline cursor-pointer py-2 '>{Result.previouspage}</p>
          )
        }
        {
          Result != null && Result?.data != null && Result?.currentpage >= 1 && Result.nextpage >= 0 && (
            <p onClick={() => setPage(Result.currentpage)} className='px-4 border-x-2 hover:underline cursor-pointer py-2 '>{Result.currentpage}</p>
          )
        }
        {
          Result != null && Result?.data != null && Result?.nextpage != 0 && (
            <p onClick={() => setPage(Result.nextpage)} className='px-4 hover:underline cursor-pointer py-2 '>{Result.nextpage}</p>
          )
        }
        {
          Result != null && Result?.data != null && Result?.nextpage == 0 ? (
            <p onClick={() => setPage(Result.totalpage)} className='px-4 text-slate-600 cursor-not-allowed py-2'><FiChevronsLeft /></p>
          ) : (
            <p onClick={() => setPage(Result.totalpage)} className='px-4 hover:underline cursor-pointer py-2'><FiChevronsLeft /></p>
          )
        }
      </div>
    </>
  )
}

export default Alls
