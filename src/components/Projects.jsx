import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "AlgoArena– AI-Powered DSA Learning Platform (MERN)",
   description: "Engineered a comprehensive full-stack DSA learning platform featuring Google Gemini AI-powered intelligent tutoring, multi-language code execution (C++, Java, JavaScript), and real-time progress tracking. Implemented Redis caching strategies to optimize database queries, achieving 50%+ performance improvement in content retrieval for frequently accessed resources. Built with MERN stack architecture including JWT-based authentication, role-based access control, and MongoDB for scalable data management. Features include interactive Monaco code editor, automated test case validation via Judge0 API, video tutorial integration with Cloudinary, and context-aware AI assistance that provides hints, code reviews, and algorithmic explanations while maintaining educational focus.",
    image: "/assets/project1.png",
    link: "https://github.com/tusharnavneet/AlgoArena",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Google Gemini AI"]
  },
  {
    id: 2,
    title: "NextGenHire: (Next-generation AI interview preparation)",
    description: "Developed a full-stack AI-driven mock interview platform enabling personalized question generation and feedback using Google Gemini AI. Designed a responsive interview UI with Shadcn UI components, delivering consistent and scalable performance for concurrent users.",
    image: "/assets/project1.png",
    link: "https://github.com/tusharnavneet/MOCK_INTERVIEWER",
    technologies: ["React.js", "Vite", "TypeScript", "Clerk", "Google Gemini AI", "Shadcn UI"]
  },
 {
    id: 3,
    title: "Swiggy - Food Delivery Application Clone",
    description: "Developed a comprehensive food delivery application clone replicating Swiggy's core functionality. Built with modern JavaScript architecture focusing on user experience, restaurant listings, order management, and responsive design for seamless food ordering experience.",
    image: "/assets/project1.png",
    link: "https://github.com/tusharnavneet/Swiggy",
    technologies: ["JavaScript", "React.js", "CSS", "API Integration"]
  },
  {
    id: 4,
    title: "Hanoi Chronicles: A Timed Journey of Moves and Strategies",
    description: "A feature-rich Tower of Hanoi game implementation in C++ offering both manual and automatic gameplay modes. Features point-based scoring, undo functionality, timed gameplay, dynamic visualization, and move validation for an engaging puzzle-solving experience.",
    image: "/assets/project1.png",
    link: "https://github.com/tusharnavneet/Hanoi-Chronicles",
    technologies: ["C++", "Algorithms", "Game Development", "Data Structures"]
  },
  {
    id: 5,
    title: "Chrome Weather Extension",
    description: "A Chrome browser extension built with JavaScript that provides real-time weather information. Features a clean and intuitive interface for quick weather updates directly from your browser toolbar.",
    image: "/assets/project1.png",
    link: "https://github.com/tusharnavneet/Chrome-Weather-Extension",
    technologies: ["JavaScript", "Chrome Extension API", "HTML", "CSS"]
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-[#27272A] text-white px-3 py-1 rounded-full text-xs lg:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}