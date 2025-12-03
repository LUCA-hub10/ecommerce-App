import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const LatestCollection = () => {

  const { products } = useContext(ShopContext);

  return (
    <div className='my-10'>
      <div className='flex items-center py-8 text-3xl'>
        <Title text1={'Latest'} text2={'Collection'} />
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LatestCollection;
