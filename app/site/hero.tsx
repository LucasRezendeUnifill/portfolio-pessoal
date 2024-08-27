"use client"
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Hero: React.FC = () => {
  const githubIcon = <FaGithub />;
  const linkedinIcon = <FaLinkedin />;

  return (
    <section
      id="hero"
      className="flex flex-col justify-center gap-5 text-center py-16 md:flex-row-reverse md:items-center md:justify-evenly bg-gray-900"
    >
      <div className="relative">
        <Image
          src="/avatar.png"
          width={500}
          height={500}
          className="rounded-full"
          alt="Profile picture of Harris Johnsen"
        />
      </div>
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-4xl font-bold text-white">
          Lucas
          <br />
          Oliveira
        </h1>
        <h2 className="text-2xl text-white">Engenheiro de Software</h2>
        <span className="flex gap-6 justify-center">
          <a href="https://github.com/oliveeiralucas" target="_blank" rel="noopener noreferrer">
            <div className="text-2xl text-white">{githubIcon}</div>
          </a>
          <a href="https://linkedin.com/oliveeira.lucas" target="_blank" rel="noopener noreferrer">
            <div className="text-2xl text-white">{linkedinIcon}</div>
          </a>
        </span>
        <p className="max-w-[24ch] mx-auto text-lg text-[var(--form-text-color)]">
          Estudante da unifil no sétimo período. 
        </p>
      </div>
    </section>
  );
};

export default Hero;
  