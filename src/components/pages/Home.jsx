import React from 'react';
import { Link } from 'react-router-dom';
import { FiBriefcase, FiPhone } from 'react-icons/fi'

const Home = () => {
  return (
    <div className='pb-96 pt-32 bg-stone-700 bg-opacity-50 text-white'>
      <div className="flex flex-col font-bold gap-3 items-center mx-auto">
        <h1 className='text-6xl text-yellow-600'>الدراسات الإسلامية</h1>
        <p className='text-2xl '>الموقع الرسمي لكلية الدراسات الإسلامية بجامعة إفريقيا العالمية</p>
        <p className='text-xl'>الخرطوم | السودان</p>

        <div className="flex flex-row-reverse items-center gap-4 mt-14">
          <Link to="/programs" className='px-8 py-2 border border-yellow-600 hover:bg-yellow-500 bg-yellow-600 rounded-lg flex flex-row-reverse items-center gap-2'><FiBriefcase /> انظر البرامج</Link>
          <Link to='/contact' className='px-8 py-2 border border-yellow-600 rounded-lg flex flex-row-reverse items-center gap-2'><FiPhone /> اتصل بنا</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
