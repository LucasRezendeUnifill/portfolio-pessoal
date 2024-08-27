"use client"
import React, { useState } from 'react';
import SubjectCard from '@/components/SubjectCard';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Subjects: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const subjects = [
    { subject: 'Gerência de Configuração e Controle de Versão', description: 'Ferramentas de Controle de Versão' },
    { subject: 'Gerência de Requisitos', description: 'Modelagem de Processo de Negócios' },
    { subject: 'Gerenciamento de Projetos', description: 'Gerência de Projetos com Trello' },
    { subject: 'Lógica de Programação e Algoritmos', description: 'Introdução a lógica de programação' },
    { subject: '@Gestao de Pessoas', description: 'Gestão de Pessoas e Principais Práticas' },
    { subject: 'Desenvolvimento de Aplicativos Móveis', description: '' },
    { subject: 'Projeto Interdisciplinar I', description: 'PII Aplicações móveis com MIT APP Inventor 2' },
    { subject: 'Gerência de Requisitos', description: 'Introdução a Engenharia de Software' },
    { subject: '@Gerência de Requisitos', description: 'Artefatos de Software' },
    { subject: 'Lógica de Programação e Algoritmos', description: 'Estruturas de decisão e repetição' },
    { subject: 'RUP - Rational Unified Process', description: '' },
    { subject: 'Algoritmos', description: 'Estruturas de Projeto Interdisciplinar I: PI II dados estáticas' },
    { subject: 'Processo e Desenvolvimento de Software', description: 'Gerência de Configuração e Processo e Desenvolvimento de Software' },
    { subject: 'Introdução ao Controle de Versão', description: 'Controle de Versão com Git' },
    { subject: '@Gerenciamento de Projetos', description: 'Fundamentos e Grupos de Processos para Gestão de Projetos' },
    { subject: 'Desenvolvimento de Aplicativos Móveis', description: 'Criação de API Rest básica com PHP' },
    { subject: '@Teoria Geral de Sistemas', description: 'Introdução à Computação' },
    { subject: 'Gerenciamento de Projetos', description: 'Abordagens de Projetos com Jira' },
    { subject: 'Lógica de Programação e Algoritmos', description: 'Sub-rotinas' },
    { subject: 'Arquitetura e Organização de Computadores', description: 'Organização de Sistemas de Computadores' },
    { subject: 'Linguagem de Programação Orientada a Objetos', description: 'Introdução a linguagem de programação' },
    { subject: 'Matemática Discreta', description: 'Lógica matemática' },
    { subject: 'Projeto Interdisciplinar II', description: '' },
    { subject: 'Paradigmas de Linguagens de Programação', description: 'Introdução a Paradigmas de Linguagem de Programação' },
    { subject: 'Arquitetura e Organização de Computadores', description: 'Nivel Lógico Digital e Arquitetura do conjunto de instruções' },
    { subject: 'Matemática Discreta', description: 'Quantificadores e sentenças abertas' },
    { subject: 'Desenvolvimento de Aplicativos Móveis', description: 'Criando um APP IONIC básico em memória' },
    { subject: 'Desenvolvimento de Aplicativos Móveis', description: 'Criando um APP IONIC offline com banco de dados armazenamento local' },
    { subject: 'Introdução a Banco de Dados', description: 'Introdução a Banco de Dados' },
    { subject: 'Matemática Discreta', description: 'Lógica Projeto Interdisciplinar II: PI' },
    { subject: 'Matemática Aplicada', description: '' },
    { subject: 'Introdução a Banco de Dados', description: 'Modelagem de Banco de Dados' },
    { subject: '@Teste de Software', description: 'Introdução a Teste de Software' },
    { subject: '@Teste de Software', description: 'Fundamentos de Teste de Software' },
    { subject: 'Elementos de Cálculo e Álgebra Linear', description: 'Tópicos de álgebra linear' },
    { subject: 'Linguagem de Programação Orientada a Objetos', description: 'Programação orientada a objetos' },
    { subject: 'Introdução a Banco de Dados', description: 'SQL Básico' },
    { subject: 'Teste de Software', description: 'Tipos e Fundamentos de Teste de Software' },
    { subject: 'Projeto Interdisciplinar III', description: 'PI V' },
    { subject: 'Análise e Projeto de Algoritmos', description: 'Ambiente de Desenvolvimento e Teste de Software' },
    { subject: 'Elementos de Cálculo e Álgebra Linear', description: 'Limites e Continuidade' },
    { subject: 'Análise e Projetos Orientado a Objetos', description: 'Introdução a UML com Caso de Uso' },
    { subject: 'Elementos de Cálculo e Álgebra Linear', description: 'Transformações lineares, Autovalor e Autovetor' },
    { subject: 'Algoritmos e Estrutura de Dados', description: 'Introdução a estrutura de dados' },
    { subject: 'Arquitetura de Software', description: 'Estilos arquiteturais' },
  ];

  const itemsToShow = isExpanded ? subjects.length : 8; // Mostra 8 itens inicialmente

  return (
    <section className="p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Matérias Cursadas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {subjects.slice(0, itemsToShow).map((subject, index) => (
          <SubjectCard key={index} subject={subject.subject} description={subject.description} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
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
    </section>
  );
};

export default Subjects;
