import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from "react-cookie"
import { FiBookOpen, FiBriefcase, FiCalendar, FiPhone, FiTarget, FiVolume2, FiX, FiTrash } from 'react-icons/fi'
import Modal from 'react-modal'
import apis from '../apis'
import { ConfirmAlert } from '../confirm'

const Home = () => {

  const
    l = [0, 1, 2, 3],
    m = [0, 1],
    r = [2, 3],
    node = import.meta.env.VITE_NURL,
    php = import.meta.env.VITE_PURL,
    [AnnoucIsOpen, setAnnoucIsOpen] = useState(false),
    [cookie, setCookie] = useCookies(),
    [Id, setId] = useState(0),
    [Visit, setVisit] = useState(0),
    [Annoucs, setAnnoucs] = useState(null),
    [Annouc, setAnnouc] = useState(null),
    [Programs, setPrograms] = useState(null)

  useEffect(() => {

    if (!cookie.visit) {
      setCookie('visit', 'visited', { path: '/', maxAge: 10000 * 12 })

      fetch(`${node}/visit/`, {
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

    apis.getVisitors().then(a => setVisit(a.data))
    apis.getAnnoucement().then(a => setAnnoucs(a.data))
    apis.getProgram(0).then(a => setPrograms(a.data))

  }, [])

  useEffect(() => {
    apis.getAnnoucementOne(Id).then(a => setAnnouc(a.data))
  }, [Id])

  const close = () => {
    setAnnoucIsOpen(false)
    document.querySelector(".navbar").classList.toggle('z-50')
  }

  const open = () => {
    setAnnoucIsOpen(true)
    document.querySelector(".navbar").classList.toggle('z-50')
  }

  return (
    <>
      {
        Annouc != null && (
          <Modal isOpen={AnnoucIsOpen} onRequestClose={() => close()} style={{ content: { transform: 'translate(-50%, -50%)', top: '50%', right: 'auto', left: '50%', bottom: 'auto', marginRight: '-50%', padding: 0 } }} >
            {
              cookie.admin && cookie.id_admin && (
                <button onClick={() => ConfirmAlert(Annouc[0]?.id, 'annouc')} className="h-8 w-8 rounded-bl-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute right-0">
                  <FiTrash color='white' />
                </button>
              )
            }
            <button onClick={() => close()} className="h-8 w-8 rounded-br-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute ">
              <FiX color='white' />
            </button>
            <img src={`${php}/assets/${Annouc[0]?.poster}`} alt={Annouc[0]?.title} className='md:h-[95vh]' />
          </Modal>
        )
      }
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
                    <div className="shadow cursor-pointer" key={e}>
                      {
                        Annoucs != null && (
                          <a href="#"> <img src={`${php}/assets/${Annoucs[e]?.poster}`} alt={Annoucs[e]?.title} className='object-cover h-72 w-52 hover:scale-110' onClick={() => { setId(Annoucs[e]?.id); open() }} />
                          </a>
                        )
                      }
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
          <div className="pt-40 md:pb-10 pb-8 flex lg:flex-row-reverse flex-col items-center justify-around md:gap-10 gap-8" data-aos="fade-up">
            {
              Programs != null && m.map((e) => {
                const bd = Programs[e]?.body.replace(/<[^>]+>/g, '')
                return (
                  <Link to={`/programs/${Programs[e]?.id_post}`} key={e} className="flex flex-row-reverse  lg:w-80 w-full px-4 lg:px-0 py-3 md:gap-6 gap-4">
                    <img src={`${php}/assets/${Programs[e]?.poster}`} alt={Programs[e]?.title} className='object-cover h-32 w-32' />
                    <div className="text-end">
                      <h2 className='font-bold md:text-xl text-lg text-yellow-600 underline'>{(bd?.replaceAll('&nbsp;', '').trim().length < 50) ? bd?.replaceAll('&nbsp;', '').trim() : bd?.replaceAll('&nbsp;', '').trim().slice(0, 50)}</h2>
                      <p className="pt-2 flex flex-row-reverse gap-3 items-center">
                        <FiCalendar />
                        <span>{Programs[e]?.date}</span>
                      </p>
                    </div>
                  </Link>
                )
              })
            }
          </div>
          <div className="pb-40 flex lg:flex-row-reverse flex-col items-center justify-around md:gap-10 gap-8" data-aos="fade-up">
            {
              Programs != null && r.map((e) => {
                const bod = Programs[e]?.body.replace(/<[^>]+>/g, '').trim()
                return (
                  <Link to={`/programs/${Programs[e]?.id_post}`} key={e} className="flex flex-row-reverse  lg:w-80 w-full px-4 lg:px-0 py-3 md:gap-6 gap-4">
                    <img src={`${php}/assets/${Programs[e]?.poster}`} alt={Programs[e]?.title} className='object-cover h-32 w-32' />
                    <div className="text-end">
                      <h2 className='font-bold md:text-xl text-lg text-yellow-600 underline'>{(bod?.replaceAll('&nbsp;', '').trim().length < 50) ? bod?.replaceAll('&nbsp;', '').trim() : bod?.replaceAll('&nbsp;', '').trim().slice(0, 50)}</h2>
                      <p className="pt-2 flex flex-row-reverse gap-3 items-center">
                        <FiCalendar />
                        <span>{Programs[e]?.date}</span>
                      </p>
                    </div>
                  </Link>
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
              <p className='text-center'>قسم تدرس فيه علوم الحديث ومصطلحاته ورجاله وكتبه لتنتج منه الطلاب المتمكنين فيها</p>
            </Link>
            <Link to="/dakwah" className="flex flex-col w-full items-center px-4 pb-6 pt-16 rounded-lg shadow bg-white">
              <div className="p-4 rounded-lg bg-orange-400 mb-4 text-white w-max text-2xl">
                <FiVolume2 />
              </div>
              <h1 className='font-bold text-center text-yellow-600 my-4'>قسم الدعوة والسيرة</h1>
              <p className='text-center'>قسم تدرس فيه أساليب الدعوة وتاريخها والسيرة النبوية لتنتج منه الطلاب المتمكنين فيها</p>
            </Link>
            <Link to="/aqidah" className="flex flex-col w-full items-center px-4 pb-6 pt-16 rounded-lg shadow bg-white">
              <div className="p-4 rounded-lg bg-green-400 mb-4 text-white w-max text-2xl">
                <FiTarget />
              </div>
              <h1 className='font-bold text-center text-yellow-600 my-4'>قسم العقيدة والفكر الإسلامي</h1>
              <p className='text-center'>قسم تدرس فيه العقائد الإسلامية ومذاهب أفكارها لتنتج منه الطلاب المتمكنين فيها</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>عدد زائري موقع الكلية</h2>
          <div className="py-40 flex flex-col items-center gap-4 justify-center">
            <h1 className='md:text-6xl font-bold text-5xl' data-aos="fade-right">{Visit}</h1>
            <span>مرات من الزيارة</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
