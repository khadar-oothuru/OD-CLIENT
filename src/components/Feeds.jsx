import React from 'react';

const Feeds = () => {
  // Example data (replace with actual feed data)
  const animalFeed = [
    {
      id: 1,
      name: 'Alfalfa Hay',
      description: 'High-protein feed suitable for dairy cattle.',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      nutrients: {
        protein: '16%',
        fiber: '25%',
        moisture: '12%',
        energy: '1.5 Mcal/kg',
      },
    },
    {
      id: 2,
      name: 'Corn Silage',
      description: 'Fermented high-energy feed for ruminants.',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      nutrients: {
        protein: '8%',
        fiber: '30%',
        moisture: '70%',
        energy: '0.8 Mcal/kg',
      },
    },
    {
      id: 3,
      name: 'Grain Mix',
      description: 'Mixed grains for supplemental energy and nutrients.',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      nutrients: {
        protein: '12%',
        fiber: '8%',
        moisture: '10%',
        energy: '2.0 Mcal/kg',
      },
    },
    {
      id: 4,
      name: 'Soybean Meal',
      description: 'High-protein feed made from soybeans, suitable for dairy cows.',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      nutrients: {
        protein: '48%',
        fiber: '4%',
        moisture: '10%',
        energy: '2.4 Mcal/kg',
      },
    },
    {
      id: 5,
      name: 'Wheat Bran',
      description: 'By-product of wheat milling, provides fiber and some protein.',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      nutrients: {
        protein: '14%',
        fiber: '15%',
        moisture: '12%',
        energy: '1.2 Mcal/kg',
      },
    },
    {
      id: 6,
      name: 'Mineral Block',
      description: 'Supplemental feed containing essential minerals for cattle health.',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      nutrients: {
        protein: '0%',
        fiber: '0%',
        moisture: '10%',
        energy: '0 Mcal/kg', // Mineral blocks typically don't provide energy
      },
    },
    {
      id: 7,
      name: 'Grass',
      description: 'Fresh grass forage, rich in fiber and essential nutrients.',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      nutrients: {
        protein: '5%',
        fiber: '20%',
        moisture: '80%',
        energy: '0.5 Mcal/kg',
      },
    },
    {
      id: 8,
      name: 'Calcium Supplement',
      description: 'Supplemental feed rich in calcium for bone health and milk production.',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      nutrients: {
        protein: '0%',
        fiber: '0%',
        moisture: '5%',
        energy: '0.1 Mcal/kg',
      },
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto p-4">
          <h1 className="text-5xl font-bold text-center text-green-600">
            Animal Feed Options
          </h1>
          <p className="text-center text-xl mt-2 text-gray-700">
            Explore our nutritious feed options for cows and buffaloes
          </p>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animalFeed.map((feed) => (
              <div key={feed.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={feed.image} alt={feed.name} className="w-full h-48 object-cover object-center" />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">{feed.name}</h2>
                  <p className="text-sm text-gray-600 mb-2">{feed.description}</p>
                  <div className="flex justify-between text-sm text-gray-700">
                    <p>Protein: {feed.nutrients.protein}</p>
                    <p>Fiber: {feed.nutrients.fiber}</p>
                    <p>Moisture: {feed.nutrients.moisture}</p>
                    <p>Energy: {feed.nutrients.energy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Feeds;
