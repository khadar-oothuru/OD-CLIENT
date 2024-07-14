import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Testimonial data (replace with actual testimonials and image URLs)
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Dairy Farms Inc.',
    text: 'The Milk Transaction Management System has greatly improved our efficiency in managing daily milk transactions. It is user-friendly and provides accurate records.',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Manager, Dairy Operations',
    text: 'This system has made our billing process seamless. We now generate bills effortlessly and have better control over payment management.',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Michael Johnson',
    position: 'Milk Seller',
    text: 'As a milk seller, I find the daily transaction recording feature very useful. It helps me keep track of my deliveries and ensures transparency with the dairy owners.',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to advance slides automatically
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % testimonials.length);
  };

  // Automatically advance slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto p-4">
          <h1 className="text-5xl font-bold text-center text-green-600">
            Milk Transaction Management System
          </h1>
          <p className="text-center text-xl mt-2 text-gray-700">
            Streamline and automate daily transactions between milk sellers and dairy owners
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <img src="https://via.placeholder.com/300" alt="Dairy Farm" className="rounded-lg shadow-md" />
            <img src="https://via.placeholder.com/300" alt="Milk Bottles" className="rounded-lg shadow-md" />
            <img src="https://via.placeholder.com/300" alt="Transaction Recording" className="rounded-lg shadow-md" />
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="my-10">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-4">User Authentication</h3>
              <p className="text-gray-700">Secure login for both milk sellers and dairy owners. Role-based access control ensures the right users access the right information.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Daily Milk Transaction Recording</h3>
              <p className="text-gray-700">Log and verify daily milk deliveries, ensuring accurate records for both parties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Bill Generation</h3>
              <p className="text-gray-700">Automate the calculation and generation of bills every 15 days, detailing the total amount due.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Management</h3>
              <p className="text-gray-700">Track payment statuses, record transactions, and ensure timely payments.</p>
            </div>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
            Testimonials
          </h2>
          {/* Testimonial Slider */}
          <div className="relative overflow-hidden rounded-lg shadow-md">
            {/* Slider Track */}
            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white p-6">
                    <div className="flex items-center mb-4">
                      <img src={testimonial.image} alt={testimonial.name} className="rounded-full h-12 w-12 flex-shrink-0 mr-4" />
                      <div>
                        <p className="text-gray-700 text-lg">{testimonial.text}</p>
                        <p className="text-gray-800 font-semibold">{testimonial.name}</p>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation Buttons */}
            <button
              className="absolute inset-y-0 left-0 flex items-center bg-gray-200 bg-opacity-50 px-4 text-3xl text-gray-600 hover:text-green-600 transition duration-300"
              onClick={prevSlide}
            >
              &#8249;
            </button>
            <button
              className="absolute inset-y-0 right-0 flex items-center bg-gray-200 bg-opacity-50 px-4 text-3xl text-gray-600 hover:text-green-600 transition duration-300"
              onClick={nextSlide}
            >
              &#8250;
            </button>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
            Our Motive
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex items-center">
              <img src="https://via.placeholder.com/500" alt="Dairy Operation" className="rounded-lg shadow-md" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-gray-700 mb-4">
                Our goal is to enhance efficiency, transparency, and accuracy in dairy operations. By leveraging modern web technologies, the Milk Transaction Management System simplifies the process of recording milk transactions, generating bills, and managing payments.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We aim to support dairy owners and milk sellers in maintaining accurate records, ensuring timely payments, and generating insightful reports to analyze trends and improve their operations.
              </p>
            </div>
          </div>
        </section>

        <section className="my-10 text-center">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
            Get Started Today
          </h2>
          <Link to="/login" className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-500 transition duration-300">
            Register Now
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
