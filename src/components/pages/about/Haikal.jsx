import React from 'react'
import { Helmet } from 'react-helmet'
import { FiMonitor, FiUser, FiUserCheck } from 'react-icons/fi'

const Haikal = () => {
  return (
    <>
      <Helmet>
        <title>Islamic Studies | الهيكل الإداري</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>الهيكل الإداري</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>هيكل كلية الدراسات الإسلامية الإداري</h2>
          <div className="mx-auto lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="mx-auto w-max mb-14">
              <a href='#majlis' className="flex flex-col items-center px-6 py-4 w-max mx-auto pt-12 rounded-lg shadow bg-white">
                <div className="p-4 rounded-lg bg-green-400 mb-4 text-white w-max text-2xl">
                  <FiUserCheck />
                </div>
                <h3 className='text-yellow-600 font-bold'>مجلس كلية الدراسات الإسلامية</h3>
              </a>
            </div>
            <div className="flex flex-col w-full md:flex-row-reverse gap-12 justify-center mb-20" data-aos="fade-down">
              <div className="md:w-80 w-full relative pt-14">
                <div className="p-6 right-[38%] absolute top-0 rounded-full bg-purple-400 text-white w-max text-2xl">
                  <FiUser />
                </div>
                <div className='px-7 py-5 bg-white text-center font-bold text-yellow-600 rounded-lg shadow'>عميد الكلية</div>
              </div>
              <div className="md:w-80 w-full relative pt-14">
                <div className="p-6 right-[38%] absolute top-0 rounded-full bg-purple-400 text-white w-max text-2xl">
                  <FiUser />
                </div>
                <div className='px-7 py-5 bg-white text-center font-bold text-yellow-600 rounded-lg shadow'>نائب عميد الكلية</div>
              </div>
            </div>
            <div className="flex flex-col w-full md:flex-row-reverse gap-6 justify-between mb-20" data-aos="fade-down">
              <h3 className='md:w-52 w-full px-7 py-3 text-center font-bold text-yellow-600 rounded-lg shadow bg-white text-sm'>رئيس وحدة الدراسات العليا</h3>
              <h3 className='md:w-52 w-full px-7 py-3 text-center font-bold text-yellow-600 rounded-lg shadow bg-white text-sm'>رئيس وحدة الخدمة المجتمعية</h3>
              <h3 className='md:w-52 w-full px-7 py-3 text-center font-bold text-yellow-600 rounded-lg shadow bg-white text-sm'>رئيس وحدة الشؤون التعليمية</h3>
              <h3 className='md:w-52 w-full px-7 py-3 text-center font-bold text-yellow-600 rounded-lg shadow bg-white text-sm'>رئيس وحدة الكليات المنتسبة</h3>
            </div>
            <div className="flex flex-col w-full md:flex-row-reverse justify-center gap-6 mb-20" data-aos="fade-down">
              <h3 className='md:w-52 w-full px-7 py-3 text-center font-bold text-yellow-600 rounded-lg shadow bg-white text-sm'>رئيس وحدة الشؤون الثقافية والإجتماعية</h3>
              <h3 className='md:w-52 w-full px-7 py-3 text-center font-bold text-yellow-600 rounded-lg shadow bg-white text-sm'>رئيس مجلة الكلية المحكمة</h3>
              <h3 className='md:w-52 w-full px-7 py-3 text-center font-bold text-yellow-600 rounded-lg shadow bg-white text-sm'>رئيس  وحدة الجودة  وترقية الأداء </h3>
            </div>
            <div className="flex flex-col w-full md:flex-row-reverse gap-12 justify-center" data-aos="fade-down">
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
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:left-0 left-4 rounded-br-lg bg-yellow-600 w-max text-white'>الهيكل الوظيفي لكلية الدراسات الإسلامية</h2>
          <div className="mx-auto lg:w-[900px] w-full px-2 md:px-0 text-lg text-end leading-9 py-32">
            <div className="relative mb-24">
              <h2 className='text-lg text-white px-4 py-1 rounded-full w-max bg-yellow-600 absolute -right-3 -top-5'>مجلس كلية الدراسات الإسلامية</h2>
              <ul className='pt-3 flex flex-col gap-4 rounded-lg overflow-hidden'>
                <li className='flex flex-row-reverse bg-white rounded-lg'>
                  <p className='py-2 px-6'>التميز في الدراسات الإسلامية، في إطار من الأصالة والمعاصرة، وطنياً وإقليمياً وعالمياً</p>
                </li>
                <li className='flex flex-row-reverse bg-white rounded-lg'>
                  <p className='py-2 px-6'>تقديم خدمة تعليمية وبحثية متميزة، في الدراسات الإسلامية؛ تسهم في البناء المعرفي والحضاري، وطنياً وإقليمياً وعالمياً، على أسس تتسم بالوسطية والاعتدال</p>
                </li>
                <li className='flex flex-row-reverse bg-white rounded-lg'>
                  <p className='py-2 px-6'>التميز والكفاءة، الأصالة والمعاصرة، الوسطية والاعتدال</p>
                </li>
              </ul>
            </div>
            <div className="relative mb-24">
              <h2 className='text-lg text-white px-4 py-1 rounded-full w-max bg-yellow-600 absolute -right-3 -top-5'>مجلس كلية الدراسات الإسلامية</h2>
              <ul className='pt-3 flex flex-col gap-4 rounded-lg overflow-hidden'>
                <li className='flex flex-row-reverse bg-white rounded-lg'>
                  <p className='py-2 px-6'>التميز في الدراسات الإسلامية، في إطار من الأصالة والمعاصرة، وطنياً وإقليمياً وعالمياً</p>
                </li>
                <li className='flex flex-row-reverse bg-white rounded-lg'>
                  <p className='py-2 px-6'>تقديم خدمة تعليمية وبحثية متميزة، في الدراسات الإسلامية؛ تسهم في البناء المعرفي والحضاري، وطنياً وإقليمياً وعالمياً، على أسس تتسم بالوسطية والاعتدال</p>
                </li>
                <li className='flex flex-row-reverse bg-white rounded-lg'>
                  <p className='py-2 px-6'>التميز والكفاءة، الأصالة والمعاصرة، الوسطية والاعتدال</p>
                </li>
              </ul>
            </div>
            <div className="relative mb-24">
              <h2 className='text-lg text-white px-4 py-1 rounded-full w-max bg-yellow-600 absolute -right-3 -top-5'>مجلس كلية الدراسات الإسلامية</h2>
              <ul className='pt-3 flex flex-col gap-4 rounded-lg overflow-hidden'>
                <li className='flex flex-row-reverse bg-white rounded-lg'>
                  <p className='py-2 px-6'>التميز في الدراسات الإسلامية، في إطار من الأصالة والمعاصرة، وطنياً وإقليمياً وعالمياً</p>
                </li>
                <li className='flex flex-row-reverse bg-white rounded-lg'>
                  <p className='py-2 px-6'>تقديم خدمة تعليمية وبحثية متميزة، في الدراسات الإسلامية؛ تسهم في البناء المعرفي والحضاري، وطنياً وإقليمياً وعالمياً، على أسس تتسم بالوسطية والاعتدال</p>
                </li>
                <li className='flex flex-row-reverse bg-white rounded-lg'>
                  <p className='py-2 px-6'>التميز والكفاءة، الأصالة والمعاصرة، الوسطية والاعتدال</p>
                </li>
              </ul>
            </div>
            <div className="relative mb-24">
              <h2 className='text-lg text-white px-4 py-1 rounded-full w-max bg-yellow-600 absolute -right-3 -top-5'>مجلس كلية الدراسات الإسلامية</h2>
              <ul className='pt-3 flex flex-col gap-4 rounded-lg overflow-hidden'>
                <li className='flex flex-row-reverse bg-white rounded-lg'>
                  <p className='py-2 px-6'>التميز في الدراسات الإسلامية، في إطار من الأصالة والمعاصرة، وطنياً وإقليمياً وعالمياً</p>
                </li>
                <li className='flex flex-row-reverse bg-white rounded-lg'>
                  <p className='py-2 px-6'>تقديم خدمة تعليمية وبحثية متميزة، في الدراسات الإسلامية؛ تسهم في البناء المعرفي والحضاري، وطنياً وإقليمياً وعالمياً، على أسس تتسم بالوسطية والاعتدال</p>
                </li>
                <li className='flex flex-row-reverse bg-white rounded-lg'>
                  <p className='py-2 px-6'>التميز والكفاءة، الأصالة والمعاصرة، الوسطية والاعتدال</p>
                </li>
              </ul>
            </div>
            <div className="relative mb-24">
              <h2 className='text-lg text-white px-4 py-1 rounded-full w-max bg-yellow-600 absolute -right-3 -top-5'>مجلس كلية الدراسات الإسلامية</h2>
              <ul className='pt-3 flex flex-col gap-4 rounded-lg overflow-hidden'>
                <li className='flex flex-row-reverse bg-white rounded-lg'>
                  <p className='py-2 px-6'>التميز في الدراسات الإسلامية، في إطار من الأصالة والمعاصرة، وطنياً وإقليمياً وعالمياً</p>
                </li>
                <li className='flex flex-row-reverse bg-white rounded-lg'>
                  <p className='py-2 px-6'>تقديم خدمة تعليمية وبحثية متميزة، في الدراسات الإسلامية؛ تسهم في البناء المعرفي والحضاري، وطنياً وإقليمياً وعالمياً، على أسس تتسم بالوسطية والاعتدال</p>
                </li>
                <li className='flex flex-row-reverse bg-white rounded-lg'>
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
