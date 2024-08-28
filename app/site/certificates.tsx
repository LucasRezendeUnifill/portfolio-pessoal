"use client"
import { useState } from 'react';

import { FaCertificate, FaChevronDown, FaChevronUp, FaDownload } from 'react-icons/fa';

export default function Certificates() {

    const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const certificados = [
    {
      id: 1,
      titulo: 'Postman + Testes Automatizados',
      emissor: 'Alura',
      data: 'Agosto 2023',
      link: '/certificados/postman+testes-automatizados.pdf',
      downloadLink: '/certificados/postman+testes-automatizados.pdf',
    },
    {
      id: 2,
      titulo: 'Postman - 1 Hora',
      emissor: 'Udemy',
      data: 'Julho 2023',
      link: '/certificados/postman-1hora.pdf',
      downloadLink: '/certificados/postman-1hora.pdf',
    },
    {
      id: 3,
      titulo: 'React do Zero à Maestria',
      emissor: 'Cod3r',
      data: 'Junho 2023',
      link: '/certificados/react-do-zero-maestria.pdf',
      downloadLink: '/certificados/react-do-zero-maestria.pdf',
    },
    {
      id: 4,
      titulo: 'Certificado 1200b8de',
      emissor: 'Desconhecido',
      data: 'Maio 2023',
      link: '/certificados/1200b8dea7b75eebf21acbffac81de3c0f04.pdf',
      downloadLink: '/certificados/1200b8dea7b75eebf21acbffac81de3c0f04.pdf',
    },
    {
      id: 5,
      titulo: 'Design de Banco de Dados',
      emissor: 'Coursera',
      data: 'Abril 2023',
      link: '/certificados/Design_banco_de_dados.pdf',
      downloadLink: '/certificados/Design_banco_de_dados.pdf',
    },
    {
      id: 6,
      titulo: 'Docker do Básico ao Avançado',
      emissor: 'Digital Innovation One',
      data: 'Março 2023',
      link: '/certificados/docker-basico-avancado.jpg',
      downloadLink: '/certificados/docker-basico-avancado.jpg',
    },
    {
      id: 7,
      titulo: 'Git do Básico ao Avançado',
      emissor: 'Udemy',
      data: 'Fevereiro 2023',
      link: '/certificados/git-basico-avancado.jpg',
      downloadLink: '/certificados/git-basico-avancado.jpg',
    },
    {
      id: 8,
      titulo: 'HackaSun Assaí',
      emissor: 'Hackathon',
      data: 'Janeiro 2023',
      link: '/certificados/Hackathon/HackaSun- Assai.pdf',
      downloadLink: '/certificados/Hackathon/HackaSun- Assai.pdf',
    },
    {
      id: 9,
      titulo: 'Hackathon Health Tech 2023 (Londrina)',
      emissor: 'Hackathon',
      data: 'Dezembro 2022',
      link: '/certificados/Hackathon/HACKATHON HEALTH TECH 2023 (LONDRINA).pdf',
      downloadLink: '/certificados/Hackathon/HACKATHON HEALTH TECH 2023 (LONDRINA).pdf',
    },
    {
      id: 10,
      titulo: 'Hackathon Smart Agro Expolondrina 2023 (Curso)',
      emissor: 'Hackathon',
      data: 'Novembro 2022',
      link: '/certificados/Hackathon/Hackathon Smart Agro Expolondrina 2023 (Curso).pdf',
      downloadLink: '/certificados/Hackathon/Hackathon Smart Agro Expolondrina 2023 (Curso).pdf',
    },
    {
      id: 11,
      titulo: 'Ideathon Smart Agro 2023',
      emissor: 'Hackathon',
      data: 'Outubro 2022',
      link: '/certificados/Hackathon/ideathon-smart-agro-2023.pdf',
      downloadLink: '/certificados/Hackathon/ideathon-smart-agro-2023.pdf',
    },
    {
      id: 12,
      titulo: 'Oficina Design Sprint - Ideathon Smart Agro',
      emissor: 'Hackathon',
      data: 'Setembro 2022',
      link: '/certificados/Hackathon/Oficina Design Sprint - Ideathon Smart Agro.pdf',
      downloadLink: '/certificados/Hackathon/Oficina Design Sprint - Ideathon Smart Agro.pdf',
    },
    {
      id: 13,
      titulo: 'AgrOpen Innovation - Inovação Aberta',
      emissor: 'Hackathon',
      data: 'Agosto 2022',
      link: '/certificados/Hackathon/AgrOpen Innovation Inovação Aberta - Desafio e Oportunidades.pdf',
      downloadLink: '/certificados/Hackathon/AgrOpen Innovation Inovação Aberta - Desafio e Oportunidades.pdf',
    },
    {
      id: 14,
      titulo: 'AgrOpen',
      emissor: 'Hackathon',
      data: 'Julho 2022',
      link: '/certificados/Hackathon/AgrOpen.pdf',
      downloadLink: '/certificados/Hackathon/AgrOpen.pdf',
    },
  ];

  return (
       <section id="certificados" className="py-12 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Meus Certificados</h2>
        <div className="bg-gray-200 shadow-md rounded-lg p-6 mb-4">
          <div className={`grid grid-cols-2 gap-4 ${isExpanded ? '' : 'max-h-48 overflow-hidden'}`}>
            {certificados.map((cert) => (
              <div key={cert.id} className="bg-gray-100 shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <FaCertificate className="text-indigo-600 text-3xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">{cert.titulo}</h3>
              </div>
              <p className="text-gray-600 mb-2">Emissor: {cert.emissor}</p>
              <p className="text-gray-600 mb-4">Data: {cert.data}</p>
              <div className="flex justify-between items-center">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  View Certificate
                </a>
                <a
                  href={cert.downloadLink}
                  download
                  className="text-gray-600 hover:text-indigo-600 flex items-center"
                >
                  <FaDownload className="mr-2" />
                  Download
                </a>
              </div>
            </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={toggleExpansion}
              className="text-indigo-600 font-semibold hover:underline flex items-center"
            >
              {isExpanded ? (
                <>
                  Mostrar Menos <FaChevronUp className="ml-2" />
                </>
              ) : (
                <>
                  Mostrar Mais <FaChevronDown className="ml-2" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
