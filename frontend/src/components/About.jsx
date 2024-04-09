import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl font-bold mb-4 text-blue-600"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ marginLeft: '-15px', marginTop: '50px' }}
      >
        About Us
      </motion.h1>
      <motion.p
        className="mb-4 text-lg text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Welcome to our book inventory system! Our system is designed to help you efficiently manage your book inventory, whether you're a bookstore owner, a librarian, or a book enthusiast.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-2 text-green-600">Features</h2>
        <ul className="list-disc ml-8 mb-4">
          <li>Track your book inventory including title, author, ISBN, quantity, and price.</li>
          <li>View sales statistics and analytics to make informed decisions about restocking and promotions.</li>
          <li>Receive inventory alerts for low stock levels and out-of-stock items.</li>
          <li>Manage orders, process payments, and generate packing slips and shipping labels.</li>
          <li>Customize user permissions and access levels for administrators and employees.</li>
          <li>Configure settings and preferences to tailor the system to your specific needs.</li>
        </ul>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-2 text-purple-600">Goals</h2>
        <p className="text-gray-700 mb-4">We are committed to continuously improving our book inventory system to provide you with the best possible experience. Our goals include:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>Enhancing usability and user experience based on user feedback.</li>
          <li>Integrating new features and functionalities to meet evolving industry needs.</li>
          <li>Ensuring reliability, security, and scalability of the system.</li>
          <li>Providing excellent customer support and assistance.</li>
        </ul>
      </motion.div>
      
      <motion.p
        className="text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        We hope you find our book inventory system useful and valuable for managing your book collection. Thank you for choosing us!
      </motion.p>
    </motion.div>
  );
};

export default About;
