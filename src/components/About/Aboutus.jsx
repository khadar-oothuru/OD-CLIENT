import React from 'react';
import CustomSlider from './CustomSlider'; // Adjust the import path if necessary
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="mt-14">
        <div className="container mx-auto p-4">
          <h1 className="text-5xl font-bold text-center text-green-600">
            About Us
          </h1>
          <p className="text-center text-xl mt-5 text-gray-700">
            Learn more about our mission, vision, and the team behind the  
            <span className="font-semibold hover:text-[#00d684] hover:scale-105 cursor-pointer ml-2">Our Dairy</span>

           
          </p>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="my-10 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-2/2 mb-6 mr-11 lg:mb-0 lg:order-1">
            <img src="https://media.istockphoto.com/id/519861694/photo/cows-on-green-meadow.jpg?s=612x612&w=0&k=20&c=NMZFb27NKSQ2rB1uz3WxwXdzAJaAxBP-brGf2DpYWNU=" alt="Vision" className="rounded-lg shadow-md" />
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
          <div className="lg:w-1/2 mb-6 ml-11 lg:mb-0">
            <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202405/66320bb5ca855-upi-transactions-declined-in-volume-and-value-in-april-by-1-and-07--compared-to-march-2024-013021777-16x9.jpg?size=948:533" alt="Mission" className="rounded-lg shadow-md" />
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
              <p className="text-gray-700">Secure and reliable payment processing and record-keeping.</p>
            </div>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
            Testimonials
          </h2>
          <CustomSlider />
        </section>
      </main>
    </div>
  );
};

export default About;
