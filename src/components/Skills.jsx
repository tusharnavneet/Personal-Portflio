import { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaBrain } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiDjango,
  SiFastapi,
  SiSqlalchemy,
  SiRedux,
  SiJava,
  SiFirebase,
  SiMicrosoftazure,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const [skills] = useState([
    // Languages
    { id: 1, name: "C", icon: <SiC size={46} /> },
    { id: 2, name: "C++", icon: <SiCplusplus size={46} /> },
    { id: 3, name: "Python", icon: <FaPython size={46} /> },
    { id: 4, name: "JavaScript", icon: <FaJs size={46} /> },
    { id: 5, name: "TypeScript", icon: <SiTypescript size={46} /> },
    { id: 6, name: "Java", icon: <SiJava size={46} /> },
    { id: 7, name: "SQL", icon: <SiPostgresql size={46} /> },

    // AI / LLM & Search
    { id: 8, name: "RAG", icon: <FaBrain size={46} /> },
    { id: 9, name: "LangChain", icon: <FaBrain size={46} /> },
    { id: 10, name: "LangGraph", icon: <FaBrain size={46} /> },
    { id: 11, name: "Prompt Engineering", icon: <FaBrain size={46} /> },
    { id: 12, name: "Agentic AI", icon: <FaBrain size={46} /> },
    { id: 13, name: "HNSW / IVF", icon: <FaBrain size={46} /> },
    { id: 14, name: "Hybrid Search", icon: <FaBrain size={46} /> },
    { id: 15, name: "pgvector", icon: <FaBrain size={46} /> },

    // Full-Stack
    { id: 16, name: "React.js", icon: <FaReact size={46} /> },
    { id: 17, name: "Redux", icon: <SiRedux size={46} /> },
    { id: 18, name: "Node.js", icon: <FaNodeJs size={46} /> },
    { id: 19, name: "Express.js", icon: <SiExpress size={46} /> },
    { id: 20, name: "Django", icon: <SiDjango size={46} /> },
    { id: 21, name: "FastAPI", icon: <SiFastapi size={46} /> },
    { id: 22, name: "SQLAlchemy", icon: <SiSqlalchemy size={46} /> },
    { id: 23, name: "REST APIs", icon: <FaJs size={46} /> },

    // Databases
    { id: 24, name: "PostgreSQL", icon: <SiPostgresql size={46} /> },
    { id: 25, name: "MySQL", icon: <SiMysql size={46} /> },
    { id: 26, name: "MongoDB", icon: <SiMongodb size={46} /> },
    { id: 27, name: "Firebase", icon: <SiFirebase size={46} /> },
    { id: 28, name: "Redis", icon: <SiRedis size={46} /> },

    // DevOps & Cloud
    { id: 29, name: "Docker", icon: <SiDocker size={46} /> },
    { id: 30, name: "Kubernetes", icon: <SiKubernetes size={46} /> },
    { id: 31, name: "Microsoft Azure", icon: <SiMicrosoftazure size={46} /> },
    { id: 32, name: "CI/CD", icon: <FaGitAlt size={46} /> },
    { id: 33, name: "Git / GitHub", icon: <FaGitAlt size={46} /> },
    { id: 34, name: "Jira", icon: <FaJs size={46} /> },
    { id: 35, name: "VS Code", icon: <VscVscode size={46} /> },
    { id: 36, name: "Figma", icon: <CgFigma size={46} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "VassarDigital.ai",
      role: "Software Development Engineer Intern",
      period: "Jan 2026 - Present",
      description:
        "Enhanced the Revision History Module from v1 to v2 for a railway anti-collision station layout system. Resolved 100+ bugs in RFID and update-regenerate logic within a safety-critical railway infrastructure platform. Refactored 1,700+ lines across frontend and backend, improving modularity, maintainability, and scalability. Collaborated with the Kernex team to implement railway-specific operational rules across zones, divisions, and stations. Developed full-stack features using Angular (TypeScript) and Django (Python).",
      logo: "/assets/vassar.svg",
    },
    {
      id: 2,
      company: "IIT Jammu",
      role: "Software Development Engineer Intern",
      period: "Jun 2025 - Aug 2025",
      description:
        "Delivered 10+ RESTful APIs for a production web application, achieving sub-700 ms response times under concurrent load. Conducted 15+ Git-based code reviews per week in Agile sprints, reducing bug reports by 30%.",
      logo: "/assets/iit-jammu.svg",
    },
    // {
    //   id: 2,
    //   company: "Self-Employed",
    //   role: "Freelance Developer",
    //   period: "2023 - Present",
    //   description:
    //     "Built custom web applications for clients using modern technologies including React.js, Node.js, and Express.js. Specialized in creating responsive user interfaces and robust backend architectures. Worked on various projects ranging from e-commerce platforms to portfolio websites, always focusing on performance optimization and user experience.",
    //   logo: "/assets/youtube.svg",
    // },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.05 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p className="text-center text-sm lg:text-base">{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
