import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'miniBlog',
      description: 'Uma aplicação simples de blog usando React, TypeScript e Tailwind CSS.',
      link: 'https://github.com/oliveeiralucas/miniBlog',
      img: 'https://picsum.photos/seed/blog/250/150',
    },
    {
      name: 'Ponto Biometrico',
      description: 'Um sistema de ponto biométrico desenvolvido com ESP8266 para controle de acesso e gestão de frequência.',
      link: 'https://github.com/oliveeiralucas/PontoBiometrico',
      img: 'https://picsum.photos/seed/biometrico/250/150',
    },
    {
      name: 'API CEP',
      description: 'Projeto de API para consulta de códigos postais no Brasil.',
      link: 'https://github.com/oliveeiralucas/api_CEP',
      img: 'https://picsum.photos/seed/api/250/150',
    },
    {
      name: 'Lógica de Programação',
      description: 'Recursos para iniciantes entenderem os fundamentos da lógica de programação.',
      link: 'https://github.com/oliveeiralucas/LogicaProgramacao',
      img: 'https://picsum.photos/seed/programming/250/150',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-200 text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Meus Projetos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              src={project.img}
              link={project.link}
              h3={project.name}
              p={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
