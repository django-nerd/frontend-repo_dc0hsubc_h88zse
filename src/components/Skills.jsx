import { motion } from 'framer-motion';
import { Code2, Blocks, Database, Shield, Cpu, Zap } from 'lucide-react';

const items = [
  { icon: Code2, label: 'React / Next.js' },
  { icon: Blocks, label: 'Solidity / EVM' },
  { icon: Database, label: 'The Graph / Postgres' },
  { icon: Shield, label: 'Audits / Security' },
  { icon: Cpu, label: 'Node / APIs' },
  { icon: Zap, label: 'Performance' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Skills
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 text-center hover:bg-white/10 transition"
            >
              <item.icon className="mx-auto text-fuchsia-300 group-hover:text-white transition" />
              <p className="mt-2 text-sm text-gray-300">{item.label}</p>
              <span className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 blur-2xl transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
