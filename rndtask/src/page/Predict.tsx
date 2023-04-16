import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { seoul, gyungi } from '../data/data.js';

import banner from '../img/banner2-resize.jpg';

type InputType = {
  x1: string;
  x2: string;
  x3: string;
  x4: string;
  x5: string;
  x6: string;
};

function Predict() {
  const [input, setInput] = useState<InputType>({ x1: '', x2: '', x3: '', x4: '', x5: '0', x6: '' });
  const [output, setOutput] = useState<string>('0');
  const [isSeoul, setSeoul] = useState(true);

  const flexDiv = 'flex justify-end items-center w-[300px] py-3';
  const labelStyle = 'text-base pr-4';
  const inputStyle = 'border-b w-24 mr-2 focus:outline-none';

  const handleInput = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (input.x1 === '' || input.x2 === '' || input.x3 === '' || input.x4 === '' || input.x5 === '' || input.x6 === '') {
      window.alert('값을 입력하지 않은 곳이 있습니다.');
    } else {
      await axios.post('http://localhost:8000/predict', input).then((res) => {
        if (res.data.y >= 10000) {
          let hmillion = Math.floor(parseInt(res.data.y) / 10000);
          let tmillion = parseInt(res.data.y) % 10000;
          setOutput(`${hmillion.toString()}억 ${tmillion.toString()}만원`);
        } else {
          setOutput(`${parseInt(res.data.y).toString()}만원`);
        }
      });
    }
  };

  const optionHandler = (e: any) => {
    setInput({
      ...input,
      x6: e.target?.value,
    });
  };

  const regionHandler = (e: any) => {
    const value = e.target.value;
    setSeoul(value === '0');
  };

  return (
    <>
      <div>
        <img
          src={banner}
          alt='https://www.pngwing.com/en/free-png-btkzq/download?width=2000'
          onClick={() => {
            console.log(input);
          }}
        />
      </div>
      <form onSubmit={handleSubmit} autoComplete='off' className='w-full h-full'>
        <div className='flex justify-center items-center'>
          <div className='basis-3/5'>
            <div className='flex justify-center items-center'>
              <div className={flexDiv}>
                <span className={labelStyle}>지역:</span>
                <select id='countries' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 mr-2' onChange={regionHandler} value={isSeoul ? '0' : '1'}>
                  <option value='0'>서울</option>
                  <option value='1'>경기</option>
                </select>
              </div>
              <div className={flexDiv}>
                <span className={labelStyle}>세부지역: </span>
                {isSeoul ? (
                  <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 mr-2' onChange={optionHandler} defaultValue='42'>
                    <option>지역선택</option>
                    {seoul.map((e) => (
                      <option key={e.number} value={e.number}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 mr-2' onChange={optionHandler} defaultValue='1'>
                    <option>지역선택</option>
                    {gyungi.map((e) => (
                      <option key={e.number} value={e.number}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <div className={flexDiv}>
                <span className={labelStyle}>전용면적(㎡): </span>
                <input className={inputStyle} name='x1' value={input.x1} onChange={handleInput} />
              </div>
              <div className={flexDiv}>
                <span className={labelStyle}>계약년월(YYYYMM): </span>
                <input className={inputStyle} name='x2' value={input.x2} onChange={handleInput} />
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <div className={flexDiv}>
                <span className={labelStyle}>층수: </span>
                <input className={inputStyle} name='x3' value={input.x3} onChange={handleInput} />
              </div>
              <div className={flexDiv}>
                <span className={labelStyle}>건축년도: </span>
                <input className={inputStyle} name='x4' value={input.x4} onChange={handleInput} />
              </div>
            </div>
          </div>
          <div className='flex justify-center basis-2/5'>
            <button type='submit' className='w-44 px-1 py-3 bg-[#68B0BF] rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform text-lg'>
              가격 예측하기!
            </button>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center w-full h-24 text-2xl'>예측 가격: {output}입니다.</div>
        </div>
      </form>
    </>
  );
}

export default Predict;
