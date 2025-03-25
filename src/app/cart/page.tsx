"use client";

import { useState } from "react";
import Image from "next/image"; 
import SavedItems from "../components/saveditems";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      img: "/image/ipad.jpg",
      title: "Smartphone with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: 78.99,
      qty: 9,
    },
    {
      img: "/image/mobile-1.jpg",
      title: "Smartphone with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Best factory LLC",
      price: 39.0,
      qty: 3,
    },
    {
      img: "/image/mobile-2.jpg",
      title: "Smartphone with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: 170.5,
      qty: 1,
    },
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = 60;
  const tax = 14;
  const total = subtotal - discount + tax;

  return (
    <main>
      <div className="flex gap-6 p-6">
        {/* Left Section - Cart Items */}
        <div className="w-2/3 border border-gray-300 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">My cart ({cartItems.length})</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4 border-b py-4">
              <Image 
                src={item.img} 
                alt={item.title} 
                width={80} 
                height={80} 
                className="rounded-lg object-cover"
                priority 
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  Size: {item.size}, Color: {item.color}, Material: {item.material}
                </p>
                <p className="text-sm text-gray-600">Seller: {item.seller}</p>
                <div className="mt-2 flex gap-2">
                  <button className="px-4 py-1 text-sm border border-red-500 text-red-500 rounded hover:cursor-pointer hover:bg-red-400 hover:text-white">
                    Remove
                  </button>
                  <button className="px-4 py-1 text-sm border border-gray-500 text-gray-500 rounded hover:cursor-pointer hover:text-blue-500">
                    Save for later
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">${item.price.toFixed(2)}</p>
                <p className="text-sm">Qty: {item.qty}</p>
              </div>
            </div>
          ))}
          <button 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:cursor-pointer hover:bg-blue-500" 
            onClick={() => window.location.href = '/smartphone'}
          >
            ← Back to shop
          </button>
        </div>

        {/* Right Section - Summary */}
        <div className="w-1/3 border border-gray-300 rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-md font-semibold">Have a coupon?</h3>
            <div className="flex mt-2">
              <input type="text" placeholder="Add coupon" className="border p-2 w-full rounded-l" />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:cursor-pointer hover:bg-blue-700">
                Apply
              </button>
            </div>
          </div>
          <div className="border-t pt-4">
            <p className="flex justify-between text-gray-700">
              <span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-red-500">
              <span>Discount:</span> <span>- ${discount.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-green-500">
              <span>Tax:</span> <span>+ ${tax.toFixed(2)}</span>
            </p>
            <p className="flex justify-between font-bold text-lg mt-2">
              <span>Total:</span> <span>${total.toFixed(2)}</span>
            </p>
            <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg text-lg hover:cursor-pointer">
              Checkout
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <Image 
              src="/image/payment-all.png" 
              alt="Payment Methods" 
              width={320} 
              height={80} 
              className="hover:cursor-pointer"
              priority 
            />
          </div>
        </div>
      </div>
      <SavedItems/>
    </main>
  );
};

export default CartPage;