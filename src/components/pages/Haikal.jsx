import React from 'react'
import { FiMonitor, FiUser, FiUserCheck } from 'react-icons/fi'

const Haikal = () => {
  return (
    <>
      <div className='h-96 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='text-5xl m-auto'>الهيكل الإداري</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto w-[1200px] relative ">
          <h2 className='px-3 py-1 absolute right-0 rounded-bl-lg bg-yellow-600 w-max text-white'>هيكل الكلية الإداري</h2>
          <div className="mx-auto w-[900px] text-lg text-end leading-9 py-32">
            <div className="mx-auto w-max mb-14">
              <a href='#majlis' className="flex flex-col items-center px-6 py-4 w-max mx-auto pt-12 rounded-lg shadow bg-white">
                <div className="p-4 rounded-lg bg-green-400 mb-4 text-white w-max text-2xl">
                  <FiUserCheck />
                </div>
                <h3 className='text-yellow-600 font-bold'>مجلس كلية الدراسات الإسلامية</h3>
              </a>
            </div>
            <div className="flex flex-row-reverse gap-12 justify-center mb-20" data-aos="fade-down">
              <div className="w-80 relative pt-14">
                <div className="p-6 right-[38%] absolute top-0 rounded-full bg-purple-400 text-white w-max text-2xl">
                  <FiUser />
                </div>
                <div className='px-7 py-5 bg-white text-center font-bold text-yellow-600 rounded-lg shadow'>عميد الكلية</div>
              </div>
              <div className="w-80 relative pt-14">
                <div className="p-6 right-[38%] absolute top-0 rounded-full bg-purple-400 text-white w-max text-2xl">
                  <FiUser />
                </div>
                <div className='px-7 py-5 bg-white text-center font-bold text-yellow-600 rounded-lg shadow'>نائب عميد الكلية</div>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-6 justify-between mb-20" data-aos="fade-down">
              <h3 className='w-52 px-7 py-3 text-center font-bold text-yellow-600 rounded-full shadow bg-white text-sm'>رئيس وحدة الدراسات العليا</h3>
              <h3 className='w-52 px-7 py-3 text-center font-bold text-yellow-600 rounded-full shadow bg-white text-sm'>رئيس وحدة الخدمة المجتمعية</h3>
              <h3 className='w-52 px-7 py-3 text-center font-bold text-yellow-600 rounded-full shadow bg-white text-sm'>رئيس وحدة الشؤون التعليمية</h3>
              <h3 className='w-52 px-7 py-3 text-center font-bold text-yellow-600 rounded-full shadow bg-white text-sm'>رئيس وحدة الكليات المنتسبة</h3>
            </div>
            <div className="flex flex-row-reverse justify-center gap-6 mb-20" data-aos="fade-down">
              <h3 className='w-52 px-7 py-3 text-center font-bold text-yellow-600 rounded-full shadow bg-white text-sm'>رئيس وحدة الشؤون الثقافية والإجتماعية</h3>
              <h3 className='w-52 px-7 py-3 text-center font-bold text-yellow-600 rounded-full shadow bg-white text-sm'>رئيس مجلة الكلية المحكمة</h3>
              <h3 className='w-52 px-7 py-3 text-center font-bold text-yellow-600 rounded-full shadow bg-white text-sm'>رئيس  وحدة الجودة  وترقية الأداء </h3>
            </div>
            <div className="flex flex-row-reverse gap-12 justify-center" data-aos="fade-down">
              <div className="relative pt-14">
                <div className="p-6 right-[38%] absolute top-0 rounded-full bg-red-400 text-white w-max text-2xl">
                  <FiMonitor />
                </div>
                <div className='px-7 py-5 bg-white text-center font-bold text-yellow-600 rounded-lg shadow'>مسجل كلية الدراسات الإسلامية</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-t-4 border-yellow-600">
        <div className="mx-auto w-[1200px] relative">
          <h2 className='px-3 py-1 absolute left-0 rounded-br-lg bg-yellow-600 w-max text-white'>الهيكل الوظيفي لكلية الدراسات الإسلامية</h2>
          <div className="mx-auto w-[900px] text-lg text-end leading-9 py-32">
            <div className="border-t-8 border-yellow-600 relative mb-24" id='majlis'>
              <div className='text-lg text-white p-2 border-2 border-yellow-600 rounded-full w-max bg-yellow-600 absolute -left-3 -top-6'>
                <div className="p-2 rounded-full bg-white" />
              </div>
              <h2 className='text-lg text-white px-4 py-1 rounded-full w-max bg-yellow-600 absolute -right-3 -top-6'>مجلس كلية الدراسات الإسلامية</h2>
              <ul className='bg-white pt-4'>
                <li className='flex flex-row-reverse border-b-4'>
                  <p className='py-2 px-6'>التميز في الدراسات الإسلامية، في إطار من الأصالة والمعاصرة، وطنياً وإقليمياً وعالمياً</p>
                </li>
                <li className='flex flex-row-reverse border-b-4'>
                  <p className='py-2 px-6'>تقديم خدمة تعليمية وبحثية متميزة، في الدراسات الإسلامية؛ تسهم في البناء المعرفي والحضاري، وطنياً وإقليمياً وعالمياً، على أسس تتسم بالوسطية والاعتدال</p>
                </li>
                <li className='flex flex-row-reverse border-b-4'>
                  <p className='py-2 px-6'>التميز والكفاءة، الأصالة والمعاصرة، الوسطية والاعتدال</p>
                </li>
              </ul>
            </div>
            <div className="border-t-8 border-yellow-600 relative mb-24">
              <div className='text-lg text-white p-2 border-2 border-yellow-600 rounded-full w-max bg-yellow-600 absolute -left-3 -top-6'>
                <div className="p-2 rounded-full bg-white" />
              </div>
              <h2 className='text-lg text-white px-4 py-1 rounded-full w-max bg-yellow-600 absolute -right-3 -top-6'>مجلس كلية الدراسات الإسلامية</h2>
              <ul className='bg-white pt-4'>
                <li className='flex flex-row-reverse border-b-4'>
                  <p className='py-2 px-6'>التميز في الدراسات الإسلامية، في إطار من الأصالة والمعاصرة، وطنياً وإقليمياً وعالمياً</p>
                </li>
                <li className='flex flex-row-reverse border-b-4'>
                  <p className='py-2 px-6'>تقديم خدمة تعليمية وبحثية متميزة، في الدراسات الإسلامية؛ تسهم في البناء المعرفي والحضاري، وطنياً وإقليمياً وعالمياً، على أسس تتسم بالوسطية والاعتدال</p>
                </li>
                <li className='flex flex-row-reverse border-b-4'>
                  <p className='py-2 px-6'>التميز والكفاءة، الأصالة والمعاصرة، الوسطية والاعتدال</p>
                </li>
              </ul>
            </div>
            <div className="border-t-8 border-yellow-600 relative mb-24">
              <div className='text-lg text-white p-2 border-2 border-yellow-600 rounded-full w-max bg-yellow-600 absolute -left-3 -top-6'>
                <div className="p-2 rounded-full bg-white" />
              </div>
              <h2 className='text-lg text-white px-4 py-1 rounded-full w-max bg-yellow-600 absolute -right-3 -top-6'>مجلس كلية الدراسات الإسلامية</h2>
              <ul className='bg-white pt-4'>
                <li className='flex flex-row-reverse border-b-4'>
                  <p className='py-2 px-6'>التميز في الدراسات الإسلامية، في إطار من الأصالة والمعاصرة، وطنياً وإقليمياً وعالمياً</p>
                </li>
                <li className='flex flex-row-reverse border-b-4'>
                  <p className='py-2 px-6'>تقديم خدمة تعليمية وبحثية متميزة، في الدراسات الإسلامية؛ تسهم في البناء المعرفي والحضاري، وطنياً وإقليمياً وعالمياً، على أسس تتسم بالوسطية والاعتدال</p>
                </li>
                <li className='flex flex-row-reverse border-b-4'>
                  <p className='py-2 px-6'>التميز والكفاءة، الأصالة والمعاصرة، الوسطية والاعتدال</p>
                </li>
              </ul>
            </div>
            <div className="border-t-8 border-yellow-600 relative mb-24">
              <div className='text-lg text-white p-2 border-2 border-yellow-600 rounded-full w-max bg-yellow-600 absolute -left-3 -top-6'>
                <div className="p-2 rounded-full bg-white" />
              </div>
              <h2 className='text-lg text-white px-4 py-1 rounded-full w-max bg-yellow-600 absolute -right-3 -top-6'>مجلس كلية الدراسات الإسلامية</h2>
              <ul className='bg-white pt-4'>
                <li className='flex flex-row-reverse border-b-4'>
                  <p className='py-2 px-6'>التميز في الدراسات الإسلامية، في إطار من الأصالة والمعاصرة، وطنياً وإقليمياً وعالمياً</p>
                </li>
                <li className='flex flex-row-reverse border-b-4'>
                  <p className='py-2 px-6'>تقديم خدمة تعليمية وبحثية متميزة، في الدراسات الإسلامية؛ تسهم في البناء المعرفي والحضاري، وطنياً وإقليمياً وعالمياً، على أسس تتسم بالوسطية والاعتدال</p>
                </li>
                <li className='flex flex-row-reverse border-b-4'>
                  <p className='py-2 px-6'>التميز والكفاءة، الأصالة والمعاصرة، الوسطية والاعتدال</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Haikal
