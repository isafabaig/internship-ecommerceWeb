import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="bg-gray-100 py-10 px-4" data-aos="fade-up">
      <div className="max-w-2xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-lg font-semibold text-gray-900">Subscribe on our newsletter</h2>
        <p className="text-gray-600 text-sm mt-2">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>

        {/* Subscription Form */}
        <div className="mt-4 flex justify-center">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;