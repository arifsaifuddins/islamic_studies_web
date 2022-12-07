import React from 'react'

const Qobul = () => {
  return (
    <>
      <div className='h-80 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='text-5xl m-auto'>التسجيل والقبول</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto w-[1200px] relative">
          <h2 className='px-3 py-1 absolute right-0 rounded-bl-lg bg-yellow-600 w-max text-white'>رسوم كلية الدراسات الإسلامية</h2>
          <div className="mx-auto w-[900px] text-lg text-end leading-9 py-32">
            <div className="border-t-8 border-yellow-600 relative mt-6">
              <h2 className='text-lg text-white px-4 py-1 rounded-full w-[103%] bg-yellow-600 absolute -right-3 -left-3 -top-6 text-center'>رسوم كلية الدراسات الإسلامية</h2>
              <ul className='bg-white pt-4 shadow'>
                <li className='flex flex-row-reverse items-center font-bold gap-8 border-b-4 px-4 py-2 text-yellow-600'>
                  <p className='w-[50%] text-center'>الكليات الدراسية</p>
                  <div className='border-2 h-6 border-yellow-600' />
                  <p className='w-[20%] text-center'>الدولار</p>
                  <div className='border-2 h-6 border-yellow-600' />
                  <p className='w-[20%] text-center'>الجنيه</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-8 border-b-4 px-4 py-2'>
                  <p className='w-[50%]'>الكليات الدراسية</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[20%] text-center'>2000</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[20%] text-center'>230000</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-8 border-b-4 px-4 py-2'>
                  <p className='w-[50%]'>الكليات الدراسية</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[20%] text-center'>2000</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[20%] text-center'>230000</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-8 border-b-4 px-4 py-2'>
                  <p className='w-[50%]'>الكليات الدراسية</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[20%] text-center'>2000</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[20%] text-center'>230000</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-8 border-b-4 px-4 py-2'>
                  <p className='w-[50%]'>الكليات الدراسية</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[20%] text-center'>2000</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[20%] text-center'>230000</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-t-4 border-yellow-600">
        <div className="mx-auto w-[1200px] relative">
          <h2 className='px-3 py-1 absolute left-0 rounded-br-lg bg-yellow-600 w-max text-white'>شروط التسجيل والقبول</h2>
          <div className="mx-auto w-[900px] text-lg text-end leading-9 py-32">
            <h2 className='text-2xl font-bold text-yellow-600 mb-12'>شروط التسجيل والقبول</h2>
            <ul>
              <li className='flex flex-row-reverse relative mb-4' data-aos="fade-up">
                <p className='py-1 px-6 border-r-8 bg-white rounded-l-lg w-full border-yellow-600 pr-4'>التميز في الدراسات الإسلامية، في إطار من الأصالة والمعاصرة، وطنياً وإقليمياً وعالمياً</p>
              </li>
              <li className='flex flex-row-reverse relative mb-4' data-aos="fade-up">
                <p className='py-1 px-6 border-r-8 bg-white rounded-l-lg w-full border-yellow-600 pr-4'>تقديم خدمة تعليمية وبحثية متميزة، في الدراسات الإسلامية؛ تسهم في البناء المعرفي والحضاري، وطنياً وإقليمياً وعالمياً، على أسس تتسم بالوسطية والاعتدال</p>
              </li>
              <li className='flex flex-row-reverse relative mb-4' data-aos="fade-up">
                <p className='py-1 px-6 border-r-8 bg-white rounded-l-lg w-full border-yellow-600 pr-4'>التميز والكفاءة، الأصالة والمعاصرة، الوسطية والاعتدال</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Qobul
