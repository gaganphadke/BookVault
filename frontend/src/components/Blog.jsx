import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto p-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-zinc-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ marginLeft: '-15px', marginTop: '50px' }}
      >
        Welcome to Our Blog
      </motion.h1>

      <motion.div
        className="border-b border-gray-200 pb-8 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Blog Post Title 1</h2>
        <p className="text-gray-700 mb-4">Published on January 1, 2024</p>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum ex nec eros eleifend, sit amet
          tristique dolor lacinia. Sed in dui non lorem euismod rutrum. Nullam eget commodo urna.
        </p>
      </motion.div>

      <motion.div
        className="border-b border-gray-200 pb-8 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Blog Post Title 2</h2>
        <p className="text-gray-700 mb-4">Published on February 15, 2024</p>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum ex nec eros eleifend, sit amet
          tristique dolor lacinia. Sed in dui non lorem euismod rutrum. Nullam eget commodo urna.
        </p>
      </motion.div>

      <motion.div
        className="border-b border-gray-200 pb-8 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Blog Post Title 3</h2>
        <p className="text-gray-700 mb-4">Published on March 17, 2024</p>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum ex nec eros eleifend, sit amet
          tristique dolor lacinia. Sed in dui non lorem euismod rutrum. Nullam eget commodo urna.
        </p>
      </motion.div>

    </motion.div>
  );
};

export default Blog;
