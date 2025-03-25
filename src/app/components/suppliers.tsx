import Newsletter from "./newsletter";

const suppliers = [
    { country: "Arabic Emirates", url: "shopname.ae", flag: "/image/dubai.png" },
    { country: "Australia", url: "shopname.ae", flag: "/image/australia.png" },
    { country: "United States", url: "shopname.ae", flag: "/image/usa.png" },
    { country: "Russia", url: "shopname.ru", flag: "/image/russia.png" },
    { country: "Italy", url: "shopname.it", flag: "/image/itlay.png" },
    { country: "Denmark", url: "denmark.com.dk", flag: "/image/scotland.png" },
    { country: "France", url: "shopname.com.fr", flag: "/image/france.png" },
    { country: "Arabic Emirates", url: "shopname.ru", flag: "/image/dubai.png" },
    { country: "China", url: "shopname.ae", flag: "/image/china.png" },
    { country: "Great Britain", url: "shopname.co.uk", flag: "/image/england.png" },
  ];
  
  const Suppliers = () => {
    return (
      <main>
      <div className="p-6" data-aos="fade-up">
        <h2 className="text-lg font-semibold mb-4">Suppliers by region</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {suppliers.map((supplier, index) => (
            <div key={index} className="flex items-center space-x-3">
              <img src={supplier.flag} alt={supplier.country} className="w-6 h-4" />
              <div>
                <p className="text-sm font-medium">{supplier.country}</p>
                <p className="text-xs text-gray-500">{supplier.url}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Newsletter/>
      </main>
    );
  };
  
  export default Suppliers;