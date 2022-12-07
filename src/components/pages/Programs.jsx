import React from 'react'
import { FiCalendar, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Programs = () => {
  return (
    <>
      <div className='h-80 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='text-5xl m-auto'>البرامج والأخبار</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto w-[1200px] relative">
          <h2 className='px-3 py-1 absolute right-0 rounded-bl-lg bg-yellow-600 w-max text-white'>البرامج والأخبار والمؤتمرات</h2>
          <div className="mx-auto w-[900px] text-lg text-end leading-9 py-32">
            <div className="flex flex-col shadow-lg hover:shadow-xl overflow-hidden bg-white mb-20">
              <Link to="/programs/okkook" className="relative">
                <img src="/exmp.jpg" alt="poster" className="w-full h-80 object-cover hover:object-right-bottom transition-all duration-500" />
                <div className="flex justify-end bg-cover text-slate-100 flex-col absolute right-0 bottom-0 left-0">
                  <h1 className="text-2xl font-bold p-4 bg-opacity-50 bg-slate-200 hover:underline hover:text-yellow-600">لكلية تؤدي رسالة الجامعة، وترفد المجتمعات المحلية والعالمية بخريجين، على مدى عقدٍ من الزمان، من خلال واجبهة؛ لمواكبة التطور العلمي الهائل</h1>
                </div>
              </Link>
            </div>
            <div className="flex flex-row-reverse items-center justify-between mt-10 gap-6" data-aos="fade-up">
              <img src="/exmp.jpg" alt="photo" className='object-cover h-44 w-44' />
              <div className="text-end">
                <h2 className='font-bold text-2xl text-yellow-600 hover:underline'>قاعة الحاج نور الكبرعلي لي الشايقيأ.د. حسقيأ.د.</h2>
                <p className='text-lg mt-4'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي ليى أ.د. حسن علي الشايقي أ.د. حسن ى أ.د. حسن علي الشايقي أ.د. حسن  الشايقيأ.د. حسقيأ.د.</p>
                <p className="pt-2 flex flex-row-reverse gap-3 items-center">
                  <FiCalendar />
                  <span>12/01/2022</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between mt-10 gap-6" data-aos="fade-up">
              <img src="/exmp.jpg" alt="photo" className='object-cover h-44 w-44' />
              <div className="text-end">
                <h2 className='font-bold text-2xl text-yellow-600 hover:underline'>قاعة الحاج نور الكبرعلي لي الشايقيأ.د. حسقيأ.د.</h2>
                <p className='text-lg mt-4'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي ليى أ.د. حسن علي الشايقي أ.د. حسن ى أ.د. حسن علي الشايقي أ.د. حسن  الشايقيأ.د. حسقيأ.د.</p>
                <p className="pt-2 flex flex-row-reverse gap-3 items-center">
                  <FiCalendar />
                  <span>12/01/2022</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between mt-10 gap-6" data-aos="fade-up">
              <img src="/exmp.jpg" alt="photo" className='object-cover h-44 w-44' />
              <div className="text-end">
                <h2 className='font-bold text-2xl text-yellow-600 hover:underline'>قاعة الحاج نور الكبرعلي لي الشايقيأ.د. حسقيأ.د.</h2>
                <p className='text-lg mt-4'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي ليى أ.د. حسن علي الشايقي أ.د. حسن ى أ.د. حسن علي الشايقي أ.د. حسن  الشايقيأ.د. حسقيأ.د.</p>
                <p className="pt-2 flex flex-row-reverse gap-3 items-center">
                  <FiCalendar />
                  <span>12/01/2022</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between mt-10 gap-6" data-aos="fade-up">
              <img src="/exmp.jpg" alt="photo" className='object-cover h-44 w-44' />
              <div className="text-end">
                <h2 className='font-bold text-2xl text-yellow-600 hover:underline'>قاعة الحاج نور الكبرعلي لي الشايقيأ.د. حسقيأ.د.</h2>
                <p className='text-lg mt-4'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي ليى أ.د. حسن علي الشايقي أ.د. حسن ى أ.د. حسن علي الشايقي أ.د. حسن  الشايقيأ.د. حسقيأ.د.</p>
                <p className="pt-2 flex flex-row-reverse gap-3 items-center">
                  <FiCalendar />
                  <span>12/01/2022</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between mt-10 gap-6" data-aos="fade-up">
              <img src="/exmp.jpg" alt="photo" className='object-cover h-44 w-44' />
              <div className="text-end">
                <h2 className='font-bold text-2xl text-yellow-600 hover:underline'>قاعة الحاج نور الكبرعلي لي الشايقيأ.د. حسقيأ.د.</h2>
                <p className='text-lg mt-4'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي ليى أ.د. حسن علي الشايقي أ.د. حسن ى أ.د. حسن علي الشايقي أ.د. حسن  الشايقيأ.د. حسقيأ.د.</p>
                <p className="pt-2 flex flex-row-reverse gap-3 items-center">
                  <FiCalendar />
                  <span>12/01/2022</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between mt-10 gap-6" data-aos="fade-up">
              <img src="/exmp.jpg" alt="photo" className='object-cover h-44 w-44' />
              <div className="text-end">
                <h2 className='font-bold text-2xl text-yellow-600 hover:underline'>قاعة الحاج نور الكبرعلي لي الشايقيأ.د. حسقيأ.د.</h2>
                <p className='text-lg mt-4'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي ليى أ.د. حسن علي الشايقي أ.د. حسن ى أ.د. حسن علي الشايقي أ.د. حسن  الشايقيأ.د. حسقيأ.د.</p>
                <p className="pt-2 flex flex-row-reverse gap-3 items-center">
                  <FiCalendar />
                  <span>12/01/2022</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse py-1 bg-yellow-600 text-white items-center text-xl w-max mt-32">
              <p className='px-4 cursor-pointer py-2'><FiChevronsRight /></p>
              <p className='px-4 hover:underline cursor-pointer py-2 border-x'>1</p>
              <p className='px-4 hover:underline cursor-pointer py-2 border-l'>2</p>
              <p className='px-4 hover:underline cursor-pointer py-2 border-l'>3</p>
              <p className='px-4 cursor-pointer py-2'><FiChevronsLeft /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Programs
