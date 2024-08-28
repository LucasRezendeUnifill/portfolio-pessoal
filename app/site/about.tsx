import React from 'react';
import Image from 'next/image';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-300 text-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <Image
            src="/avatar.png"
            alt="Foto de Perfil"
            className="rounded-full shadow-md"
            width={250} 
            height={250} 
          />
        </div>
        <div className="md:w-2/3 md:ml-8">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Sobre Mim</h2>
          <p className="text-lg leading-relaxed mb-6">
            Olá! Meu nome é Lucas Oliveira e sou desenvolvedor. Com experiência em diversas 
            ferramentas e linguagens de programação, estou sempre em busca de novos desafios para aprimorar minhas habilidades 
            e criar soluções inovadoras. Acredito que a tecnologia tem o poder de transformar o mundo.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Desenvolvi esse portfólio para a matéria de P.I que estou cursando na faculdade, nele vou listar algumas das tarefas que realizei até aqui.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
