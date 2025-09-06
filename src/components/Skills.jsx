import React from "react";
import { FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb } from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    {
      name: "React",
      icon: <FaReact size={40} />,
      color: "bg-blue-500",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} />,
      color: "bg-cyan-400",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={40} />,
      color: "bg-yellow-400",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={40} />,
      color: "bg-green-500",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={40} />,
      color: "bg-emerald-500",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={40} />,
      color: "bg-gray-800",
    },
  ];

  return (
    <section className="py-20 bg-white text-shadow-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 drop-shadow-lg">
          ⚡ My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center rounded-xl shadow-lg p-6 transform transition-transform hover:scale-110 hover:rotate-3 ${skill.color}`}
            >
              <div className="mb-3">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
