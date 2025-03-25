'use client'
import Image from 'next/image';

const RelatedProducts = () => {
  const products = [
    { img: '/image/file.jpg', title: 'Xiaomi Redmi 8 Original', price: '$32.00~$40.00' },
    { img: '/image/smart watch.jpg', title: 'Xiaomi Redmi 8 Original', price: '$32.00~$40.00' },
    { img: '/image/white headphones.jpg', title: 'Xiaomi Redmi 8 Original', price: '$32.00~$40.00' },
    { img: '/image/shorts.jpg', title: 'Xiaomi Redmi 8 Original', price: '$32.00~$40.00' },
    { img: '/image/image 85.png', title: 'Xiaomi Redmi 8 Original', price: '$32.00~$40.00' },
    { img: '/image/7.jpg', title: 'Xiaomi Redmi 8 Original', price: '$32.00~$40.00' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 mt-8" data-aos="fade-up">
      {/* Related Products */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Related products</h2>

      <div className="grid grid-cols-6 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md text-center shadow-sm hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105">
            {/* Product Image */}
            <Image
              src={product.img}
              alt={product.title}
              width={150}
              height={150}
              className="mx-auto rounded-md"
            />

            {/* Product Title */}
            <p className="text-sm text-gray-700 mt-2">{product.title}</p>

            {/* Price */}
            <p className="text-sm text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Super Discount Section */}
      <div className="mt-8 bg-blue-600 text-white p-6 rounded-md flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Super discount on more than 100 USD</h3>
          <p className="text-sm opacity-80">Have you ever finally just write dummy info</p>
        </div>

        <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-medium hover:cursor-pointer hover:bg-orange-400">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default RelatedProducts;
