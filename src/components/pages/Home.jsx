import React from 'react';
import { Link } from 'react-router-dom';
import { FiBriefcase, FiPhone } from 'react-icons/fi'

const Home = () => {
  return (
    <div className='pb-80 pt-28 bg-stone-700 bg-opacity-50 text-white'>
      <div className="flex flex-col font-bold gap-3 items-center mx-auto mt-10">
        <h1 className='text-6xl text-yellow-400'>الدراسات الإسلامية</h1>
        <p className='text-2xl '>الموقع الرسمي لكلية الدراسات الإسلامية بجامعة إفريقيا العالمية</p>
        <p className='text-xl text-yellow-400'>الخرطوم - السودان</p>

        <div className="flex flex-row-reverse items-center gap-4 mt-14">
          <Link to="/programs" className='px-8 py-2 border-4 hover:border-yellow-400 border-yellow-600 hover:bg-yellow-400 bg-yellow-600 rounded-lg flex flex-row-reverse items-center gap-2'><FiBriefcase /> انظر البرامج</Link>
          <Link to='/contact' className='px-8 py-2 border-4 hover:border-yellow-400 border-yellow-600 rounded-lg flex flex-row-reverse items-center gap-2'><FiPhone /> اتصل بنا</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
