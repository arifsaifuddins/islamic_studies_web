import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='py-16 bg-stone-700 text-slate-100 border-t-4 border-yellow-600' >
      <div className="mx-auto w-[1200px] flex flex-row-reverse items-center justify-between">
        <Link className='hover:text-yellow-600' to="/home">الدراسات الإسلامية</Link>
        <div className="flex flex-row-reverse items-center gap-2">
          <Link className='hover:text-yellow-600' to="/about">عن الكلية</Link>
          <p>.</p>
          <Link className='hover:text-yellow-600' to="/contact">اتصل بنا</Link>
          <p>.</p>
          <a className='hover:text-yellow-600' href='https://iua.edu.sd' target="_blank">جامعة إفريقيا العالمية</a>
          <p>.</p>
          <a className='hover:text-yellow-600' href='https://github.com/ariefsaifuddien/islamic_studies_web'>
            <FiGithub />
          </a>
        </div>
      </div>
      <footer className='mx-auto w-[1200px] py-6 rounded-lg bg-stone-500 text-center my-14'>الدراسات الإسلامية | الموقع الرسمي لكلية الدراسات الإسلامية بجامعة إفريقيا العالمية</footer>
      <p className='text-center'>&copy; Islamic Studies 2022 | Khartoum-Sudan</p>
    </div>
  )
}

export default Footer
