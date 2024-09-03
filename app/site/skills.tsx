import React from 'react';
import { SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiHtml5, SiCss3, SiPostgresql } from 'react-icons/si';
// Importar mais ícones conforme necessário

const Skills: React.FC = () => {
  const skills = [
    { name: 'Typescript', icon: <SiTypescript /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'PostGres', icon: <SiPostgresql /> },
  ];

  return (
  <section id="skills" className="py-16 text-center bg-gray-100">
  <h2 className="text-3xl font-bold mb-4 text-black">Skills</h2>
  <p className="text-lg text-black mb-8">
    Minha lista de habilidades que venho desenvolvendo ao longo dos bimestres
  </p>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mx-auto justify-center">
    {skills.map((skill, index) => (
      <div key={index} className="flex flex-col items-center">
        <div className="text-5xl text-black mb-2">
          {skill.icon}
        </div>
        <p className="text-sm font-medium text-black">{skill.name}</p>
      </div>
    ))}
  </div>
</section>
  );
};

export default Skills;
