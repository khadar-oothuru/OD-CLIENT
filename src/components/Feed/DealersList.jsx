import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const dealers = [
  {
    id: 1,
    name: "Sunny Dairy Supplies",
    phone: "+1 (555) 123-4567",
    address: "123 Dairy Lane, Farmville, CA",
    website:
      "https://images-platform.99static.com/SClPwlOFZar557w0LSepf01MrbI=/500x500/top/smart/99designs-contests-attachments/41/41345/attachment_41345533",
    delivery: "Fast delivery within 2-3 business days",
    logo: "https://images-platform.99static.com/SClPwlOFZar557w0LSepf01MrbI=/500x500/top/smart/99designs-contests-attachments/41/41345/attachment_41345533",
  },
  {
    id: 2,
    name: "Green Pastures Feed Co.",
    phone: "+1 (555) 234-5678",
    address: "456 Feed Street, Grassville, TX",
    website:
      "https://images-platform.99static.com/SClPwlOFZar557w0LSepf01MrbI=/500x500/top/smart/99designs-contests-attachments/41/41345/attachment_41345533",

    delivery: "Next-day delivery available",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLvP8XmLMEcTMlMQFffUVloDuVfvbZG2CcRI4yC5poXjpwbWOBQjB9Idzgg&s",
  },
  {
    id: 3,
    name: "Harvest Nutrition",
    phone: "+1 (555) 345-6789",
    address: "789 Harvest Road, Crop City, FL",
    website:
      "https://images-platform.99static.com/SClPwlOFZar557w0LSepf01MrbI=/500x500/top/smart/99designs-contests-attachments/41/41345/attachment_41345533",

    delivery: "Standard delivery within 5-7 business days",
    logo: "https://images-workbench.99static.com/Hdn1Cng0mRCfJ1bStIci4Edwr5A=/99designs-contests-attachments/144/144178/attachment_144178775",
  },
];

const DealerList = () => {
  return (
    <section className="py-8 px-4 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Trusted Dealers
        </h2>
        <div className="flex flex-col space-y-6">
          {dealers.map((dealer) => (
            <div
              key={dealer.id}
              className="bg-white shadow-md rounded-lg p-4 flex items-start justify-between gap-4 border border-gray-300"
            >
              <div className="flex items-start gap-4">
                <img
                  src={dealer.logo}
                  alt={`${dealer.name} logo`}
                  className="w-24 h-24 object-cover rounded-md border border-gray-200"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {dealer.name}
                  </h3>
                  <p className="text-gray-700 mt-1 flex items-center gap-2">
                    <FaPhoneAlt className="text-green-600" /> {dealer.phone}
                  </p>
                  <p className="text-gray-700 mt-1 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-green-600" />{" "}
                    {dealer.address}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between ml-4">
                <p className="text-gray-700 mb-4">
                  <strong>Delivery:</strong> {dealer.delivery}
                </p>
                <a
                  href={dealer.website}
                  className="bg-black text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 font-medium hover:bg-[#00d684] transition-colors duration-150"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="text-xl" />
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealerList;
