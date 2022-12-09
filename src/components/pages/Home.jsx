import React from 'react'
import { Link } from 'react-router-dom'
import { FiBookOpen, FiBriefcase, FiCalendar, FiPhone, FiTarget, FiVolume2 } from 'react-icons/fi'

const Home = () => {

  const l = [1, 2, 3, 4]
  const r = [3, 4]

  return (
    <>
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
                    <div className="shadow">
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
          <div className="pt-40 md:pb-8 pb-6 flex lg:flex-row-reverse flex-col items-center justify-between md:gap-8 gap-6" data-aos="fade-up" data-aos-duration="2000">
            {
              r.map((e) => {
                return (
                  <div className="flex flex-row-reverse justify-between py-3 md:gap-6 gap-4">
                    <img src="/exmp.jpg" alt="photo" className='object-cover h-32 w-32' />
                    <div className="text-end">
                      <h2 className='font-bold md:text-2xl text-lg text-yellow-600 underline'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي لي الشايقيأ.د. حسقيأ.د.</h2>
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
          <div className="pb-40 flex lg:flex-row-reverse flex-col items-center justify-between md:gap-8 gap-6" data-aos="fade-up" data-aos-duration="2000">
            {
              r.map((e) => {
                return (
                  <div className="flex flex-row-reverse justify-between py-3 md:gap-6 gap-4">
                    <img src="/exmp.jpg" alt="photo" className='object-cover h-32 w-32' />
                    <div className="text-end">
                      <h2 className='font-bold md:text-2xl text-lg text-yellow-600 underline'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي لي الشايقيأ.د. حسقيأ.د.</h2>
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
                  <h2 className='font-bold lg:text-5xl md:text-4xl text-3xl text-yellow-600 mb-4'>قاعة الحاج نور الكبرى</h2>
                  <p className="md:text-xl text-md pt-2">أ.د. حسن علي الشايقي أ.د. حسن علي الشايقي أ.د.ي الشايقيأ.د.ي الشايقيأ.د. حسن علي الشايقيأ.د. حسن علي الشايقي</p>
                  <h3 className='text-lg md:block hidden mt-4 text-red-500'>قاعة الحاج نور الكبرى</h3>
                </div>
              </div>
            </div>
            <div className="pb-20">
              <div className="flex lg:flex-row-reverse flex-col items-center justify-between py-3 lg:gap-28 gap-10">
                <img src="/exmp.jpg" alt="photo" className='object-cover h-[500px] w-[450px]' data-aos="fade-up" />
                <div className="lg:text-end sm:text-center text-end">
                  <h2 className='font-bold lg:text-5xl md:text-4xl text-3xl text-yellow-600 mb-4'>قاعة الحاج نور الكبرى</h2>
                  <p className="md:text-xl text-md pt-2">أ.د. حسن علي الشايقي أ.د. حسن علي الشايقي أ.د.ي الشايقيأ.د.ي الشايقيأ.د. حسن علي الشايقيأ.د. حسن علي الشايقي</p>
                  <h3 className='text-lg md:block hidden mt-4 text-red-500'>قاعة الحاج نور الكبرى</h3>
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
            <div className="flex flex-col items-center px-4 pb-6 pt-16 rounded-lg shadow bg-white">
              <div className="p-4 rounded-lg bg-purple-400 mb-4 text-white w-max text-2xl">
                <FiBookOpen />
              </div>
              <h1 className='font-bold text-center text-yellow-600 my-4'>قسم السنة وعلوم الحديث</h1>
              <p className='text-center'>د. حسن علي الشايقي أ.د. حسن علي الشايقي أ.د.ي الشايقيأ.د.ي الشايقي</p>
            </div>
            <div className="flex flex-col items-center px-4 pb-6 pt-16 rounded-lg shadow bg-white">
              <div className="p-4 rounded-lg bg-orange-400 mb-4 text-white w-max text-2xl">
                <FiVolume2 />
              </div>
              <h1 className='font-bold text-center text-yellow-600 my-4'>قسم الدعوة والسيرة</h1>
              <p className='text-center'>د. حسن علي الشايقي أ.د. حسن علي الشايقي أ.د.ي الشايقيأ.د.ي الشايقي</p>
            </div>
            <div className="flex flex-col items-center px-4 pb-6 pt-16 rounded-lg shadow bg-white">
              <div className="p-4 rounded-lg bg-green-400 mb-4 text-white w-max text-2xl">
                <FiTarget />
              </div>
              <h1 className='font-bold text-center text-yellow-600 my-4'>قسم العقيدة والفكر الإسلامي</h1>
              <p className='text-center'>د. حسن علي الشايقي أ.د. حسن علي الشايقي أ.د.ي الشايقيأ.د.ي الشايقي</p>
            </div>
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
