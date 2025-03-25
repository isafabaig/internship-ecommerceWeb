'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

const deals = [
  { name: "Smart watches", img: "/image/smart watch.jpg", discount: "-25%" },
  { name: "Laptops", img: "/image/laptops.jpg", discount: "-15%" },
  { name: "GoPro cameras", img: "/image/pro camera.jpg", discount: "-40%" },
  { name: "Headphones", img: "/image/headphones.jpg", discount: "-25%" },
  { name: "Canon cameras", img: "/image/mobile-1.jpg", discount: "-25%" },
];

export default function Deals() {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4);
    targetDate.setHours(0, 0, 0, 0);
    
    const difference = targetDate.getTime() - new Date().getTime();
    
    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-10 flex items-center gap-6" data-aos="fade-up">
      {/* Headings & Timer */}
      <div className="w-1/4">
        <h2 className="text-xl font-bold">🔥 Deals and Offers</h2>
        <p className="text-gray-600 text-sm">Hygiene Equipment</p>
        <div className="flex gap-2 text-xs bg-gray-200 px-2 py-1 rounded-md font-semibold mt-2">
          <span>{timeLeft.days} Days</span> :
          <span>{timeLeft.hours} Hr</span> :
          <span>{timeLeft.minutes} Min</span> :
          <span>{timeLeft.seconds} Sec</span>
        </div>
      </div>

      {/* Deals List */}
      <div className="flex gap-4 overflow-x-auto p-2 w-3/4">
        {deals.map((deal, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center min-w-[150px] border">
            <Image src={deal.img} alt={deal.name} width={80} height={80} className="mx-auto" />
            <p className="text-sm mt-2">{deal.name}</p>
            <span className="text-red-500 font-bold bg-red-100 px-2 py-1 rounded-md">{deal.discount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}