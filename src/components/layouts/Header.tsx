import React from 'react';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 shadow-lg">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center tracking-tight">{title}</h1>
      </div>
    </header>
  );
};
