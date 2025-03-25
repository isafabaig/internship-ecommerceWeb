'use client'

import Image from 'next/image';
import { AiOutlineCheck } from 'react-icons/ai';
import RelatedProducts from './relatedproducts';


const SmartphoneDetails = () => {
  const tabs = ['Description', 'Reviews', 'Shipping', 'About seller'];

  const products = [
    { img: '/image/ipad.jpg', title: 'Apple iPad - Latest Generation', price: '$7.00 - $99.50' },
    { img: '/image/headphones.jpg', title: 'Wireless Noise-Canceling Headphones', price: '$7.00 - $99.50' },
    { img: '/image/smart watch.jpg', title: 'Apple Watch Series 7 - Space Gray', price: '$7.00 - $99.50' },
    { img: '/image/6.jpg', title: 'Basketball Crew Socks Long Stuff', price: '$7.00 - $99.50' },
  ];

  return (
    <main>
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-12 gap-x-8 shadow-md mt-8 rounded-sm" data-aos="fade-up">
      {/* Main Section*/}
      <div className="col-span-9">
        {/* Tabs */}
        <div className="flex border-b  text-gray-600">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium hover:text-blue-600 cursor-pointer'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-4 text-gray-700 text-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mt-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Product Details Table */}
        <div className="mt-6">
          <table className="w-full border text-sm">
            <tbody>
              {[['Model', '#8786867'], ['Style', 'Classic Style'], ['Certificate', 'ISO-898921212'], ['Size', '34mm x 450mm x 19mm'], ['Memory', '36GB RAM']].map(([key, value]) => (
                <tr key={key} className="border-b">
                  <td className="px-4 py-2 font-medium bg-gray-100 w-1/3">{key}</td>
                  <td className="px-4 py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Feature List */}
        <div className="mt-6">
          <ul className="space-y-2 text-sm">
            {['Some great feature name here', 'Lorem ipsum dolor sit amet, consectetur', 'Duis aute irure dolor in reprehenderit', 'Some great feature name here'].map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <AiOutlineCheck className="text-green-600" /> {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Panel (Wider & Properly Spaced) */}
      <div className="col-span-3 bg-gray-50 p-4 shadow-md">
        <h3 className="font-semibold text-gray-700 mb-3">You may like</h3>
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={index} className="flex items-center gap-3 hover:cursor-pointer">
              <Image src={product.img} alt={product.title} width={60} height={60} className="rounded-md" />
              <div>
                <p className="text-sm font-medium text-gray-700">{product.title}</p>
                <p className="text-xs text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <RelatedProducts/>
    </main>
  );
};

export default SmartphoneDetails;
