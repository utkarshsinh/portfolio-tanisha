'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Editorial', 'Commercial', 'Runway', 'Print'];

const portfolioItems = [
  {
    id: 1,
    category: 'Editorial',
    image: '/images/portfolio/editorial-1.jpg',
    title: 'Vogue Editorial',
    description: 'Summer Collection 2024',
  },
  {
    id: 2,
    category: 'Commercial',
    image: '/images/portfolio/commercial-1.jpg',
    title: 'Brand Campaign',
    description: 'Luxury Fashion Brand',
  },
  {
    id: 3,
    category: 'Runway',
    image: '/images/portfolio/runway-1.jpg',
    title: 'Fashion Week',
    description: 'Paris Fashion Week 2024',
  },
  {
    id: 4,
    category: 'Print',
    image: '/images/portfolio/print-1.jpg',
    title: 'Magazine Cover',
    description: 'Elle Magazine Feature',
  },
  // Add more portfolio items as needed
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = portfolioItems.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="portfolio" className="section-padding bg-neutral-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="paragraph max-w-2xl mx-auto">
            Explore my diverse portfolio showcasing editorial, commercial, runway, and print work
            across various fashion brands and publications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="portfolio-item"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-content">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={hoveredItem === item.id ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/80 text-sm mb-4">{item.description}</p>
                        <span className="inline-block px-4 py-1 bg-primary/20 text-white rounded-full text-sm">
                          {item.category}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 