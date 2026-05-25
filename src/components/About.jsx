import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm Tushar Navneet, a Full Stack Developer focused on building scalable web applications and REST APIs. I work across the stack with Angular, JavaScript/TypeScript, Node.js, Django, and SQL/NoSQL databases.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Most recently, I worked as an SDE Intern at VassarDigital.ai, where I improved a railway anti-collision system, fixed 100+ issues, and refactored 1,700+ lines of code. I also interned at IIT Jammu, delivering production APIs and improving system performance. I’m looking for opportunities to contribute as an SDE and add value through clean, reliable engineering.
        </p>
      </motion.div>
    </div>
  );
}