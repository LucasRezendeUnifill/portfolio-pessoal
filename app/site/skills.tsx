import React from 'react';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiHtml5, SiCss3, SiPostgresql } from 'react-icons/si';
// Importar mais ícones conforme necessário

const Skills: React.FC = () => {
  const skills = [
    { name: 'Javascript', icon: <SiJavascript /> },
    { name: 'Typescript', icon: <SiTypescript /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'PostGres', icon: <SiPostgresql /> },
  ];

  return (
  <section id="skills" className="py-16 text-center bg-gray-50">
  <h2 className="text-3xl font-bold mb-4 text-gray-800">Skills</h2>
  <p className="text-lg text-gray-600 mb-8">
    Minha lista de habilidades que venho desenvolvendo ao longo dos bimestres
  </p>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mx-auto justify-center">
    {skills.map((skill, index) => (
      <div key={index} className="flex flex-col items-center">
        <div className="text-5xl text-gray-700 mb-2">
          {skill.icon}
        </div>
        <p className="text-sm font-medium text-gray-700">{skill.name}</p>
      </div>
    ))}
  </div>
</section>
  );
};

export default Skills;
