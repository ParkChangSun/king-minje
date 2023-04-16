import React from 'react';

interface Props {
  studentnumber: string;
  major: string;
  name: string;
  objectives: string;
}

const Nameblock = ({ studentnumber, major, name, objectives }: Props) => {
  return (
    <div className='flex justify-start items-center'>
      <span className='py-0.5 text-md text-gray-600'>
        {studentnumber} {major} {name} - {objectives}
      </span>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='bg-[#68B0BF] w-full p-4 '>
      <ul>
        <li>
          <Nameblock studentnumber={'2018044666'} major={'컴퓨터학부'} name={'박창선'} objectives={'fast api server'} />
          <Nameblock studentnumber={'2018044220'} major='컴퓨터학부' name={'강민제'} objectives={'AI'} />
          <Nameblock studentnumber={'2018044593'} major={'컴퓨터학부'} name={'박연희'} objectives={'front-end'} />
        </li>
        <li></li>
        <li></li>
      </ul>
    </footer>
  );
};

export default Footer;

//2018044666 컴퓨터학부 박창선 changsun19991212@gmail.com
//2018044220 컴퓨터학부 강민제 kang99086@naver.com
//2018044593 컴퓨터학부 박연희 dusgml4608@hanyang.ac.kr
