import React, { useState } from "react";
import { FaLaptopCode, FaServer, FaBriefcase, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");

  const workExperience = [
    {
      role: "Frontend Developer Intern",
      company: "CORE STREAM NG",
      duration: "Feb 2025 - Aug 2025 ",
      responsibilities: [
        "Build responsive UI with React & Tailwind",
        "Integrate REST APIs for dashboard",
        "Fix bugs & optimize performance",
      ],
      tech: ["React", "Tailwind", "JavaScript" , "ChatGPT"],
      icon: <FaLaptopCode size={28} />,
    },
    {
      role: "Backend Developer",
      company: "Corestrem Ng",
      duration: "Mar 2025 - Dec 2025 • Remote",
      responsibilities: [
        "Create RESTful APIs using Express.js",
        "Implement JWT auth & rate limiter",
        "Write Swagger documentation",
      ],
      tech: ["Node.js", "Express", "MongoDB", "ChatGPT"],
      icon: <FaServer size={28} />,
    },
    {
      role: "Freelance Web Developer",
      company: "Personal Projects",
      duration: "2025 - Present • Remote",
      responsibilities: [
        "Build custom websites for clients",
        "Deploy with Vercel & Netlify",
        "Deliver mobile-first UIs",
      ],
      tech: ["React", "JavaScript", "CSS" , "ChatGPT"],
      icon: <FaBriefcase size={28} />,
    },
  ];

  // Framer Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="experience" className="py-16 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-600 mb-4"
        >
          Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-gray-700 mb-8"
        >
          A glimpse of where I've been — from work experience to organizational
          life that shaped who I am.
        </motion.p>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-10">
          <button
            onClick={() => setActiveTab("work")}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg shadow 
              ${
                activeTab === "work"
                  ? "bg-gray-900 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              }`}
          >
            <FaBriefcase /> Work
          </button>
          <button
            onClick={() => setActiveTab("organization")}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg shadow 
              ${
                activeTab === "organization"
                  ? "bg-gray-900 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              }`}
          >
            <FaUsers /> Organization
          </button>
        </div>

        {/* Work Experience Grid */}
        {activeTab === "work" && (
          <div className="grid md:grid-cols-3 gap-8">
            {workExperience.map((exp, idx) => (
              <motion.div
                key={idx}
                className="bg-white  shadow-md rounded-xl p-6 text-left hover:shadow-lg transition"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={idx}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3  rounded-lg">
                    {exp.icon}
                  </div>
                  <h3 className="text-xl font-semibold ">
                    {exp.role}
                  </h3>
                </div>
                <p className=" mb-2">
                  {exp.company}
                </p>
                <p className="text-sm mb-4">
                  {exp.duration}
                </p>
                <h4 className="font-medium  mb-2">
                  Responsibilities:
                </h4>
                <ul className="list-disc list-inside  mb-4">
                  {exp.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
                <h4 className="font-medium  mb-2">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-200 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Organization Experience Placeholder */}
        {activeTab === "organization" && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300"
          >
            Coming soon... 🚀
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Experience;
