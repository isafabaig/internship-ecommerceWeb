'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const categories = [
  {
    title: 'Home and outdoor',
    image: '/image/HomeOutdoor.png',
    button: 'Source now',
    products: [
      { name: 'Soft chairs', price: 'From USD 19', image: '/image/sofa-1.jpg' },
      { name: 'Sofa & chair', price: 'From USD 19', image: '/image/6.jpg' },
      { name: 'Kitchen dishes', price: 'From USD 19', image: '/image/5.jpg' },
      { name: 'Smart watches', price: 'From USD 19', image: '/image/3.jpg' },
      { name: 'Kitchen mixer', price: 'From USD 100', image: '/image/9.jpg' },
      { name: 'Blenders', price: 'From USD 39', image: '/image/8.jpg' },
      { name: 'Home appliance', price: 'From USD 19', image: '/image/7.jpg' },
      { name: 'Coffee maker', price: 'From USD 19', image: '/image/4.jpg' },
    ],
  },
  {
    title: 'Consumer electronics and gadgets',
    image: '/image/image98.png',
    button: 'Source now',
    products: [
      { name: 'Smart watches', price: 'From USD 19', image: '/image/smart watch.jpg' },
      { name: 'Cameras', price: 'From USD 89', image: '/image/pro camera.jpg' },
      { name: 'Headphones', price: 'From USD 10', image: '/image/white headphones.jpg' },
      { name: 'Smart watches', price: 'From USD 90', image: '/image/image 85.png' },
      { name: 'Gaming set', price: 'From USD 35', image: '/image/headphones.jpg' },
      { name: 'Laptops & PC', price: 'From USD 340', image: '/image/laptops.jpg' },
      { name: 'Smartphones', price: 'From USD 200', image: '/image/ipad.jpg' },
      { name: 'Electric kettle', price: 'From USD 240', image: '/image/mobile-2.jpg' },
    ],
  },
];
export default function Categories() {
  return (
    <div className='grid gap-6 px-4 py-6' data-aos="fade-up">
      {categories.map((category, index) => (
        <div key={index} className='bg-white flex gap-6 shadow'>
          {/* Left Side */}
          <div className='w-1/4 relative flex items-center justify-center'>
            <Image
              src={category.image}
              alt={category.title}
              width={250}
              height={180}
              className='object-cover h-full w-full'
            />
            <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white p-4'>
              <h2 className='text-lg font-semibold text-center'>{category.title}</h2>
              <Button className='mt-2 w-fit bg-white text-black hover:bg-black hover:text-white hover:cursor-pointer'>{category.button}</Button>
            </div>
          </div>

          {/* Right Side - Product Grid*/}
          <div className='w-3/4 grid grid-cols-4 border-l border-gray-300'>
            {category.products.map((product, idx) => (
              <div
                key={idx}
                className='p-4 flex flex-col items-center border-gray-300 border-b border-r last:border-r-0 last:border-b-0'>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={90}
                  height={90}
                  className='object-contain'
                />
                <p className='mt-2 text-sm font-semibold'>{product.name}</p>
                <p className='text-xs text-gray-500'>{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}