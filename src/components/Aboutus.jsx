import React from 'react';

const About = () => {
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
        <section className="my-10">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
            Our mission is to revolutionize the dairy industry by providing a seamless and efficient platform for managing milk transactions. We aim to enhance transparency, accuracy, and ease of use for both milk sellers and dairy owners.
          </p>
          <div className="flex justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Mission" className="rounded-lg shadow-md" />
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
            We envision a future where the dairy industry is fully digitalized, making daily operations smoother and more transparent. Our platform aims to build trust and efficiency within the dairy community.
          </p>
          <div className="flex justify-center">
            <img src="https://via.placeholder.com/600x400" alt="Vision" className="rounded-lg shadow-md" />
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
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
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800">Emily Johnson</h3>
              <p className="text-gray-600">Chief Operations Officer</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
