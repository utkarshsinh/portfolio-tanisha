'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { label: 'Height', value: "5'9\"" },
    { label: 'Bust', value: '32"' },
    { label: 'Waist', value: '24"' },
    { label: 'Hips', value: '34"' },
    { label: 'Shoe', value: '8.5 US' },
    { label: 'Hair', value: 'Brown' },
    { label: 'Eyes', value: 'Brown' },
  ];

  const expertise = [
    'Editorial',
    'Commercial',
    'Runway',
    'Print',
    'Digital Content',
    'Brand Ambassador',
  ];

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[700px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Tanisha Profile"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-transparent opacity-60 mix-blend-overlay" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs"
            >
              <p className="text-lg font-light italic text-gray-600">
                "Fashion is the armor to survive the reality of everyday life."
              </p>
              <p className="text-sm text-primary mt-2">- Bill Cunningham</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="heading-secondary mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="paragraph mb-6">
                With over 5 years of experience in the fashion industry, I've had the privilege of working
                with renowned brands and photographers across the globe. My passion for fashion and
                modeling has taken me from local runways to international fashion weeks.
              </p>
              <p className="paragraph">
                I believe in the power of visual storytelling and bringing brands to life through
                authentic representation and creative expression.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Statistics */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Statistics</h3>
                <ul className="space-y-3">
                  {stats.map((stat, index) => (
                    <motion.li
                      key={stat.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-600">{stat.label}</span>
                      <span className="font-medium text-gray-900">{stat.value}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Expertise */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="px-4 py-2 bg-neutral-light rounded-full text-sm text-gray-700 hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a href="#contact" className="btn-primary inline-block">
                Work With Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 