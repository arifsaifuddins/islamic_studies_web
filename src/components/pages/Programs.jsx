import React from 'react'
import { FiCalendar, FiChevronsLeft, FiChevronsRight, FiSearch, FiSliders } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Programs = () => {
  return (
    <>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>البرامج والأخبار</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>البرامج والأخبار والمؤتمرات</h2>
          <div className="mx-auto lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="flex-row-reverse flex items-center gap-4 relative">
              <input type="text" className='bg-transparent text-base py-2 outline-none shadow-none text-end w-full pl-4 pr-12 border rounded-lg border-yellow-600' />
              <div className="p-2 text-2xl rounded-lg text-yellow-600 absolute right-2">
                <FiSearch />
              </div>
              <div className="p-2 text-2xl rounded-lg bg-yellow-600 text-white">
                <FiSliders />
              </div>
            </div>
            <div className="flex flex-col shadow-lg hover:shadow-xl overflow-hidden bg-white my-16">
              <Link to="/programs/okkook" className="relative">
                <img src="/exmp.jpg" alt="poster" className="w-full lg:h-80 h-60 object-cover hover:object-right-bottom transition-all duration-500" />
                <div className="flex justify-end bg-cover text-slate-100 flex-col absolute right-0 bottom-0 left-0">
                  <h1 className="md:text-2xl text-sm font-bold p-4 bg-opacity-50 bg-slate-200 hover:underline hover:text-yellow-600">لكلية تؤدي رسالة الجامعة، وترفد المجتمعات المحلية والعالمية بخريجين، على مدى عقدٍ من الزمان، من خلال واجبهة؛ لمواكبة التطور العلمي الهائل</h1>
                </div>
              </Link>
            </div>
            <div className="flex flex-row-reverse justify-between mt-10 md:gap-6 gap-4" data-aos="fade-up">
              <img src="/exmp.jpg" alt="photo" className='object-cover md:h-44 md:w-44 w-32 h-32' />
              <div className="text-end">
                <h2 className='font-bold md:text-2xl text-sm text-yellow-600 hover:underline'>قاعة الحاج نور الكبرعلي لي الشايقيأ.د. حسقيأ.د.</h2>
                <p className='md:text-lg text-xs md:mt-4 mt-2'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي ليى أ.د. حسن علي الشايقي أ.د. حسن ى أ.د. حسن علي الشايقي أ.د. حسن  الشايقيأ.د. حسقيأ.د.</p>
                <p className="pt-2 flex flex-row-reverse text-sm md:text-md gap-3 items-center">
                  <FiCalendar />
                  <span>12/01/2022</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse justify-between mt-10 md:gap-6 gap-4" data-aos="fade-up">
              <img src="/exmp.jpg" alt="photo" className='object-cover md:h-44 md:w-44 w-32 h-32' />
              <div className="text-end">
                <h2 className='font-bold md:text-2xl text-sm text-yellow-600 hover:underline'>قاعة الحاج نور الكبرعلي لي الشايقيأ.د. حسقيأ.د.</h2>
                <p className='md:text-lg text-xs md:mt-4 mt-2'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي ليى أ.د. حسن علي الشايقي أ.د. حسن ى أ.د. حسن علي الشايقي أ.د. حسن  الشايقيأ.د. حسقيأ.د.</p>
                <p className="pt-2 flex flex-row-reverse text-sm md:text-md gap-3 items-center">
                  <FiCalendar />
                  <span>12/01/2022</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse justify-between mt-10 md:gap-6 gap-4" data-aos="fade-up">
              <img src="/exmp.jpg" alt="photo" className='object-cover md:h-44 md:w-44 w-32 h-32' />
              <div className="text-end">
                <h2 className='font-bold md:text-2xl text-sm text-yellow-600 hover:underline'>قاعة الحاج نور الكبرعلي لي الشايقيأ.د. حسقيأ.د.</h2>
                <p className='md:text-lg text-xs md:mt-4 mt-2'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي ليى أ.د. حسن علي الشايقي أ.د. حسن ى أ.د. حسن علي الشايقي أ.د. حسن  الشايقيأ.د. حسقيأ.د.</p>
                <p className="pt-2 flex flex-row-reverse text-sm md:text-md gap-3 items-center">
                  <FiCalendar />
                  <span>12/01/2022</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse justify-between mt-10 md:gap-6 gap-4" data-aos="fade-up">
              <img src="/exmp.jpg" alt="photo" className='object-cover md:h-44 md:w-44 w-32 h-32' />
              <div className="text-end">
                <h2 className='font-bold md:text-2xl text-sm text-yellow-600 hover:underline'>قاعة الحاج نور الكبرعلي لي الشايقيأ.د. حسقيأ.د.</h2>
                <p className='md:text-lg text-xs md:mt-4 mt-2'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي ليى أ.د. حسن علي الشايقي أ.د. حسن ى أ.د. حسن علي الشايقي أ.د. حسن  الشايقيأ.د. حسقيأ.د.</p>
                <p className="pt-2 flex flex-row-reverse text-sm md:text-md gap-3 items-center">
                  <FiCalendar />
                  <span>12/01/2022</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse justify-between mt-10 md:gap-6 gap-4" data-aos="fade-up">
              <img src="/exmp.jpg" alt="photo" className='object-cover md:h-44 md:w-44 w-32 h-32' />
              <div className="text-end">
                <h2 className='font-bold md:text-2xl text-sm text-yellow-600 hover:underline'>قاعة الحاج نور الكبرعلي لي الشايقيأ.د. حسقيأ.د.</h2>
                <p className='md:text-lg text-xs md:mt-4 mt-2'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي ليى أ.د. حسن علي الشايقي أ.د. حسن ى أ.د. حسن علي الشايقي أ.د. حسن  الشايقيأ.د. حسقيأ.د.</p>
                <p className="pt-2 flex flex-row-reverse text-sm md:text-md gap-3 items-center">
                  <FiCalendar />
                  <span>12/01/2022</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse justify-between mt-10 md:gap-6 gap-4" data-aos="fade-up">
              <img src="/exmp.jpg" alt="photo" className='object-cover md:h-44 md:w-44 w-32 h-32' />
              <div className="text-end">
                <h2 className='font-bold md:text-2xl text-sm text-yellow-600 hover:underline'>قاعة الحاج نور الكبرعلي لي الشايقيأ.د. حسقيأ.د.</h2>
                <p className='md:text-lg text-xs md:mt-4 mt-2'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي ليى أ.د. حسن علي الشايقي أ.د. حسن ى أ.د. حسن علي الشايقي أ.د. حسن  الشايقيأ.د. حسقيأ.د.</p>
                <p className="pt-2 flex flex-row-reverse text-sm md:text-md gap-3 items-center">
                  <FiCalendar />
                  <span>12/01/2022</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse justify-between mt-10 md:gap-6 gap-4" data-aos="fade-up">
              <img src="/exmp.jpg" alt="photo" className='object-cover md:h-44 md:w-44 w-32 h-32' />
              <div className="text-end">
                <h2 className='font-bold md:text-2xl text-sm text-yellow-600 hover:underline'>قاعة الحاج نور الكبرعلي لي الشايقيأ.د. حسقيأ.د.</h2>
                <p className='md:text-lg text-xs md:mt-4 mt-2'>قاعة الحاج نور الكبرى أ.د. حسن علي الشايقي أ.د. حسن علي ليى أ.د. حسن علي الشايقي أ.د. حسن ى أ.د. حسن علي الشايقي أ.د. حسن  الشايقيأ.د. حسقيأ.د.</p>
                <p className="pt-2 flex flex-row-reverse text-sm md:text-md gap-3 items-center">
                  <FiCalendar />
                  <span>12/01/2022</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse py-1 bg-yellow-600 text-white mx-auto md:mx-0 items-center text-sm md:text-xl w-max mt-24">
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
