import { useState } from "react";

import { MdClose } from "react-icons/md";
import { RiFolderInfoLine } from "react-icons/ri";
import DealerList from "./DealersList";
const Feeds = () => {
  const animalFeed = [
    {
      id: 1,
      name: "Alfalfa Hay",
      description: "High-protein feed suitable for dairy cattle.",
      image: "https://eu-images.contentstack.com/v3/assets/blte5a51c2d28bbcc9c/blt8117f606858a5744/64871945cfda7d0b32aea78c/Hay_20Bale_0.jpg?width=700&auto=webp&quality=80&disable=upscale",
      nutrients: {
        protein: "16%",
        fiber: "25%",
        moisture: "12%",
        energy: "1.5 Mcal/kg",
      },
      additionalInfo:
        "Alfalfa hay is known for its high nutritional value and is an excellent source of protein for dairy cattle. It helps in increasing milk yield and improving overall health.",
    },
    {
      id: 2,
      name: "Corn Silage",
      description: "Fermented high-energy feed for ruminants.",
      image: "https://www.hubbardfeeds.com/sites/default/files/2020-09/shutterstock_385260625_1200x628.jpg",
      nutrients: {
        protein: "8%",
        fiber: "30%",
        moisture: "70%",
        energy: "0.8 Mcal/kg",
      },
      additionalInfo:
        "Corn silage is ideal for boosting energy intake, especially during the winter months. It aids in maintaining body condition and promoting better digestion.",
    },
    {
      id: 3,
      name: "Grain Mix",
      description: "Mixed grains for supplemental energy and nutrients.",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/7/RU/AX/AH/321009/multi-grain-cattle-feed-1--500x500.jpg",
      nutrients: {
        protein: "12%",
        fiber: "8%",
        moisture: "10%",
        energy: "2.0 Mcal/kg",
      },
      additionalInfo:
        "Grain mix provides a balanced blend of energy and protein. It is useful for enhancing milk production and supporting growth in young animals.",
    },
    {
      id: 4,
      name: "Soybean Meal",
      description:
        "High-protein feed made from soybeans, suitable for dairy cows.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Animal_feed_from_bush_biomass.jpg",
      nutrients: {
        protein: "48%",
        fiber: "4%",
        moisture: "10%",
        energy: "2.4 Mcal/kg",
      },
      additionalInfo:
        "Soybean meal is an excellent source of protein for dairy cows, improving milk yield and overall health. It also helps in balancing the diet with essential amino acids.",
    },
    {
      id: 5,
      name: "Wheat Bran",
      description:
        "By-product of wheat milling, provides fiber and some protein.",
      image: "https://jandsharpfeed.com/wp-content/uploads/2023/07/0b7bd644-28e7-41ee-83e2-a05dcbcf9bdc_shutterstock_225184108_jpg.jpg",
      nutrients: {
        protein: "14%",
        fiber: "15%",
        moisture: "12%",
        energy: "1.2 Mcal/kg",
      },
      additionalInfo:
        "Wheat bran is beneficial for its fiber content, which aids in digestion and prevents digestive disorders. It also provides a moderate amount of protein.",
    },
    {
      id: 6,
      name: "Mineral Block",
      description:
        "Supplemental feed containing essential minerals for cattle health.",
      image: "https://i.ebayimg.com/images/g/2s0AAOSw0IlmTXhK/s-l1600.webp",
      nutrients: {
        protein: "0%",
        fiber: "0%",
        moisture: "10%",
        energy: "0 Mcal/kg",
      },
      additionalInfo:
        "Mineral blocks are crucial for maintaining mineral balance and supporting overall health. They help in preventing deficiencies and boosting immune function.",
    },
    {
      id: 7,
      name: "Super neipher Grass",
      description: "Fresh grass forage, rich in fiber and essential nutrients.",
      image: "https://www.agrifarming.in/wp-content/uploads/2015/11/Green-Fodder1.jpg",
      nutrients: {
        protein: "5%",
        fiber: "20%",
        moisture: "80%",
        energy: "0.5 Mcal/kg",
      },
      additionalInfo:
        "Fresh grass is an important source of fiber and essential nutrients. It supports good digestion and is a natural, low-cost feed option.",
    },
    {
      id: 11,
      name: "Grass",
      description: "Fresh grass forage, rich in fiber and essential nutrients.",
      image: "https://d27p2a3djqwgnt.cloudfront.net/wp-content/uploads/2018/01/24115646/meadow-1728902_1280-e1556129977731.jpg",
      nutrients: {
        protein: "5%",
        fiber: "20%",
        moisture: "80%",
        energy: "0.5 Mcal/kg",
      },
      additionalInfo:
        "Fresh grass is an important source of fiber and essential nutrients. It supports good digestion and is a natural, low-cost feed option.",
    },
    {
      id: 8,
      name: "Calcium Supplement",
      description:
        "Supplemental feed rich in calcium for bone health and milk production.",
      image: "https://static.wixstatic.com/media/d5dd5c_76222c9e84ab4349831eb3709e309494~mv2.jpg/v1/fill/w_902,h_820,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d5dd5c_76222c9e84ab4349831eb3709e309494~mv2.jpg",
      nutrients: {
        protein: "0%",
        fiber: "0%",
        moisture: "5%",
        energy: "0.1 Mcal/kg",
      },
      additionalInfo:
        "Calcium supplements are vital for bone health and milk production. They help prevent calcium deficiency and related issues like milk fever.",
    },
    {
      id: 9,
      name: "Beet Pulp",
      description: "High-fiber feed made from sugar beet by-products.",
      image:"https://www.labudde.com/wp-content/uploads/LaBudde-Premium-Screened-Shredded-Beet-Pulp-980x693.jpg",
      nutrients: {
        protein: "9%",
        fiber: "20%",
        moisture: "15%",
        energy: "1.3 Mcal/kg",
      },
      additionalInfo:
        "Beet pulp is rich in fiber and is useful for improving digestibility and maintaining gut health. It also provides a moderate amount of energy.",
    },
    {
      id: 10,
      name: "Oats",
      description: "Energy-rich grain for supplementing animal diets.",
      image: "https://eagleseed.com/sitebuilder/images/IMG_1369-420x307.jpg",
      nutrients: {
        protein: "14%",
        fiber: "11%",
        moisture: "12%",
        energy: "2.4 Mcal/kg",
      },
      additionalInfo:
        "Oats are a great source of energy and can be used to enhance the diet of both dairy and beef cattle. They support weight gain and overall health.",
    },
  ];

  const [selectedFeed, setSelectedFeed] = useState(null);

  const openModal = (feed) => {
    setSelectedFeed(feed);
  };

  const closeModal = () => {
    setSelectedFeed(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className=" w-full">
        <div className="container mx-auto p-4">
          <h1 className="text-5xl font-bold text-center mt-10 text-green-600">
            Animal Feed Options
          </h1>
          <p className="text-center text-xl mt-2 text-gray-700">
            Explore our nutritious feed options for cows and buffaloes.
          </p>
        </div>
        <section className="py-8 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-full md:w-1/3 mr-6 flex justify-center">
              <img
                src="https://media.istockphoto.com/id/519861694/photo/cows-on-green-meadow.jpg?s=612x612&w=0&k=20&c=NMZFb27NKSQ2rB1uz3WxwXdzAJaAxBP-brGf2DpYWNU="
                alt="Animal Feed"
                className="w-84 h-70 object-cover rounded-lg shadow-lg border border-gray-300"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-semibold text-black mb-4">
                Why Choose Our Feed?
              </h2>
              <p className="text-lg text-gray-800 mb-4">
                Our animal feed options are meticulously crafted to meet the
                nutritional needs of your cattle and buffaloes. With a focus on
                quality ingredients and balanced nutrition, we ensure that your
                livestock receives the best possible diet to support their
                health, productivity, and overall well-being.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>High-quality ingredients for optimal nutrition.</li>
                <li>Formulated to enhance health and productivity.</li>
                <li>Comprehensive range of options to meet diverse needs.</li>
                <li>Backed by rigorous quality control and testing.</li>
              </ul>
              <p className="text-lg text-gray-800">
                Discover the difference our feed can make in the health and
                performance of your animals. Contact us for more information or
                to request a sample!
              </p>
            </div>
          </div>
        </section>
      </header>

      <main className="container mx-auto p-6">
        <section className="my-10">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white divide-y divide-gray-200 border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-medium text-black border-b border-gray-400">
                    Image
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-black border-b border-gray-400">
                    Name
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-black border-b border-gray-400">
                    Description
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-black border-b border-gray-400">
                    Protein
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-black border-b border-gray-400">
                    Fiber
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-black border-b border-gray-400">
                    Moisture
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-black border-b border-gray-400">
                    Energy
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {animalFeed.map((feed) => (
                  <tr
                    key={feed.id}
                    className="hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                    onClick={() => openModal(feed)}
                  >
                    <td className="py-2 px-4 border-b border-gray-400">
                      <img
                        src={feed.image}
                        alt={feed.name}
                        className="w-24 h-16 object-cover  rounded"
                      />
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700 border-b border-gray-400">
                      {feed.name}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700 border-b border-gray-400">
                      {feed.description}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700 border-b border-gray-400">
                      {feed.nutrients.protein}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700 border-b border-gray-400">
                      {feed.nutrients.fiber}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700 border-b border-gray-400">
                      {feed.nutrients.moisture}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-700 border-b border-gray-400">
                      {feed.nutrients.energy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <DealerList />
      </main>

      {selectedFeed && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-screen p-6 overflow-auto">
            <h3 className="text-2xl font-bold text-green-600">
              {selectedFeed.name}
            </h3>
            <img
              src={selectedFeed.image}
              alt={selectedFeed.name}
              className="w-full h-72 object-cover mt-4 rounded-md"
            />
            <p className="py-4 text-lg text-gray-700">
              {selectedFeed.description}
            </p>
            <div className="grid grid-cols-2 gap-4 text-base text-gray-700">
              <p>Protein: {selectedFeed.nutrients.protein}</p>
              <p>Fiber: {selectedFeed.nutrients.fiber}</p>
              <p>Moisture: {selectedFeed.nutrients.moisture}</p>
              <p>Energy: {selectedFeed.nutrients.energy}</p>
            </div>
            <div className="py-4 text-base text-gray-700">
              <p>{selectedFeed.additionalInfo}</p>
            </div>

            <div className="flex justify-between mt-4">
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center gap-2 font-medium hover:bg-gray-400">
                <RiFolderInfoLine className="text-xl" />
                More Info
              </button>
              <button
                className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 font-medium hover:bg-[#00d684]"
                onClick={closeModal}
              >
                <MdClose className="text-xl" />
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feeds;
