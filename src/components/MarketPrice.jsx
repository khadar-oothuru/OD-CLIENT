import React from "react";

const MarketPrice = () => {
  // Example data (replace with actual market price data)
  const marketPrices = [
    {
      city: " Atmakur ",
      cow: [
        { fat: "3%", price: "50 Rs/L" },
        { fat: "4%", price: "55 Rs/L" },
        { fat: "5%", price: "60 Rs/L" },
      ],
      buffalo: [
        { fat: "6%", price: "65 Rs/L" },
        { fat: "7%", price: "70 Rs/L" },
        { fat: "8%", price: "75 Rs/L" },
      ],
    },
    {
      city: "Anantapur",
      cow: [
        { fat: "3%", price: "48 Rs/L" },
        { fat: "4%", price: "53 Rs/L" },
        { fat: "5%", price: "58 Rs/L" },
      ],
      buffalo: [
        { fat: "6%", price: "63 Rs/L" },
        { fat: "7%", price: "68 Rs/L" },
        { fat: "8%", price: "73 Rs/L" },
      ],
    },
    // Add more cities as needed
    {
      city: "Kalyandurgam",
      cow: [
        { fat: "3%", price: "52 Rs/L" },
        { fat: "4%", price: "57 Rs/L" },
        { fat: "5%", price: "62 Rs/L" },
      ],
      buffalo: [
        { fat: "6%", price: "67 Rs/L" },
        { fat: "7%", price: "72 Rs/L" },
        { fat: "8%", price: "77 Rs/L" },
      ],
    },
    {
      city: "Dharmavram",
      cow: [
        { fat: "3%", price: "47 Rs/L" },
        { fat: "4%", price: "52 Rs/L" },
        { fat: "5%", price: "57 Rs/L" },
      ],
      buffalo: [
        { fat: "6%", price: "62 Rs/L" },
        { fat: "7%", price: "67 Rs/L" },
        { fat: "8%", price: "72 Rs/L" },
      ],
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
          Market Price for Milk
        </h1>
        <p className="text-lg text-gray-800 mb-6">
          Below is a summary of current milk prices per liter in various cities, categorized by fat percentage for both cow and buffalo milk.
          Prices are indicative and subject to change based on market conditions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {marketPrices.map((market) => (
            <div key={market.city} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{market.city}</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cow Milk Prices</h3>
                  <img
                    src="https://images.pexels.com/photos/54550/pexels-photo-54550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Cow"
                    className="rounded-lg shadow-md mb-4 w-32 h-32 object-cover"
                  />
                  <p className="text-gray-700 mb-4">
                    Prices per liter of cow milk based on fat percentage.
                  </p>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Fat %
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {market.cow.map((price) => (
                        <tr key={price.fat}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {price.fat}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {price.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Buffalo Milk Prices</h3>
                  <img
                    src="https://images.pexels.com/photos/19183786/pexels-photo-19183786/free-photo-of-buffaloes-on-a-pasture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Buffalo"
                    className="rounded-lg shadow-md mb-4 w-32 h-32 object-cover"
                  />
                  <p className="text-gray-700 mb-4">
                    Prices per liter of buffalo milk based on fat percentage.
                  </p>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Fat %
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {market.buffalo.map((price) => (
                        <tr key={price.fat}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {price.fat}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {price.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-700">
          * Prices are indicative and subject to change based on market conditions.
        </p>
      </div>
    </div>
  );
};

export default MarketPrice;
