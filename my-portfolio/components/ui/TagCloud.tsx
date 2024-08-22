'use client';
import React from 'react';
import { motion } from 'framer-motion';


const TagCloud = ({tags}: {
    tags: string[];
}) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {tags.map((tag, index) => (
        <motion.div
          key={tag}
          className="bg-yellow-500 text-black-100 px-3 rounded-full cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <span className="text-xs font-semibold">{tag}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default TagCloud;
