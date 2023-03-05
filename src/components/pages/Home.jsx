import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from "react-cookie"
import { FiBookOpen, FiBriefcase, FiCalendar, FiPhone, FiTarget, FiVolume2, FiX, FiTrash } from 'react-icons/fi'
import Modal from 'react-modal'
import apis from '../apis'
import { ConfirmAlert } from '../confirm'
import Loader from '../layouts/Loader'

const Home = () => {

  const
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
      setCookie('visit', 'visited', { path: '/', maxAge: 10000 * 24 })

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
          <Modal isOpen={AnnoucIsOpen} onRequestClose={() => close()} style={{ content: { transform: 'translate(-50%, -50%)', top: '50%', right: 'auto', left: '50%', bottom: 'auto', overflowY: 'auto', marginRight: '-50%', padding: 0 } }} >
            {
              cookie.admin && cookie.id_admin && (
                <button onClick={() => ConfirmAlert(Annouc[0]?.id, 'annouc')} className="h-8 w-8 rounded-bl-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute right-0">
                  <FiTrash color='white' />
                </button>
              )
            }
            <button onClick={() => close()} className="h-8 w-8 rounded-br-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute left-0">
              <FiX color='white' />
            </button>
            <img src={`${php}/assets/${Annouc[0]?.poster}`} alt={Annouc[0]?.title} className='h-[95vh] overflow-y-scroll' />
          </Modal>
        )
      }
      <div className='pb-72 pt-28 bg-stone-700 bg-opacity-50 text-white px-4'>
        <div className="flex flex-col font-bold gap-3 items-center mx-auto mt-10">
          <h1 className='lg:text-6xl md:text-5xl text-center text-4xl text-yellow-400 mb-4'>الدراسات الإسلامية</h1>
          <p className='md:text-2xl text-xl text-center'>الموقع الرسمي لكلية الدراسات الإسلامية بجامعة إفريقيا العالمية</p>
          <p className='md:text-xl text-md text-yellow-400'>الخرطوم - السودان</p>

          <div className="flex sm:flex-row w-full flex-col justify-center items-center gap-4 mt-32 sm:mt-14">
            <Link to="/programs" className='w-[80%] justify-center sm:w-max sm:px-8 py-2 border-4 hover:border-yellow-600 border-yellow-400 hover:bg-yellow-600 bg-yellow-400 rounded-lg flex flex-row text-slate-700 items-center gap-2'><FiBriefcase /> انظر البرامج</Link>
            <Link to='/contact' className='w-[80%] justify-center sm:w-max sm:px-8 py-2 border-4 hover:border-yellow-600 border-yellow-400 rounded-lg flex flex-row items-center gap-2'><FiPhone /> اتصل بنا</Link>
          </div>
        </div>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-[100vw] px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute rounded-bl-lg bg-yellow-600 w-max text-white'>إعلانات كلية الدراسات الإسلامية</h2>
          <div className="mx-auto overflow-x-scroll">
            <div className="py-40 flex flex-row items-center mx-auto w-max gap-6">
              {
                Annoucs != null ? Annoucs?.map(a => {
                  return (
                    <div className="shadow cursor-pointer" key={a.id}>
                      <a href="#"> <img src={`${php}/assets/${a?.poster}`} alt={a?.title} className='object-cover h-72 w-52 hover:scale-110' onClick={() => { setId(a?.id); open() }} />
                      </a>
                    </div>
                  )
                }) : (
                  <Loader />
                )
              }
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute  xl:left-0 left-4 rounded-br-lg bg-yellow-600 w-max text-white'>أخبار كلية الدراسات الإسلامية</h2>
          <div className="pt-40 md:pb-10 pb-8 flex lg:flex-row flex-col items-center justify-around md:gap-10 gap-8" data-aos="fade-up">
            {
              Programs != null ? Programs[0] != null && (
                <Link to={`/programs/${Programs[0]?.id_post}`} className="flex flex-row  lg:w-96 border-b-2 w-full px-4 py-3 md:gap-6 gap-4">
                  <img src={`${php}/assets/${Programs[0]?.poster}`} alt={Programs[0]?.title} className='object-cover aspect-square hover:object-right-bottom transition-all duration-500 h-32 md:h-40' />
                  <div className="text-start">
                    <h2 className='font-bold md:text-xl text-lg text-yellow-600 underline'>{(Programs[0]?.title.length < 40) ? Programs[0]?.title : Programs[0]?.title.slice(0, 40) + '...'}</h2>
                    <p className="pt-2 flex flex-row gap-3 items-center">
                      <FiCalendar />
                      <span>{Programs[0]?.date}</span>
                    </p>
                  </div>
                </Link>
              ) : (
                <Loader />
              )
            }
            {
              Programs != null && Programs[1] != null && (
                <Link to={`/programs/${Programs[1]?.id_post}`} className="flex flex-row  lg:w-96 border-b-2 w-full px-4 py-3 md:gap-6 gap-4">
                  <img src={`${php}/assets/${Programs[1]?.poster}`} alt={Programs[1]?.title} className='object-cover aspect-square hover:object-right-bottom transition-all duration-500 h-32 md:h-40' />
                  <div className="text-start">
                    <h2 className='font-bold md:text-xl text-lg text-yellow-600 underline'>{(Programs[1]?.title.length < 40) ? Programs[1]?.title : Programs[1]?.title.slice(0, 40) + '...'}</h2>
                    <p className="pt-2 flex flex-row gap-3 items-center">
                      <FiCalendar />
                      <span>{Programs[1]?.date}</span>
                    </p>
                  </div>
                </Link>
              )
            }
          </div>
          <div className="pb-40 flex lg:flex-row flex-col items-center justify-around md:gap-10 gap-8" data-aos="fade-up">
            {
              Programs != null && Programs[2] != null && (
                <Link to={`/programs/${Programs[2]?.id_post}`} className="flex flex-row  lg:w-96 border-b-2 w-full px-4 py-3 md:gap-6 gap-4">
                  <img src={`${php}/assets/${Programs[2]?.poster}`} alt={Programs[2]?.title} className='object-cover aspect-square hover:object-right-bottom transition-all duration-500 h-32 md:h-40' />
                  <div className="text-start">
                    <h2 className='font-bold md:text-xl text-lg text-yellow-600 underline'>{(Programs[2]?.title.length < 40) ? Programs[2]?.title : Programs[2]?.title.slice(0, 40) + '...'}</h2>
                    <p className="pt-2 flex flex-row gap-3 items-center">
                      <FiCalendar />
                      <span>{Programs[2]?.date}</span>
                    </p>
                  </div>
                </Link>
              )
            }
            {
              Programs != null && Programs[3] != null && (
                <Link to={`/programs/${Programs[3]?.id_post}`} className="flex flex-row  lg:w-96 border-b-2 w-full px-4 py-3 md:gap-6 gap-4">
                  <img src={`${php}/assets/${Programs[3]?.poster}`} alt={Programs[3]?.title} className='object-cover aspect-square hover:object-right-bottom transition-all duration-500 h-32 md:h-40' />
                  <div className="text-start">
                    <h2 className='font-bold md:text-xl text-lg text-yellow-600 underline'>{(Programs[3]?.title.length < 40) ? Programs[3]?.title : Programs[3]?.title.slice(0, 40) + '...'}</h2>
                    <p className="pt-2 flex flex-row gap-3 items-center">
                      <FiCalendar />
                      <span>{Programs[3]?.date}</span>
                    </p>
                  </div>
                </Link>
              )
            }
          </div>
        </div>
        <div className="bg-white border-t-4 border-yellow-600">
          <div className="mx-auto  xl:w-[1200px] w-full px-4 xl:px-0 relative leading-normal">
            <h2 className='px-3 py-1 absolute rounded-bl-lg bg-yellow-600 w-max text-white'>نشاطات كلية الدراسات الإسلامية</h2>
            <div className="pb-20 pt-40">
              <div className="flex lg:flex-row-reverse flex-col items-center justify-between py-3 lg:gap-28 gap-10">
                <img src="/program.jpg" alt="photo" className='object-cover hover:object-right-bottom transition-all duration-500 h-[500px] w-[450px]' data-aos="fade-up" />
                <div className="lg:text-start sm:text-center text-start">
                  <h2 className='font-bold lg:text-5xl md:text-4xl text-3xl text-yellow-600 mb-4'>الطلاب والطالبات</h2>
                  <p className="md:text-xl text-md pt-2">تعد هذه الكلية من أكثرها عددا من الطلاب والطالبات المسجلين من جميع أنحاء قارة الآسيا والإفريقيا</p>
                  <h3 className='text-lg md:block hidden mt-4 text-red-500'>الطلاب والطالبات</h3>
                </div>
              </div>
            </div>
            <div className="pb-20">
              <div className="flex lg:flex-row flex-col items-center justify-between py-3 lg:gap-28 gap-10">
                <img src="/exam.jpg" alt="photo" className='object-cover hover:object-right-bottom transition-all duration-500 h-[500px] w-[450px]' data-aos="fade-up" />
                <div className="lg:text-start sm:text-center text-start">
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
          <h2 className='px-3 py-1 absolute xl:left-0 left-4 rounded-br-lg bg-yellow-600 w-max text-white'>أقسام كلية الدراسات الإسلامية</h2>
          <div className="py-40 flex lg:flex-row flex-col items-center justify-around gap-8" data-aos="fade-down">
            <Link to="/hadith" className="flex flex-col w-full items-center hover:bg-slate-50 px-4 pb-6 pt-16 rounded-lg shadow bg-white">
              <div className="p-4 rounded-lg bg-purple-400 mb-4 text-white w-max text-2xl">
                <FiBookOpen />
              </div>
              <h1 className='font-bold text-center text-yellow-600 my-4'>قسم السنة وعلوم الحديث</h1>
              <p className='text-center'>قسم تدرس فيه علوم الحديث ومصطلحاته ورجاله وكتبه لتنتج منه الطلاب المتمكنين فيها</p>
            </Link>
            <Link to="/dakwah" className="flex flex-col w-full items-center hover:bg-slate-50 px-4 pb-6 pt-16 rounded-lg shadow bg-white">
              <div className="p-4 rounded-lg bg-orange-400 mb-4 text-white w-max text-2xl">
                <FiVolume2 />
              </div>
              <h1 className='font-bold text-center text-yellow-600 my-4'>قسم الدعوة والسيرة</h1>
              <p className='text-center'>قسم تدرس فيه أساليب الدعوة وتاريخها والسيرة النبوية لتنتج منه الطلاب المتمكنين فيها</p>
            </Link>
            <Link to="/aqidah" className="flex flex-col w-full items-center hover:bg-slate-50 px-4 pb-6 pt-16 rounded-lg shadow bg-white">
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
          <h2 className='px-3 py-1 absolute rounded-bl-lg bg-yellow-600 w-max text-white'>عدد زائري موقع الكلية</h2>
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
