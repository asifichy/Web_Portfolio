'use client';

import { motion } from 'framer-motion';
import userScrollProgress from '@/hooks/userScrollProgress';

const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
};

const Template = ({ children }) => {
    const completion = userScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        transition={{ type: 'tween', delay: 0.1, duration: 0.5 }}
      >
        {children}
      </motion.main>
      {/* Completion bar */}
      <motion.span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className='fixed z-50 bg-gradient-to-b from-primary to-orange-500 w-1 top-0 right-0
        bottom-0 transition-all duration-700 rounded-full'
      ></motion.span>
    </>
  );
}

export default Template
