import React from 'react'
import { FiFacebook, FiGithub, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='py-14 bg-stone-700 text-slate-100 border-t-4 border-yellow-600' >
      <div className="mx-auto xl:px-0 px-4 w-full xl:w-[1200px] flex flex-col gap-5 lg:flex-row-reverse items-center justify-between">
        <Link className='text-yellow-600 hover:underline text-bold text-2xl lg:text-xl' to="/">كلية الدراسات الإسلامية</Link>
        <div className="flex flex-row-reverse items-center text-sm lg:text-base gap-2">
          <Link className='hover:text-yellow-600' to="/about">عن الكلية</Link>
          <p>.</p>
          <Link className='hover:text-yellow-600' to="/contact">اتصل بنا</Link>
          <p>.</p>
          <a className='hover:text-yellow-600 hidden sm:inline' href='https://iua.edu.sd' target="_blank">جامعة إفريقيا العالمية</a>
          <p className='hidden sm:block'>.</p>
          <Link className='hover:text-yellow-600' to="/admin">فيه</Link>
          <p>.</p>
          <a className='hover:text-yellow-600' href='https://github.com/ariefsaifuddien/islamic_studies_web'>
            <FiGithub />
          </a>
        </div>
      </div>
      <div className='flex lg:flex-row-reverse flex-col gap-5 lg:items-start items-center justify-between lg:mt-8 mt-20 mx-auto xl:px-0 px-4 w-full xl:w-[1200px]'>
        <div className="flex flex-col lg:items-end items-center gap-8">
          <div className='flex flex-row-reverse items-end gap-6 text-xl'>
            <a className="p-3 hover:scale-105 rounded-lg bg-blue-800" href="https://facebook.com/profile.php?id=100088419282005" target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
            <a className="p-3 hover:scale-105 rounded-lg bg-pink-500" href="https://instagram.com/islamicstudiesiua" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
            <a className="p-3 hover:scale-105 rounded-lg bg-blue-400" href="https://twitter.com/islamicstdiua" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
            <a className="p-3 hover:scale-105 rounded-lg bg-red-800" href="mailto:islamicstudiesiua@gmail.com" target="_blank" rel="noopener noreferrer"><FiMail /></a>
          </div>
          <h3 className='lg:text-end text-center text-xs lg:text-base'>الموقع الرسمي لكلية الدراسات الإسلامية بجامعة إفريقيا العالمية</h3>
        </div>
        <p className='font-light text-center w-max py-1 px-2 h-max text-xs lg:text-base rounded-lg border border-yellow-600'>&copy; Islamic Studies 2022 . Khartoum-Sudan . IUA</p>
      </div>
    </footer>
  )
}

export default Footer
