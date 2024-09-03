// VideoSection.jsx

import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

export const Video = () => {
  const videos = [
    {
      title: "Video 1",
      description: "Vídeo horta solidária",
      thumbnail: "/path-to-thumbnail1.jpg",
      link: "https://www.example.com/video1",
    },
    // Add more videos as needed
  ];

  return (
    <section className="py-12 bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meus vídeos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
                height={200}
                width={400}
              />
              <div className="p-6 w-full flex justify-center flex-col items-center">
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-gray-400 mb-4">{video.description}</p>
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black hover:text-indigo-800 rounded-full bg-white p-2"
                >
                  <FaPlay className="mr-2" />
                  Assistir video
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};