'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Link from 'next/link';
import Newsletter from '../components/newsletter';

export default function Productlisting() {
  const [wishlist, setWishlist] = useState<number[]>([]); // Track wishlist items

  const toggleWishlist = (index: number) => {
    setWishlist((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  const filterOptions = {
    Category: ['Mobile accessory', 'Electronics', 'Smartphones'],
    Brands: ['Samsung', 'Apple', 'Huawei'],
    Features: ['Metallic', 'Plastic cover', 'Super power', 'Large Memory'],
    Condition: ['Any', 'Refurbished', 'Brand New', 'Used Items'],
    Ratings: ['⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐', '⭐⭐'],
  };

  const products = [
    { image: '/image/mobile-2.jpg', title: 'Smartphone X', description: 'Powerful performance with sleek design.', price: '$799', rating: 4.5 },
    { image: '/image/mobile-1.jpg', title: 'Galaxy Ultra', description: 'Experience next-gen technology.', price: '$999', rating: 4.8 },
    { image: '/image/ipad.jpg', title: 'iPad Pro', description: 'Creative tool with advanced display.', price: '$1099', rating: 4.7 },
    { image: '/image/laptops.jpg', title: 'Gaming Laptop', description: 'Ultimate gaming and performance.', price: '$1499', rating: 4.6 },
    { image: '/image/smart watch.jpg', title: 'Smart Watch', description: 'Track fitness and stay connected.', price: '$199', rating: 4.3 },
    { image: '/image/white headphones.jpg', title: 'Wireless Headphones', description: 'Superior sound quality.', price: '$299', rating: 4.4 },
  ];

  return (
    <main>

    <div className="flex flex-col md:flex-row p-4" data-aos="fade-up">
      {/* Sidebar Filter (Left Side) */}
      <div className="md:w-1/4 w-full md:block">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          {Object.entries(filterOptions).map(([title, options], index) => (
            <div key={title} className="mb-4">
              <h2 className="font-semibold text-lg mb-2">{title}</h2>
              <div className="flex flex-col gap-1">
                {title === 'Category' ? (
                  options.map((option, idx) => (
                    <span key={idx} className="text-gray-700 cursor-pointer">{option}</span>
                  ))
                ) : (
                  options.map((option, idx) => (
                    <label key={idx} className="flex items-center gap-2 text-gray-700 cursor-pointer">
                      <input type="radio" name={title} value={option} className="cursor-pointer" />
                      {option}
                    </label>
                  ))
                )}
                {index < 3 && <button className="text-blue-500 hover:cursor-pointer">See all</button>}
              </div>
            </div>
          ))}

          <h2 className="font-semibold text-lg mb-2">Price Range</h2>
          <input type="range" min="0" max="2000" className="w-full" />
          <div className="flex gap-2 mt-2">
            <input type="number" placeholder="Min" className="w-1/2 p-2 border rounded" />
            <input type="number" placeholder="Max" className="w-1/2 p-2 border rounded" />
          </div>
          <button className="bg-blue-500 text-white p-2 rounded mt-2 w-full">Apply</button>
        </div>
      </div>

      {/* Product List - Right Side*/}
      <div className="md:w-3/4 w-full px-4">
        <div className="flex flex-col gap-4">
          {products.map((product, index) => (
            <div key={index} className="relative flex items-center border p-4 rounded-lg shadow-md">
              {/* Wishlist Heart */}
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => toggleWishlist(index)}
              >
                {wishlist.includes(index) ? (
                  <AiFillHeart className="text-red-500 text-2xl" />
                ) : (
                  <AiOutlineHeart className="text-gray-400 text-2xl" />
                )}
              </div>

              {/* Product Image */}
              <Image src={product.image} alt={product.title} width={128} height={128} className="object-cover mr-4" />

              {/* Product Details */}
              <div>
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="font-bold text-lg">{product.price}</p>
                <p className="text-yellow-500">⭐ {product.rating} / 5</p>
                <Link href={'/filter'}><button className="bg-blue-500 text-white p-2 rounded mt-2 hover:cursor-pointer">View Details</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Newsletter/>
    </main>

  );
}