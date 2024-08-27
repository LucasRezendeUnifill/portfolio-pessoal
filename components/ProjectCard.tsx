import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  src: string;
  link: string;
  h3: string;
  p: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, link, h3, p }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <Image 
        src={src} 
        alt={`${h3} logo`} 
        width={500} 
        height={300} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{h3}</h3>
        <p className="text-gray-600">{p}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
