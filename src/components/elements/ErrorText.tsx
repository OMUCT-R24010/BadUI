import React from 'react';

interface ErrorTextProps {
  children: React.ReactNode;
}

export const ErrorText: React.FC<ErrorTextProps> = ({ children }) => {
  return (
    <div className="p-4 mb-6 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 rounded-lg shadow-sm">
      <p className="text-sm text-red-700 font-medium flex items-center">
        <i className="bi bi-x-circle-fill text-xl text-red-600 mr-2"></i>
        {children}
      </p>
    </div>
  );
};
