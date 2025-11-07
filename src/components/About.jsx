import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-10 w-72 h-72 bg-fuchsia-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <div className="relative w-56 h-56 mx-auto md:mx-0 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/20 to-indigo-500/20 mix-blend-overlay" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="md:col-span-7"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            I’m a product-focused engineer crafting interfaces and smart contracts for decentralized apps.
            My work blends performance, security, and motion design to create delightful experiences across
            the stack. When not building, I contribute to open-source and experiment with generative art.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
            <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Remote-first</span>
            <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Open to collabs</span>
            <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Solidity • React</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
