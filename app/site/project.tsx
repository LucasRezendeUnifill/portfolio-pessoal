import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'ApiLucasRezende',
      description: 'Uma API simples desenvolvida para consultas de CEPs no Brasil.',
      link: 'https://github.com/LucasRezendeUnifill/api_CEP',
      img: 'https://picsum.photos/seed/api/250/150',
    },
    {
      name: 'ProjetoJavaPetri',
      description: 'Atividade em Java para estudo de rotinas e sub-rotinas.',
      link: 'https://github.com/LucasRezendeUnifill/ProjetoJavaPetri',
      img: 'https://picsum.photos/seed/java/250/150',
    },
    {
      name: 'Portfólio',
      description: 'Um portfólio pessoal criado com HTML e CSS.',
      link: 'https://github.com/LucasRezendeUnifill/portifolio',
      img: 'https://picsum.photos/seed/portfolio/250/150',
    },
    {
      name: 'Trabalho Petri',
      description: 'Um trabalho acadêmico em Java relacionado ao modelo Petri.',
      link: 'https://github.com/LucasRezendeUnifill/trabalho-petri',
      img: 'https://picsum.photos/seed/petri/250/150',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 text-black">
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
