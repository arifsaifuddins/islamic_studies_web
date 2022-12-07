import React from 'react'
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi'

const Contact = () => {
  return (
    <>
      <div className='h-80 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='text-5xl m-auto'>اتصل بنا</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto w-[1200px] relative">
          <h2 className='px-3 py-1 absolute right-0 rounded-bl-lg bg-yellow-600 w-max text-white'>اتصل بنا أو أوجدنا</h2>
          <div className="mx-auto w-[900px] text-lg text-end leading-9 py-32 text-white">
            <div className='w-full mb-20'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466.45611320821246!2d32.57352796387993!3d15.525614369404877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168e91d2009ab833%3A0x8619ddb180b9d7e2!2sInternational%20University%20of%20Africa%20Faculty%20of%20Shariah!5e1!3m2!1sen!2s!4v1670451398740!5m2!1sen!2s" height="450" style={{ border: 0, width: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='flex flex-row-reverse items-end justify-around gap-6 text-xl'>
              <a href="https://facebook.com/profile.php?id=100088419282005" target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 w-52 rounded-lg shadow items-center gap-2">
                <a className="p-3 hover:scale-105 rounded-full w-max bg-blue-800"><FiFacebook /></a>
                <h1 className='text-slate-900'>Facebook</h1>
              </a>
              <a href="https://instagram.com/islamicstudiesiua" target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 w-52 rounded-lg shadow items-center gap-2">
                <a className="p-3 hover:scale-105 rounded-full w-max bg-pink-600"><FiInstagram /></a>
                <h1 className='text-slate-900'>Instagram</h1>
              </a>
              <a href="https://twitter.com/islamicstdiua" target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 w-52 rounded-lg shadow items-center gap-2">
                <a className="p-3 hover:scale-105 rounded-full w-max bg-blue-400"><FiTwitter /></a>
                <h1 className='text-slate-900'>Twitter</h1>
              </a>
              <a href="mailto:islamicstudiesiua@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 w-52 rounded-lg shadow items-center gap-2">
                <a className="p-3 hover:scale-105 rounded-full w-max bg-red-800"><FiMail /></a>
                <h1 className='text-slate-900'>G-Mail</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
