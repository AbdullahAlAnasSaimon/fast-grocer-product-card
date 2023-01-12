import React from 'react';

const HomePageProducts = () => {
  return (
    <div>
      <h2 className='text-3xl text-center font-bold'>Featured Products</h2>
      <div className='border-b-[1px] border-gray-200'>
        <ul className='w-5/12 mx-auto flex justify-between h-40px'>
          <li className='inline-block'><button className='border-b-2 border-transparent font-bold text-gray-500 hover:text-[#8ba73b] hover:border-b-2 hover:border-[#8ba73b] -mb-[1px] py-3 duration-300'>Vegetables</button></li>
          <li className='inline-block'><button className='border-b-2 border-transparent font-bold text-gray-500 hover:text-[#8ba73b] hover:border-b-2 hover:border-[#8ba73b] -mb-[1px] py-3 duration-300'>Fruits</button></li>
          <li className='inline-block'><button className='border-b-2 border-transparent font-bold text-gray-500 hover:text-[#8ba73b] hover:border-b-2 hover:border-[#8ba73b] -mb-[1px] py-3 duration-300'>Cookings</button></li>
          <li className='inline-block'><button className='border-b-2 border-transparent font-bold text-gray-500 hover:text-[#8ba73b] hover:border-b-2 hover:border-[#8ba73b] -mb-[1px] py-3 duration-300'>Meat and Fish</button></li>
          <li className='inline-block'><button className='border-b-2 border-transparent font-bold text-gray-500 hover:text-[#8ba73b] hover:border-b-2 hover:border-[#8ba73b] -mb-[1px] py-3 duration-300'>Baby Care</button></li>
        </ul>
      </div>
    </div>
  );
};

export default HomePageProducts;