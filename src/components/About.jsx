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
          My name is **Tushar Navneet**. I am a passionate **Full Stack Developer** and quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I love web development and enjoy making applications that are useful and efficient. My core skills are based on **JavaScript** and the **MERN stack**. I recently completed my internship at **IIT Jammu** and am currently studying **Computer Science Engineering** at **IIIT Senapati**.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I have experience building **AI-powered platforms**, **scalable web applications**, and solving **700+ competitive programming problems**. I enjoy mentoring other developers and am available for job opportunities that match my skills and interests.
        </p>
      </motion.div>
    </div>
  );
}