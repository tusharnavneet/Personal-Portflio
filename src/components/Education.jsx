import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institution: "Indian Institute of Information Technology Senapati, Manipur",
    period: "2022 - 2026",
    cgpa: "8.75 / 10.0",
    location: "Manipur, India",
    coursework: [
      "Data Structures & Algorithms",
      "Artificial Intelligence", 
      "Computer Networks",
      "Database Management Systems",
      "Operating Systems",
      "Information Retrieval",
      "Object-Oriented Programming",
      "Web and Language Processing"
    ]
  }
];

const achievements = [
  {
    id: 1,
    title: "GATE 2025 (CSE)",
    description: "Qualified with strong command of core computer science subjects",
    year: "2025"
  },
  {
    id: 2,
    title: "Competitive Programming",
    description: "Solved 700+ problems across LeetCode and GeeksforGeeks",
    year: "Ongoing"
  },
  {
    id: 3,
    title: "Python Training (IIT Bombay)",
    description: "Scored 100% in the national Spoken Tutorial Exam",
    year: "2024"
  },
  {
    id: 4,
    title: "PM-YASASVI Scholar",
    description: "Awarded full tuition for securing top 2% academic standing",
    year: "2023"
  },
  {
    id: 5,
    title: " Technical Mentorship",
    description: "Guided over 20+ students in development through structured peer instruction and knowledge workshops",
    year: "2023"
  }
];

export default function Education() {
  return (
    <div className="px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="education">
      <motion.h2
        className="text-2xl lg:text-4xl text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Education & <span className="font-extrabold">Achievements</span>
      </motion.h2>

      {/* Education Section */}
      <div className="mt-8 lg:mt-16">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="bg-white border-2 border-black rounded-lg p-6 lg:p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
              <div className="flex items-center gap-3 mb-2 lg:mb-0">
                <FaGraduationCap className="text-2xl" />
                <div>
                  <h3 className="font-bold text-xl lg:text-2xl">{edu.degree}</h3>
                  <p className="text-lg font-semibold text-[#71717A]">{edu.field}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 justify-end mb-1">
                  <FaCalendarAlt className="text-sm" />
                  <span className="font-semibold">{edu.period}</span>
                </div>
                <div className="font-bold text-lg">CGPA: {edu.cgpa}</div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2">{edu.institution}</h4>
              <div className="flex items-center gap-2 text-[#71717A]">
                <FaMapMarkerAlt />
                <span>{edu.location}</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Relevant Coursework:</h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {edu.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="bg-[#F4F4F5] px-3 py-2 rounded text-sm text-center"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="bg-black rounded-lg p-6 lg:p-8 mt-8 lg:mt-16">
        <motion.h3
          className="text-xl lg:text-3xl text-white font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Achievements & <span className="font-extrabold">Certifications</span>
        </motion.h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="bg-[#27272A] p-5 rounded-lg border border-[#D4D4D8]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-white text-lg">{achievement.title}</h4>
                <span className="text-[#D4D4D8] font-semibold text-sm">{achievement.year}</span>
              </div>
              <p className="text-[#D4D4D8] text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
