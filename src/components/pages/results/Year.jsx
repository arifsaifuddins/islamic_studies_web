import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiDownload } from 'react-icons/fi'
import apis from '../../apis'
import { ConfirmAlert } from '../../confirm'
import { FiTrash } from 'react-icons/fi'
import { useCookies } from 'react-cookie'
import Loader from '../../layouts/Loader'
import downloadFile from 'fs-browsers/dist/cjs/download-file/downloadFile'

const Year = () => {
  const php = import.meta.env.VITE_PURL
  const { year } = useParams()
  const [Result, setResult] = useState(null)
  const [cookies] = useCookies()

  useEffect(() => {
    apis.getYearResult(year).then(a => setResult(a))
  }, [year])

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

    </>
  )
}

export default Year
