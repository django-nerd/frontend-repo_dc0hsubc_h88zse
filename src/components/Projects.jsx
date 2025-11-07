import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'DeFi Dashboard',
    tech: ['React', 'Ethers.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1600&auto=format&fit=crop',
    github: 'https://github.com/',
    live: 'https://example.com',
  },
  {
    title: 'NFT Minting DApp',
    tech: ['Next.js', 'Solidity', 'IPFS'],
    image: 'https://images.unsplash.com/photo-1599562911814-913341eede14?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI0ODM3NDV8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    github: 'https://github.com/',
    live: 'https://example.com',
  },
  {
    title: 'DAO Governance',
    tech: ['React', 'The Graph', 'Chakra'],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop',
    github: 'https://github.com/',
    live: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{p.tech.join(' • ')}</p>
                <div className="mt-3 flex items-center gap-3">
                  <a href={p.github} className="inline-flex items-center gap-1 text-sm text-gray-300 hover:text-white transition">
                    <Github size={16} /> Code
                  </a>
                  <a href={p.live} className="inline-flex items-center gap-1 text-sm text-gray-300 hover:text-white transition">
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
