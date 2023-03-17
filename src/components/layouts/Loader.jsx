import React from 'react'

const Loader = () => {
  return (
    <div className='h-52 flex justify-center items-center'>
      <div className='m-auto text-center w-max'>
        <h2 className="text-slate-700 mb-4 font-bold text-2xl">انتظر قليلا!</h2>
        <h1 className="text-blue-600 font-bold">جاري تحميل البيانات ...</h1>
      </div>
    </div>
  )
}

export default Loader
