import { FaShieldAlt, FaHeadset, FaTruck, FaShoppingCart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SavedItems = () => {
  const products = [
    {
      id: 1,
      image: "/image/coat.jpg",
      price: "$99.50",
      name: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      id: 2,
      image: "/image/ipad.jpg",
      price: "$99.50",
      name: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      id: 3,
      image: "/image/pro camera.jpg",
      price: "$99.50",
      name: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      id: 4,
      image: "/image/sofa-1.jpg",
      price: "$99.50",
      name: "GoPro HERO6 4K Action Camera - Black",
    },
  ];

  return (
    <div data-aos="fade-up">
      <div className="flex justify-between text-gray-700 text-sm mb-4 p-6 bg-gray-50">
        <div className="flex items-center space-x-2">
        <FaShieldAlt size={20} />
          <div>
            <p className="font-semibold">Secure payment</p>
            <p className="text-xs">Have you ever finally just</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
        <FaHeadset size={20} />
          <div>
            <p className="font-semibold">Customer support</p>
            <p className="text-xs">Have you ever finally just</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
        <FaTruck size={20} />
          <div>
            <p className="font-semibold">Free delivery</p>
            <p className="text-xs">Have you ever finally just</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Saved for later</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-md shadow-md text-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={150}
              className="mx-auto"
            />
            <p className="font-semibold mt-2">{product.price}</p>
            <p className="text-sm text-gray-600">{product.name}</p>
            <Button variant="outline" className="mt-2 flex mx-auto items-center hover:cursor-pointer">
            <FaShoppingCart size={16} className="mr-2" /> Move to cart
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-blue-600 text-white p-4 rounded-md flex justify-between items-center">
        <p>Super discount on more than 100 USD</p>
        <Button className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer">Shop now</Button>
      </div>
      </div>

    </div>
  );
};

export default SavedItems;
