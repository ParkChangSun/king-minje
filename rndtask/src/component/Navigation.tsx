import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

const Navigation = () => {
  return (
    <nav className='bg-[#D9F4FB] w-full p-2 h-16'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='flex items-center'>
            <img src={Logo} alt='logo' className='w-12 mr-2' />
          </div>
          <div className='flex items-center'>
            <span className='px-2 text-2xl text-gray-600'>아파트값 예측 AI 모델 제작 </span>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='text-xl text-black px-3 '>
            <Link to='/Home'>Home</Link>
          </div>
          <div className='text-xl px-3'>
            <Link to='/About'>About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
