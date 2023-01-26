import downloadFile from 'fs-browsers/dist/cjs/download-file/downloadFile'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { FiMonitor, FiUser, FiX, FiTrash } from 'react-icons/fi'
import Modal from 'react-modal'
import apis from '../../apis'
import { useCookies } from 'react-cookie'
import { ConfirmAlert } from '../../confirm'

const Haiah = () => {
  const [HaiahIsOpen, setHaiahIsOpen] = useState(false)
  const [Id, setId] = useState(1)
  const [Haiah, setHaiah] = useState(null)
  const [Ameed, setAmeed] = useState(null)
  const [NaibAmeed, setNaibAmeed] = useState(null)
  const [Musajil, setMusajil] = useState(null)
  const [RaisQismDakwah, setRaisQismDakwah] = useState(null)
  const [RaisQismHadith, setRaisQismHadith] = useState(null)
  const [RaisQismAkidah, setRaisQismAkidah] = useState(null)
  const [QismDakwah, setQismDakwah] = useState(null)
  const [QismHadith, setQismHadith] = useState(null)
  const [QismAkidah, setQismAkidah] = useState(null)
  const [cookies] = useCookies()

  const php = import.meta.env.VITE_PURL

  useEffect(() => {
    apis.getHaiahs('ameed').then(a => setAmeed(a?.data))
    apis.getHaiahs('naib_ameed').then(a => setNaibAmeed(a?.data))
    apis.getHaiahs('musajil').then(a => setMusajil(a?.data))
    apis.getHaiahs('rais_qism_dakwah').then(a => setRaisQismDakwah(a?.data))
    apis.getHaiahs('rais_qism_hadith').then(a => setRaisQismHadith(a?.data))
    apis.getHaiahs('rais_qism_akidah').then(a => setRaisQismAkidah(a?.data))
    apis.getHaiahs('qism_dakwah').then(a => setQismDakwah(a?.data))
    apis.getHaiahs('qism_hadith').then(a => setQismHadith(a?.data))
    apis.getHaiahs('qism_akidah').then(a => setQismAkidah(a?.data))
  }, [])

  useEffect(() => {
    apis.getHaiah(Id).then(a => setHaiah(a.data))
  }, [Id])

  const close = () => {
    setHaiahIsOpen(false)
    document.querySelector(".navbar").classList.toggle('z-50')
  }

  const open = () => {
    setHaiahIsOpen(true)
    document.querySelector(".navbar").classList.toggle('z-50')
  }

  return (
    <>
      <Helmet>
        <title>Islamic Teachers | هيئة التدريس</title>
      </Helmet>
      <Modal isOpen={HaiahIsOpen} onRequestClose={() => close()} style={{ content: { transform: 'translate(-50%, -50%)', top: '50%', right: 'auto', left: '50%', bottom: 'auto', marginRight: '-50%', padding: 0 } }} >
        <button onClick={() => close()} className="h-8 w-8 rounded-br-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute ">
          <FiX color='white' />
        </button>
        <div className='w-max text-black py-2 px-6 text-end'>
          <h1 className='text-end font-bold pb-2 border-b-2'>السيرة الذاتية</h1>
          {
            Haiah != null && (
              <div className="flex flex-row-reverse gap-4 my-2">
                <div className="flex flex-col gap-4 relative">
                  {
                    cookies.admin && cookies.id_admin && (
                      <button onClick={() => ConfirmAlert(Haiah[0]?.id, 'haiah')} className="h-8 w-8 rounded-br-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute left-0">
                        <FiTrash color='white' />
                      </button>
                    )
                  }
                  <img src={`${php}/assets/${Haiah[0]?.poster}`} alt={Haiah[0]?.name} className='object-cover w-72 h-72' />
                  <div onClick={() => downloadFile(`${php}/assets/${Haiah[0]?.cv}`, Haiah[0]?.name + '.pdf')} className='w-72 cursor-pointer justify-center bg-yellow-600 py-2 text-white rounded-lg flex flex-row-reverse mx-auto  items-center gap-2'>CV | السيرة الذاتية </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className='font-bold text-yellow-600 text-xl'>{Haiah[0]?.name}</h1>
                  <div className="items-center flex flex-row-reverse gap-2">
                    <p className='text-yellow-600'>الدرجة العلمية</p>
                    <span>:</span>
                    <p>{Haiah[0]?.position}</p>
                  </div>
                  <div className="items-center flex flex-row-reverse gap-2">
                    <p className='text-yellow-600'>تاريخ الميلاد</p>
                    <span>:</span>
                    <p>{Haiah[0]?.birth}</p>
                  </div>
                  <div className="items-center flex flex-row-reverse gap-2">
                    <p className='text-yellow-600'>الدولة</p>
                    <span>:</span>
                    <p>{Haiah[0]?.country}</p>
                  </div>
                  <div className="items-center flex flex-row-reverse gap-2">
                    <p className='text-yellow-600'>العوان</p>
                    <span>:</span>
                    <p>{Haiah[0]?.address}</p>
                  </div>
                  <div className="items-center flex flex-row-reverse gap-2">
                    <p className='text-yellow-600'>الجنس</p>
                    <span>:</span>
                    <p>{Haiah[0]?.gender}</p>
                  </div>
                  <div className="items-center flex flex-row-reverse gap-2">
                    <p className='text-yellow-600'>الحالة الزوجية</p>
                    <span>:</span>
                    <p>{Haiah[0]?.status}</p>
                  </div>
                  <div className="items-center flex flex-row-reverse gap-2">
                    <p className='text-yellow-600'>البريد الإلكتروني</p>
                    <span>:</span>
                    <p>{Haiah[0]?.email}</p>
                  </div>
                  <div className="items-center flex flex-row-reverse gap-2">
                    <p className='text-yellow-600'>الهاتف</p>
                    <span>:</span>
                    <p>{Haiah[0]?.phone}</p>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </Modal>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>هيئة التدريس</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>هيئة التدريس لكلية الدراسات الإسلامية</h2>
          <div className="mx-auto lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="flex flex-col items-center md:flex-row-reverse gap-6 justify-between mb-20">
              {
                Ameed != null && (
                  <a href='#' onClick={() => { open(); setId(Ameed[0]?.id) }} className="flex cursor-pointer hover:bg-slate-50 flex-col items-center px-6 py-4 w-full mx-auto pt-12 rounded-lg shadow bg-white">
                    <div className="p-4 rounded-lg bg-purple-400 mb-4 text-white w-max text-2xl">
                      <FiUser />
                    </div>
                    <h3 className='text-yellow-600 font-bold'>عميد الكلية</h3>
                    <h3 className='hover:underline hover:text-yellow-600'>{Ameed[0]?.name}</h3>
                  </a>
                )
              }
              {
                Musajil != null && (
                  <a href='#' onClick={() => { open(); setId(Musajil[0]?.id) }} className="flex cursor-pointer hover:bg-slate-50 flex-col items-center px-6 py-4 w-full mx-auto pt-12 rounded-lg shadow bg-white">
                    <div className="p-4 rounded-lg bg-red-400 mb-4 text-white w-max text-2xl">
                      <FiMonitor />
                    </div>
                    <h3 className='text-yellow-600 font-bold'>مسجل الكلية</h3>
                    <h3 className='hover:underline hover:text-yellow-600'>{Musajil[0]?.name}</h3>
                  </a>
                )
              }
              {
                NaibAmeed != null && (
                  <a href='#' onClick={() => { open(); setId(NaibAmeed[0]?.id) }} className="flex cursor-pointer hover:bg-slate-50 flex-col items-center px-6 py-4 w-full mx-auto pt-12 rounded-lg shadow bg-white">
                    <div className="p-4 rounded-lg bg-purple-400 mb-4 text-white w-max text-2xl">
                      <FiUser />
                    </div>
                    <h3 className='text-yellow-600 font-bold'>نائب العميد</h3>
                    <h3 className='hover:underline hover:text-yellow-600'>{NaibAmeed[0]?.name}</h3>
                  </a>
                )
              }
            </div>
            <div className="mt-20">
              <h2 className='text-lg text-yellow-600 shadow font-bold w-full px-4 py-2 border-2 bg-white border-yellow-600 text-center'>قسم السنة وعلوم الحديث</h2>
              <ul className='bg-white border-x'>
                <li className='flex flex-row-reverse items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                  <p className='w-[65%] text-center'>الأسماء</p>
                  <div className='border-2 h-6 border-yellow-600' />
                  <p className='w-[30%] text-center'>الدرجة</p>
                </li>
                {
                  RaisQismHadith != null && (
                    <a href="#"><li onClick={() => { open(); setId(RaisQismHadith[0]?.id) }} className='flex hover:bg-slate-50 flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                      <p className='hover:underline hover:text-yellow-600 cursor-pointer w-[65%]'>{RaisQismHadith[0]?.name}</p>
                      <div className='border-2 h-6 border-gray-600' />
                      <p className='w-[30%] text-center'>رئيس</p>
                    </li>
                    </a>
                  )
                }
                {
                  QismHadith != null && QismHadith.map(a => {
                    return (
                      <a href="#"><li onClick={() => { open(); setId(a.id) }} className='flex hover:bg-slate-50 flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                        <p className='hover:underline hover:text-yellow-600 cursor-pointer w-[65%]'>{a.name}</p>
                        <div className='border-2 h-6 border-gray-600' />
                        <p className='w-[30%] text-center'>{a.position}</p>
                      </li>
                      </a>
                    )
                  })
                }
              </ul>
            </div>
            <div className="mt-20">
              <h2 className='text-lg text-yellow-600 shadow font-bold w-full px-4 py-2 border-2 bg-white border-yellow-600 text-center'>قسم الدعوة والسيرة</h2>
              <ul className='bg-white border-x'>
                <li className='flex flex-row-reverse items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                  <p className='w-[65%] text-center'>الأسماء</p>
                  <div className='border-2 h-6 border-yellow-600' />
                  <p className='w-[30%] text-center'>الدرجة</p>
                </li>
                {
                  RaisQismDakwah != null && (
                    <a href="#"><li onClick={() => { open(); setId(RaisQismDakwah[0]?.id) }} className='flex hover:bg-slate-50 flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                      <p className='hover:underline hover:text-yellow-600 cursor-pointer w-[65%]'>{RaisQismDakwah[0]?.name}</p>
                      <div className='border-2 h-6 border-gray-600' />
                      <p className='w-[30%] text-center'>رئيس</p>
                    </li>
                    </a>
                  )
                }
                {
                  QismDakwah != null && QismDakwah.map(a => {
                    return (
                      <a href="#"><li onClick={() => { open(); setId(a.id) }} className='flex hover:bg-slate-50 flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                        <p className='hover:underline hover:text-yellow-600 cursor-pointer w-[65%]'>{a.name}</p>
                        <div className='border-2 h-6 border-gray-600' />
                        <p className='w-[30%] text-center'>{a.position}</p>
                      </li>
                      </a>
                    )
                  })
                }
              </ul>
            </div>
            <div className="mt-20">
              <h2 className='text-lg text-yellow-600 shadow font-bold w-full px-4 py-2 border-2 bg-white border-yellow-600 text-center'>قسم العقيدة والفكر الإسلامي</h2>
              <ul className='bg-white border-x'>
                <li className='flex flex-row-reverse items-center font-bold gap-6 border-b-4 px-6 py-2 text-yellow-600'>
                  <p className='w-[65%] text-center'>الأسماء</p>
                  <div className='border-2 h-6 border-yellow-600' />
                  <p className='w-[30%] text-center'>الدرجة</p>
                </li>
                {
                  RaisQismAkidah != null && (
                    <a href="#"><li onClick={() => { open(); setId(RaisQismAkidah[0]?.id) }} className='flex hover:bg-slate-50 flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                      <p className='hover:underline hover:text-yellow-600 cursor-pointer w-[65%]'>{RaisQismAkidah[0]?.name}</p>
                      <div className='border-2 h-6 border-gray-600' />
                      <p className='w-[30%] text-center'>رئيس</p>
                    </li>
                    </a>
                  )
                }
                {
                  QismAkidah != null && QismAkidah.map(a => {
                    return (
                      <a href="#"><li onClick={() => { open(); setId(a.id) }} className='flex hover:bg-slate-50 flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                        <p className='hover:underline hover:text-yellow-600 cursor-pointer w-[65%]'>{a.name}</p>
                        <div className='border-2 h-6 border-gray-600' />
                        <p className='w-[30%] text-center'>{a.position}</p>
                      </li>
                      </a>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Haiah
