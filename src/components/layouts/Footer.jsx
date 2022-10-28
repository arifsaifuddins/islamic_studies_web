import React from 'react';
import { FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='px-24 py-16 bg-stone-700 font-[tajawal] text-slate-100 border-t-4 border-yellow-600' >
      <div className="flex flex-row-reverse items-center justify-between">
        <Link to="/">الدراسات الإسلامية</Link>
        <div className="flex flex-row-reverse items-center gap-2">
          <Link to="/about">عن الكلية</Link>
          <p>.</p>
          <Link to="/contact">اتصل بنا</Link>
          <p>.</p>
          <a href='https://iua.edu.sd' target="_blank">جامعة إفريقيا العالمية</a>
          <p>.</p>
          <a href='https://github.com/ariefsaifuddien/islamic_studies_web'>
            <FiGithub />
          </a>
        </div>
      </div>
      <footer className='py-6 rounded-lg bg-stone-500 text-center my-14'>الدراسات الإسلامية | الموقع الرسمي لكلية الدراسات الإسلامية بجامعة إفريقيا العالمية</footer>
      <p className='text-center'>&copy; Islamic Studies 2022 | Khartoum-Sudan</p>
    </div>
  );
}

export default Footer;