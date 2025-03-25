import { FaSearch, FaBoxOpen, FaShippingFast, FaShieldAlt } from "react-icons/fa";
import Image from "next/image";

const Extraservices = () => {
  const services = [
    {
      image: "/image/BG.png",
      title: "Source from Industry Hubs",
      icon: <FaSearch />,
    },
    {
      image: "/image/image 104.png",
      title: "Customize Your Products",
      icon: <FaBoxOpen />,
    },
    {
      image: "/image/image 106.png",
      title: "Fast, reliable shipping by ocean or air",
      icon: <FaShippingFast />,
    },
    {
      image: "/image/image 107.png",
      title: "Product monitoring and inspection",
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <div className="p-6" data-aos="fade-up">
      <h2 className="text-lg font-semibold mb-4">Our Extra Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
          >
            {/* Image Section */}
            <div className="relative w-full h-32">
              <Image 
                src={service.image} 
                alt={service.title} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-t-lg"
                priority
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            
            {/* Icon Section */}
            <div className="absolute bottom-16 right-4 bg-blue-100 p-3 rounded-full text-blue-600 text-lg shadow-md">
              {service.icon}
            </div>

            {/* Title Section */}
            <div className="p-4 mt-4">
              <h3 className="text-sm font-medium leading-5 min-h-[40px]">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extraservices;