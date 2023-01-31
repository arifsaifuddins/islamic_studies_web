import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Islamic Studies | اتصل بنا</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>اتصل بنا</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>اتصل بنا أو أجدنا</h2>
          <div className="mx-auto lg:w-[900px] w-full leading-9 py-32">
            <div className='w-full mb-20'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466.45611320821246!2d32.57352796387993!3d15.525614369404877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168e91d2009ab833%3A0x8619ddb180b9d7e2!2sInternational%20University%20of%20Africa%20Faculty%20of%20Shariah!5e1!3m2!1sen!2s!4v1670451398740!5m2!1sen!2s" height="450" style={{ border: 0, width: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='flex md:flex-row flex-col items-center justify-around gap-6 text-xl'>
              <a href="https://facebook.com/profile.php?id=100088419282005" target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 md:w-52 w-full text-white rounded-lg shadow items-center gap-2">
                <p className="p-3 hover:scale-105 rounded-full w-max bg-blue-800"><FiFacebook /></p>
                <h1 className='text-slate-900'>Facebook</h1>
              </a>
              <a href="https://instagram.com/islamicstudiesiua" target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 md:w-52 w-full text-white rounded-lg shadow items-center gap-2">
                <p className="p-3 hover:scale-105 rounded-full w-max bg-pink-600"><FiInstagram /></p>
                <h1 className='text-slate-900'>Instagram</h1>
              </a>
              <a href="https://twitter.com/islamicstdiua" target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 md:w-52 w-full text-white rounded-lg shadow items-center gap-2">
                <p className="p-3 hover:scale-105 rounded-full w-max bg-blue-400"><FiTwitter /></p>
                <h1 className='text-slate-900'>Twitter</h1>
              </a>
              <a href="mailto:islamicstudiesiua@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 md:w-52 w-full text-white rounded-lg shadow items-center gap-2">
                <p className="p-3 hover:scale-105 rounded-full w-max bg-red-800"><FiMail /></p>
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
