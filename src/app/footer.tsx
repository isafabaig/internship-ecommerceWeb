import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Newsletter from "./components/newsLetter/page";

const Footer = () => {
  return (
    <main>
      <Newsletter />
      <footer className=" py-10 px-4 md:px-16 border-t">
        <div className="max-w-6xl mx-auto">
          {/* Grid Layout with One Row for Headings */}
          <div className="grid grid-cols-6 gap-6">
            {/* Brand Section */}
            <div className="bg-white">
              <div className="flex items-center space-x-2">
                <Image src="/image/logo-symbol.png" alt="Brand Logo" width={30} height={30} />
                <h2 className="text-lg font-bold text-blue-600">Brand</h2>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Best information about the company goes here but now lorem ipsum is
              </p>
              {/* Social Icons */}
              <div className="flex space-x-3 mt-4">
                <a href="https://web.facebook.com/profile.php?id=100090256202861" target="_blank" className="text-gray-500 hover:text-blue-500">
                  <Facebook size={20} />
                </a>
                <a href="https://x.com/?lang=en" target="_blank" className="text-gray-500 hover:text-blue-500">
                  <Twitter size={20} />
                </a>
                <a href="https://www.linkedin.com/in/safa-aamir-823b582b1/" target="_blank" className="text-gray-500 hover:text-blue-500">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" className="text-gray-500 hover:text-blue-500">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Links Section */}
            {[
              { title: "About", links: ["About Us", "Find store", "Categories", "Blogs"] },
              { title: "Partnership", links: ["About Us", "Find store", "Categories", "Blogs"] },
              { title: "Information", links: ["Help Center", "Money Refund", "Shipping", "Contact Us"] },
              { title: "For Users", links: ["Login", "Register", "Settings", "My Orders"] },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold text-gray-800">{section.title}</h3>
                <ul className="text-gray-600 text-sm mt-2 space-y-2">
                  {section.links.map((link, idx) => (
                    <li
                      key={idx}
                      className="hover:text-blue-500 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-sm font-semibold text-gray-800">Get App</h3>
              <div className="mt-2 space-y-2">
                <Image src="/image/market-button-apple.png" alt="App Store" width={120} height={40} />
                <Image src="/image/market-button-playstore.png" alt="Google Play" width={120} height={40} />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-gray-100 flex flex-col md:flex-row justify-between items-center mt-5 text-gray-600 text-sm p-10 h-20">
            <p>© 2025 Ecommerce.</p>
            <p className="flex items-center">Made by Safa Aamir 👩‍💻</p>
            <div className="flex items-center">
              <span className="mr-2">🌎</span>
              <select className="bg-transparent border-none focus:outline-none">
                <option>English</option>
                <option>Urdu</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </main>

  );
};

export default Footer;