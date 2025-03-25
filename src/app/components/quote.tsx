import { IoIosArrowDown } from "react-icons/io";

export default function Quote() {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/image/image 102.png')" }} data-aos="fade-up">
      {/* Blue Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-80"></div>


      {/* Content Container */}
      <div className="relative w-4/5 flex justify-between items-center text-white">
        {/* Left Side - Heading & Text */}
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold">An easy way to send <br /> requests to all suppliers</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Right Side - Inquiry Form */}
        <div className="min-w-1/3 bg-white shadow-lg rounded-lg p-5 text-black">
          <h3 className="text-lg font-semibold mb-3">Send quote to suppliers</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="What item you need?"
              className="w-full border rounded px-3 py-2 text-sm"
            />
            <textarea
              placeholder="Type more details"
              className="w-full border rounded px-3 py-2 text-sm h-16"
            ></textarea>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Quantity"
                className="w-1/2 border rounded px-3 py-2 text-sm"
              />
              <div className="relative w-1/2">
                <select className="w-full border rounded px-3 py-2 text-sm appearance-none">
                  <option>Pcs</option>
                  <option>Kg</option>
                  <option>Liters</option>
                </select>
                <IoIosArrowDown className="absolute right-3 top-3 text-gray-500" />
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded text-sm font-medium hover:bg-blue-600">
              Send inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}