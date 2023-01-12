import React from 'react';

const SingleProduct = ({ products }) => {
  console.log(products);
  const { product_name, product_photo, product_mesurement, product_price, product_ratings } = products;
  return (
    <div>
      <div>
        <img src={product_photo} alt="" />
      </div>
      <div>
        <span className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffd000" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffd000" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        <p className=''>{product_ratings}</p>
        </span>
        <p>{product_name}</p>
        <p>± {product_mesurement}</p>
        <p>৳ {product_price}</p>
      </div>
    </div>
  );
};

export default SingleProduct;