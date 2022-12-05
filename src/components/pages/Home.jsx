import React from 'react'
import { Link } from 'react-router-dom'
import { FiBookOpen, FiBriefcase, FiPhone, FiTarget, FiVolume2 } from 'react-icons/fi'

const Home = () => {

  const l = [1, 2, 3, 4]
  const r = [3, 4]

  return (
    <>
      <div className='pb-80 pt-28 bg-stone-700 bg-opacity-50 text-white'>
        <div className="flex flex-col font-bold gap-3 items-center mx-auto mt-10">
          <h1 className='text-6xl text-yellow-400 mb-4'>الدراسات الإسلامية</h1>
          <p className='text-2xl '>الموقع الرسمي لكلية الدراسات الإسلامية بجامعة إفريقيا العالمية</p>
          <p className='text-xl text-yellow-400'>الخرطوم - السودان</p>

          <div className="flex flex-row-reverse items-center gap-4 mt-14">
            <Link to="/programs" className='px-8 py-2 border-4 hover:border-yellow-400 border-yellow-600 hover:bg-yellow-400 bg-yellow-600 rounded-lg flex flex-row-reverse items-center gap-2'><FiBriefcase /> انظر البرامج</Link>
            <Link to='/contact' className='px-8 py-2 border-4 hover:border-yellow-400 border-yellow-600 rounded-lg flex flex-row-reverse items-center gap-2'><FiPhone /> اتصل بنا</Link>
          </div>
        </div>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto w-[1200px] relative">
          <h2 className='px-3 py-1 absolute right-0 rounded-bl-lg bg-yellow-600 w-max text-white'>إعلانات كلية الدراسات الإسلامية</h2>
          <div className="py-40 flex flex-row-reverse items-end gap-4 justify-around" data-aos="fade-up" data-aos-duration="2500">
            {
              l.map((e) => {
                return (
                  <div className="p-1 shadow">
                    <img src="/src/assets/exmp.jpg" alt="ameed" className='object-cover h-72 w-52 hover:scale-110 rounded-lg' />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-t-4 border-yellow-600">
        <div className="mx-auto w-[1200px] relative">
          <h2 className='px-3 py-1 absolute rounded-br-lg bg-yellow-600 w-max text-white'>أخبار كلية الدراسات الإسلامية</h2>
          <div className="pt-40 pb-8 flex flex-row items-center justify-between gap-8" data-aos="fade-up" data-aos-duration="2000">
            {
              r.map((e) => {
                return (
                  <div className="flex flex-row-reverse items-center justify-between p-3 gap-6">
                    <img src="/src/assets/exmp.jpg" alt="ameed" className='object-cover h-32 w-32 rounded-lg' />
                    <div className="text-end">
                      <h2 className='font-bold text-2xl text-yellow-600 underline'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي لي الشايقيأ.د. حسقيأ.د.</h2>
                      <p className="pt-2">12/01/2022</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="pb-40 flex flex-row items-center justify-between gap-8" data-aos="fade-up" data-aos-duration="2000">
            {
              r.map((e) => {
                return (
                  <div className="flex flex-row-reverse items-center justify-between p-3 gap-6">
                    <img src="/src/assets/exmp.jpg" alt="ameed" className='object-cover h-32 w-32 rounded-lg' />
                    <div className="text-end">
                      <h2 className='font-bold text-2xl text-yellow-600 underline'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي لي الشايقيأ.د. حسقيأ.د.</h2>
                      <p className="pt-2">12/01/2022</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="bg-white border-t-4 border-yellow-600">
          <div className="mx-auto w-[1200px] relative">
            <h2 className='px-3 py-1 absolute right-0 rounded-bl-lg bg-yellow-600 w-max text-white'>نشاطات كلية الدراسات الإسلامية</h2>
            <div className="pb-20 pt-40">
              <div className="flex flex-row items-center justify-between p-3 gap-28">
                <img src="/src/assets/exmp.jpg" alt="ameed" className='object-cover h-[500px] w-[450px]' data-aos="fade-up" />
                <div className="text-end">
                  <h3 className='text-lg mb-4 font-thin'>قاعة الحاج نور الكبرى</h3>
                  <h2 className='font-bold text-5xl text-yellow-600 underline mb-4'>قاعة الحاج نور الكبرى</h2>
                  <p className="text-xl pt-2">أ.د. حسن علي الشايقي أ.د. حسن علي الشايقي أ.د.ي الشايقيأ.د.ي الشايقيأ.د. حسن علي الشايقيأ.د. حسن علي الشايقي</p>
                </div>
              </div>
            </div>
            <div className="py-20 ">
              <div className="flex flex-row-reverse items-center justify-between p-3 gap-28">
                <img src="/src/assets/exmp.jpg" alt="ameed" className='object-cover h-[500px] w-[450px]' data-aos="fade-up" />
                <div className="text-end">
                  <h3 className='text-lg mb-4 font-thin'>قاعة الحاج نور الكبرى</h3>
                  <h2 className='font-bold text-5xl text-yellow-600 underline mb-4'>قاعة الحاج نور الكبرى</h2>
                  <p className="text-xl pt-2">أ.د. حسن علي الشايقي أ.د. حسن علي الشايقي أ.د.ي الشايقيأ.د.ي الشايقيأ.د. حسن علي الشايقيأ.د. حسن علي الشايقي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 border-t-4 border-yellow-600">
          <div className="mx-auto w-[1200px] relative">
            <h2 className='px-3 py-1 absolute rounded-br-lg bg-yellow-600 w-max text-white'>أقسام كلية الدراسات الإسلامية</h2>
            <div className="py-40 flex flex-row-reverse items-center justify-around gap-8" data-aos="fade-down">
              <div className="flex flex-col items-center px-4 pb-6 pt-16 rounded-lg shadow">
                <div className="p-4 rounded-lg bg-purple-400 text-white w-max text-2xl">
                  <FiBookOpen />
                </div>
                <h1 className='font-bold text-yellow-600 my-4'>قسم السنة وعلوم الحديث</h1>
                <p className='text-center'>د. حسن علي الشايقي أ.د. حسن علي الشايقي أ.د.ي الشايقيأ.د.ي الشايقي</p>
              </div>
              <div className="flex flex-col items-center px-4 pb-6 pt-16 rounded-lg shadow">
                <div className="p-4 rounded-lg bg-orange-400 text-white w-max text-2xl">
                  <FiVolume2 />
                </div>
                <h1 className='font-bold text-yellow-600 my-4'>قسم الدعوة والسيرة</h1>
                <p className='text-center'>د. حسن علي الشايقي أ.د. حسن علي الشايقي أ.د.ي الشايقيأ.د.ي الشايقي</p>
              </div>
              <div className="flex flex-col items-center px-4 pb-6 pt-16 rounded-lg shadow">
                <div className="p-4 rounded-lg bg-green-400 text-white w-max text-2xl">
                  <FiTarget />
                </div>
                <h1 className='font-bold text-yellow-600 my-4'>قسم العقيدة والفكر الإسلامي</h1>
                <p className='text-center'>د. حسن علي الشايقي أ.د. حسن علي الشايقي أ.د.ي الشايقيأ.د.ي الشايقي</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border-t-4 border-yellow-600">
          <div className="mx-auto w-[1200px] relative">
            <h2 className='px-3 py-1 absolute right-0 rounded-bl-lg bg-yellow-600 w-max text-white'>عدد زائري موقع الكلية</h2>
            <div className="py-40 flex items-center gap-4 justify-center">
              <h1 className='text-6xl font-bold'>1000</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
