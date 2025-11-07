import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Contact
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 leading-relaxed">
              Let’s collaborate on your next crypto product. I’m available for freelance, consulting, and
              long-term projects. Send a quick message and I’ll get back within 24 hours.
            </p>
            <ul className="mt-6 space-y-2 text-gray-400 text-sm">
              <li>Based in: Remote / UTC-5</li>
              <li>Preferred: USDC, ETH, or fiat</li>
              <li>Response time: typically same day</li>
            </ul>
          </div>

          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Your name" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" required />
              <input type="email" name="email" placeholder="Your email" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" />
            <textarea name="message" placeholder="Tell me about your project" rows="5" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" />
            <button type="submit" className="w-full sm:w-auto px-6 py-2.5 rounded-md text-white bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 transition-colors">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
