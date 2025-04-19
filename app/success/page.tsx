'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Message Sent!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your message. I will get back to you as soon as possible.
        </p>
        <Link 
          href="/" 
          className="btn-primary inline-block"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
} 