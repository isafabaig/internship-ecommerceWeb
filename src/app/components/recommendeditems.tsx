import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';

const products = [
  { name: 'T-shirts with multiple colors, for men', price: '$10.30', image: '/image/1.jpg' },
  { name: 'Jeans shorts for men blue color', price: '$10.30', image: '/image/leather.jpg' },
  { name: 'Brown winter coat medium size', price: '$12.50', image: '/image/coat.jpg' },
  { name: 'Jeans bag for travel for men', price: '$34.00', image: '/image/file.jpg' },
  { name: 'Leather wallet', price: '$99.00', image: '/image/3.jpg' },
  { name: 'Canon camera black, 100x zoom', price: '$9.99', image: '/image/shorts.jpg' },
  { name: 'Headset for gaming with mic', price: '$8.99', image: '/image/white headphones.jpg' },
  { name: 'Smartwatch silver color modern', price: '$10.30', image: '/image/bag.jpg' },
  { name: 'Blue wallet for men leather material', price: '$10.30', image: '/image/3.jpg' },
  { name: 'Jeans bag for travel for men', price: '$80.95', image: '/image/image 85.png' },
];

export default function Recommendeditems() {
  return (
    <div className="px-6 py-8" data-aos="fade-up">
      <h2 className="text-lg font-semibold mb-4">Recommended items</h2>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-md border flex flex-col items-center hover:bg-gray-100">
            <Image src={product.image} alt={product.name} width={100} height={100} className="object-contain" />
            <p className="text-sm text-center mt-2 font-semibold">{product.price}</p>
            <p className="text-xs text-gray-500 text-center">{product.name}</p>
            <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded flex items-center gap-2 hover:cursor-pointer transition-transform transform hover:scale-105">
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}