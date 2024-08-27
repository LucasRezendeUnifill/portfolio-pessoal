import React from 'react';

interface SubjectCardProps {
  subject: string;
  description: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{subject}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default SubjectCard;
