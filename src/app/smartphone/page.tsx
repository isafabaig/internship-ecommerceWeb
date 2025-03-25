'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import SmartphoneDetails from "../components/smartphonedetails";

const Smartphone = () => {
  const router = useRouter();
  const images = [
    "/image/ipad.jpg",
    "/image/mobile-2.jpg",
    "/image/mobile-1.jpg",
    "/image/mobile-2.jpg",
  ];
  const [mainImage, setMainImage] = useState(images[0]);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <main>
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-12 gap-6 shadow-md" data-aos="fade-up">
        {/* Left Section - Smartphone Images */}
        <div className="col-span-5">
          <div className="flex flex-col items-center">
            <Image src={mainImage} alt="Smartphone" width={400} height={400} />
            <div className="flex gap-2 mt-4">
              {images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className='cursor-pointer border rounded-md'
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Details & Supplier Section */}
        <div className="col-span-7 grid grid-cols-2 gap-6">
          {/* Product Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Latest Smartphone 5G</h2>
            <p className="text-red-500 text-lg font-bold">$799.00</p>
            <p><span className="font-medium">Brand:</span> TechPro</p>
            <p><span className="font-medium">Display:</span> 6.7 AMOLED, 120Hz</p>
            <p><span className="font-medium">Processor:</span> Snapdragon 8 Gen 2</p>
            <p><span className="font-medium">RAM:</span> 12GB</p>
            <p><span className="font-medium">Storage:</span> 256GB</p>
            <p><span className="font-medium">Camera:</span> 50MP + 12MP + 10MP</p>
            <p><span className="font-medium">Battery:</span> 5000mAh, Fast Charging</p>

            {/* Add to Cart Button */}
            <button
              onClick={() => router.push("/cart")}
              className="bg-green-600 text-white w-full mt-4 py-2 rounded-md hover:bg-green-700 hover:cursor-pointer"
            >
              Add to Cart
            </button>
          </div>

          {/* Supplier Details */}
          <div className="border p-4 rounded-md shadow-md">
            <h3 className="font-medium">Supplier: SmartTech LLC</h3>
            <p>📍 California, USA</p>
            <p className="text-sm text-gray-500">Verified Seller</p>
            <button className="bg-blue-600 text-white w-full mt-3 py-2 rounded-md hover:cursor-pointer">
              Send Inquiry
            </button>
            <button className="border w-full mt-2 py-2 rounded-md hover:cursor-pointer hover:text-blue-500">
              Sellers Profile
            </button>

            {/* Save for Later */}
            <div 
              className="flex justify-center mt-6 py-2 cursor-pointer"
              onClick={() => setIsSaved(!isSaved)}
            >
              {isSaved ? <AiFillHeart size={25} className="text-red-500" /> : <AiOutlineHeart size={25} className="text-blue-600" />}
              <p className={`font-semibold ml-2 ${isSaved ? "text-red-500" : "text-blue-600"}`}>
                {isSaved ? "Saved" : "Save for later"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div><SmartphoneDetails /></div>
    </main>
  );
};

export default Smartphone;