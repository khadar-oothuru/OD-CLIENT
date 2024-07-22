import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import CustomSlider from './CustomSlider'; // Adjust the import path if necessary

const About = () => {
  const slides = [
    <div key="1" className="p-6">
      <img src="https://via.placeholder.com/500x300" alt="Alex B." className="w-full h-48 object-cover rounded-lg mb-4" />
      <p className="text-gray-700">"This platform has transformed the way we handle our dairy transactions. It's user-friendly and highly efficient."</p>
      <p className="mt-4 text-gray-600">- Alex B., Dairy Owner</p>
    </div>,
    <div key="2" className="p-6">
      <img src="https://via.placeholder.com/500x300" alt="Priya S." className="w-full h-48 object-cover rounded-lg mb-4" />
      <p className="text-gray-700">"The automated billing and payment tracking features have made managing our business much easier."</p>
      <p className="mt-4 text-gray-600">- Priya S., Milk Seller</p>
    </div>,
    <div key="3" className="p-6">
      <img src="https://via.placeholder.com/500x300" alt="Raj M." className="w-full h-48 object-cover rounded-lg mb-4" />
      <p className="text-gray-700">"An invaluable tool for our daily operations. The reporting tools are especially helpful for making informed decisions."</p>
      <p className="mt-4 text-gray-600">- Raj M., Dairy Manager</p>
    </div>,
    <div key="4" className="p-6">
      <img src="https://via.placeholder.com/500x300" alt="Nina T." className="w-full h-48 object-cover rounded-lg mb-4" />
      <p className="text-gray-700">"The seamless integration of the system into our workflow has been a game-changer for us."</p>
      <p className="mt-4 text-gray-600">- Nina T., Operations Manager</p>
    </div>
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto p-4">
          <h1 className="text-5xl font-bold text-center text-green-600">
            About Us
          </h1>
          <p className="text-center text-xl mt-2 text-gray-700">
            Learn more about our mission, vision, and the team behind the Milk Transaction Management System
          </p>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="my-10 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-1/2 mb-6 lg:mb-0 lg:order-2">
            <img src="https://via.placeholder.com/600x400" alt="Vision" className="rounded-lg shadow-md" />
          </div>
          <div className="lg:w-1/2 lg:order-1">
            <h2 className="text-3xl font-semibold text-green-600 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We envision a future where the dairy industry is fully digitalized, making daily operations smoother and more transparent. Our platform aims to build trust and efficiency within the dairy community.
            </p>
          </div>
        </section>

        <section className="my-10 flex flex-col lg:flex-row-reverse items-center lg:justify-between">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <img src="https://via.placeholder.com/600x400" alt="Mission" className="rounded-lg shadow-md" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-green-600 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our mission is to revolutionize the dairy industry by providing a seamless and efficient platform for managing milk transactions. We aim to enhance transparency, accuracy, and ease of use for both milk sellers and dairy owners.
            </p>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Daily Milk Transaction Recording</h3>
              <p className="text-gray-700">We enable milk sellers to log the quantity of milk delivered each day, and dairy owners to verify and confirm the received quantity, ensuring accurate records for both parties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Automated Bill Generation</h3>
              <p className="text-gray-700">Our system automates the calculation and generation of bills every 15 days, detailing the total amount due, making the billing process seamless and error-free.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Management</h3>
              <p className="text-gray-700">Track payment statuses, record transactions, and ensure timely payments, enhancing financial transparency and trust between parties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Reports and Analytics</h3>
              <p className="text-gray-700">Generate insightful reports and analyze trends to help dairy owners and milk sellers make informed decisions and improve their operations.</p>
            </div>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-3xl" />
              <p className="text-gray-700">Comprehensive milk transaction management and tracking.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-3xl" />
              <p className="text-gray-700">Real-time notifications and alerts for transaction updates.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-3xl" />
              <p className="text-gray-700">Easy-to-use interface for both sellers and dairy owners.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-3xl" />
              <p className="text-gray-700">Secure payment processing and automated reconciliation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-3xl" />
              <p className="text-gray-700">Customizable reporting tools for insightful analytics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-3xl" />
              <p className="text-gray-700">24/7 customer support and assistance.</p>
            </div>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
            Testimonials
          </h2>
          <CustomSlider slides={slides} />
        </section>
      </main>
    </div>
  );
};

export default About;
