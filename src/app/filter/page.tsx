"use client";

import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaChevronDown } from "react-icons/fa";
import Newsletter from "../components/newsletter";
import { useState } from "react";

const categories = ["Mobile Accessory", "Electronics", "Smartphones", "Modern Tech"];
const brands = ["Samsung", "Apple", "Huawei", "Poco", "Lenovo"];
const features = ["Metallic", "Plastic Cover", "8GB RAM", "Super Power", "Large Memory"];
const products = [
  { id: 1, image: "/image/mobile-2.jpg", name: "GoPro HERO6 - Black", price: 999.50, rating: 4.5 },
  { id: 2, image: "/image/image 22.png", name: "Sony Alpha DSLR", price: 899.99, rating: 4.2 },
  { id: 3, image: "/image/mobile-1.jpg", name: "Samsung Galaxy S23", price: 759.99, rating: 4.0 },
  { id: 4, image: "/image/ipad.jpg", name: "Apple iPad Pro", price: 1200.00, rating: 4.8 },
  { id: 5, image: "/image/pro camera.jpg", name: "Nikon D750 Camera", price: 2200.00, rating: 4.9 },
  { id: 6, image: "/image/image 22.png", name: "Dell XPS 15 Laptop", price: 199.99, rating: 4.3 },
  { id: 7, image: "/image/laptops.jpg", name: "MacBook Air M2", price: 399.99, rating: 4.6 },
  { id: 8, image: "/image/smart watch.jpg", name: "Apple Watch Ultra", price: 699.50, rating: 4.4 },
  { id: 9, image: "/image/mobile-2.jpg", name: "Google Pixel 7", price: 799.99, rating: 4.7 },
];

export default function Filter() {
  const [priceRange, setPriceRange] = useState(2000);
  const [showPrice, setShowPrice] = useState(false);
  const [showCondition, setShowCondition] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [showManufacturer, setShowManufacturer] = useState(false);

  const filteredProducts = products.filter(product => product.price <= priceRange);

  return (
    <main>
      <div className="flex flex-col lg:flex-row gap-4 p-4" data-aos="fade-up">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-lg">
          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg">Category</h3>
            <ul className="space-y-1 mt-2">
              {categories.map((cat, index) => (
                <li key={index} className="text-sm text-gray-600 cursor-pointer hover:underline">
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Brands</h3>
            <ul className="space-y-1 mt-2">
              {brands.map((brand, index) => (
                <li key={index} className="text-sm text-gray-600 cursor-pointer hover:underline">
                  {brand}
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Features</h3>
            <ul className="space-y-1 mt-2">
              {features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-600 cursor-pointer hover:underline">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div className="mt-4 cursor-pointer" onClick={() => setShowPrice(!showPrice)}>
            <h3 className="font-semibold text-lg flex justify-between items-center">
              Price Range 
              <FaChevronDown className={`text-gray-500 transition-transform ${showPrice ? "rotate-180" : ""}`} />
            </h3>
            {showPrice && (
              <div className="mt-2">
                <input 
                  type="range" 
                  min="0" 
                  max="2500" 
                  value={priceRange} 
                  onChange={(e) => setPriceRange(Number(e.target.value))} 
                  className="w-full"
                />
                <p className="text-sm mt-1">Up to: ${priceRange}</p>
              </div>
            )}
          </div>

          {/* Condition */}
          <div className="mt-4 cursor-pointer" onClick={() => setShowCondition(!showCondition)}>
            <h3 className="font-semibold text-lg flex justify-between items-center">
              Condition 
              <FaChevronDown className={`text-gray-500 transition-transform ${showCondition ? "rotate-180" : ""}`} />
            </h3>
            {showCondition && <p className="text-sm text-gray-600 mt-2">New, Used, Refurbished</p>}
          </div>

          {/* Ratings */}
          <div className="mt-4 cursor-pointer" onClick={() => setShowRating(!showRating)}>
            <h3 className="font-semibold text-lg flex justify-between items-center">
              Ratings 
              <FaChevronDown className={`text-gray-500 transition-transform ${showRating ? "rotate-180" : ""}`} />
            </h3>
            {showRating && <p className="text-sm text-gray-600 mt-2">1⭐ - 5⭐</p>}
          </div>
        </div>

        {/* Right Side - Product Cards */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-transform transform hover:scale-105">
              <div className="w-full h-48 flex items-center justify-center">
                <Image src={product.image} alt={product.name} width={150} height={150} className="object-contain rounded" />
              </div>
              <h3 className="font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-700 text-sm">${product.price.toFixed(2)}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-yellow-500 font-semibold">{product.rating} ⭐</p>
                <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
              </div>
              <Link href={`/smartphone`}>
                <button className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Newsletter />
    </main>
  );
}