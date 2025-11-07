import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            Alex Nakamoto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-lg sm:text-xl text-fuchsia-300/90"
          >
            Web3 Engineer • Smart Contracts • Frontend
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 max-w-xl text-gray-200"
          >
            Building secure, scalable, and beautiful crypto experiences. I turn protocols into products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 flex items-center justify-center md:justify-start gap-3"
          >
            <a href="#projects" className="px-5 py-2.5 rounded-md text-white bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-md text-fuchsia-300/90 hover:text-white hover:bg-white/10 transition-colors">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
