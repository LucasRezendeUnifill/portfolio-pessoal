import { FaFilePowerpoint } from 'react-icons/fa';

export const Presentation = () => {
  const presentations = [
    {
      title: 'Apresentação horta solidária',
      description: 'Relatório mensal de evolução de projeto',
      link: 'https://www.canva.com/design/DAGMik__0yk/E6-VPG5g4PZAfktbJsFuZQ/edit?utm_content=DAGMik__0yk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Minhas Apresentações</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {presentations.map((presentation, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <FaFilePowerpoint className="text-red-600 text-5xl" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2 text-center">
                {presentation.title}
              </h3>
              <p className="text-black text-center mb-4">{presentation.description}</p>
              <div className="flex justify-center">
                <a
                  href={presentation.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-semibold hover:underline flex items-center"
                >
                  Ver Apresentação
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
