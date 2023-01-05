import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from "react-cookie"
import { FiBookOpen, FiBriefcase, FiCalendar, FiPhone, FiTarget, FiVolume2, FiX } from 'react-icons/fi'
import Modal from 'react-modal'

const Home = () => {

  const l = [1, 2, 3, 4]
  const r = [3, 4]

  const url = import.meta.env.VITE_URL

  const [modalIsOpen, setIsOpen] = useState(false)
  const [cookie, setCookie] = useCookies()

  useEffect(() => {

    if (!cookie.visit) {
      setCookie('visit', 'visited', { path: '/', maxAge: 10000 * 12 })

      fetch(`${url}/visit/`, {
        method: 'POST',
        body: JSON.stringify({
          count: 1
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then(_ => setCookie('visit', 'visited', { path: '/', maxAge: 10000 * 12 }))
    }
  }, [])

  return (
    <>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={{ content: { transform: 'translate(-50%, -50%)', top: '50%', right: 'auto', left: '50%', bottom: 'auto', marginRight: '-50%', padding: 0 } }} >
        <button onClick={() => setIsOpen(false)} className="h-8 w-8 rounded-br-lg text-xl flex items-center justify-center font-bold bg-yellow-600 absolute ">
          <FiX />
        </button>
        <img src="/exmp.jpg" alt="photo" className='h-[70vh]' />
      </Modal>
      <div className='pb-72 pt-28 bg-stone-700 bg-opacity-50 text-white px-4'>
        <div className="flex flex-col font-bold gap-3 items-center mx-auto mt-10">
          <h1 className='lg:text-6xl md:text-5xl text-center text-4xl text-yellow-400 mb-4'>الدراسات الإسلامية</h1>
          <p className='md:text-2xl text-xl text-center'>الموقع الرسمي لكلية الدراسات الإسلامية بجامعة إفريقيا العالمية</p>
          <p className='md:text-xl text-md text-yellow-400'>الخرطوم - السودان</p>

          <div className="flex sm:flex-row-reverse w-full flex-col justify-center items-center gap-4 mt-32 sm:mt-14">
            <Link to="/programs" className='w-[80%] justify-center sm:w-max sm:px-8 py-2 border-4 hover:border-yellow-600 border-yellow-400 hover:bg-yellow-600 bg-yellow-400 rounded-lg flex flex-row-reverse text-slate-700 items-center gap-2'><FiBriefcase /> انظر البرامج</Link>
            <Link to='/contact' className='w-[80%] justify-center sm:w-max sm:px-8 py-2 border-4 hover:border-yellow-600 border-yellow-400 rounded-lg flex flex-row-reverse items-center gap-2'><FiPhone /> اتصل بنا</Link>
          </div>
        </div>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-[100vw] px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>إعلانات كلية الدراسات الإسلامية</h2>
          <div className="mx-auto overflow-x-scroll">
            <div className="py-40 flex flex-row items-center mx-auto w-max sm:w-full sm:justify-around gap-6">
              {
                l.map((e) => {
                  return (
                    <div className="shadow" onClick={() => setIsOpen(true)}>
                      <img src="/exmp.jpg" alt="photo" className='object-cover h-72 w-52 hover:scale-110' />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute rounded-br-lg bg-yellow-600 w-max text-white'>أخبار كلية الدراسات الإسلامية</h2>
          <div className="pt-40 md:pb-8 pb-6 flex lg:flex-row-reverse flex-col items-center justify-between md:gap-8 gap-6" data-aos="fade-up">
            {
              r.map((e) => {
                return (
                  <div className="flex flex-row-reverse justify-between py-3 md:gap-6 gap-4">
                    <img src="/exmp.jpg" alt="photo" className='object-cover h-32 w-32' />
                    <div className="text-end">
                      <h2 className='font-bold md:text-xl text-lg text-yellow-600 underline'>الطلاب والطالبات أ.د. حسن علي الشايقي أ.د. حسن علي لي الشايقيأ.د. حسقيأ.د.</h2>
                      <p className="pt-2 flex flex-row-reverse gap-3 items-center">
                        <FiCalendar />
                        <span>12/01/2022</span>
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="pb-40 flex lg:flex-row-reverse flex-col items-center justify-between md:gap-8 gap-6" data-aos="fade-up">
            {
              r.map((e) => {
                return (
                  <div className="flex flex-row-reverse justify-between py-3 md:gap-6 gap-4">
                    <img src="/exmp.jpg" alt="photo" className='object-cover h-32 w-32' />
                    <div className="text-end">
                      <h2 className='font-bold md:text-xl text-lg text-yellow-600 underline'>الطلاب والطالبات أ.د. حسن علي الشايقي أ.د. حسن علي لي الشايقيأ.د. حسقيأ.د.</h2>
                      <p className="pt-2 flex flex-row-reverse gap-3 items-center">
                        <FiCalendar />
                        <span>12/01/2022</span>
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="bg-white border-t-4 border-yellow-600">
          <div className="mx-auto  xl:w-[1200px] w-full px-4 xl:px-0 relative leading-normal">
            <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>نشاطات كلية الدراسات الإسلامية</h2>
            <div className="pb-20 pt-40">
              <div className="flex lg:flex-row flex-col items-center justify-between py-3 lg:gap-28 gap-10">
                <img src="/exmp.jpg" alt="photo" className='object-cover h-[500px] w-[450px]' data-aos="fade-up" />
                <div className="lg:text-end sm:text-center text-end">
                  <h2 className='font-bold lg:text-5xl md:text-4xl text-3xl text-yellow-600 mb-4'>الطلاب والطالبات</h2>
                  <p className="md:text-xl text-md pt-2">تعد هذه الكلية من أكثرها عددا من الطلاب والطالبات المسجلين من جميع أنحاء قارة الآسيا والإفريقيا</p>
                  <h3 className='text-lg md:block hidden mt-4 text-red-500'>الطلاب والطالبات</h3>
                </div>
              </div>
            </div>
            <div className="pb-20">
              <div className="flex lg:flex-row-reverse flex-col items-center justify-between py-3 lg:gap-28 gap-10">
                <img src="/exmp.jpg" alt="photo" className='object-cover h-[500px] w-[450px]' data-aos="fade-up" />
                <div className="lg:text-end sm:text-center text-end">
                  <h2 className='font-bold lg:text-5xl md:text-4xl text-3xl text-yellow-600 mb-4'>الامتحانات الإليكترونية</h2>
                  <p className="md:text-xl text-md pt-2">نشاطات الطلاب والطالبات في الامتحانات الإليكترونية في الفصول الدراسية الفردية والزوجية</p>
                  <h3 className='text-lg md:block hidden mt-4 text-red-500'>الامتحانات الإليكترونية</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute rounded-br-lg bg-yellow-600 w-max text-white'>أقسام كلية الدراسات الإسلامية</h2>
          <div className="py-40 flex lg:flex-row-reverse flex-col items-center justify-around gap-8" data-aos="fade-down">
            <Link to="/hadith" className="flex flex-col w-full items-center px-4 pb-6 pt-16 rounded-lg shadow bg-white">
              <div className="p-4 rounded-lg bg-purple-400 mb-4 text-white w-max text-2xl">
                <FiBookOpen />
              </div>
              <h1 className='font-bold text-center text-yellow-600 my-4'>قسم السنة وعلوم الحديث</h1>
              <p className='text-center'>قسم تدرس فيه علوم الحديث ومصطلحاته ورجاله وكتبه</p>
            </Link>
            <Link to="/dakwah" className="flex flex-col w-full items-center px-4 pb-6 pt-16 rounded-lg shadow bg-white">
              <div className="p-4 rounded-lg bg-orange-400 mb-4 text-white w-max text-2xl">
                <FiVolume2 />
              </div>
              <h1 className='font-bold text-center text-yellow-600 my-4'>قسم الدعوة والسيرة</h1>
              <p className='text-center'>قسم تدرس فيه أساليب الدعوة وتاريخها والسيرة النبوية</p>
            </Link>
            <Link to="/aqidah" className="flex flex-col w-full items-center px-4 pb-6 pt-16 rounded-lg shadow bg-white">
              <div className="p-4 rounded-lg bg-green-400 mb-4 text-white w-max text-2xl">
                <FiTarget />
              </div>
              <h1 className='font-bold text-center text-yellow-600 my-4'>قسم العقيدة والفكر الإسلامي</h1>
              <p className='text-center'>قسم تدرس فيه العقائد الإسلامية ومذاهب أفكارها</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>عدد زائري موقع الكلية</h2>
          <div className="py-40 flex items-center gap-4 justify-center">
            <h1 className='text-6xl font-bold' data-aos="fade-right">1000</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
