import React from 'react';

interface FormWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const FormWrapper: React.FC<FormWrapperProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className={`w-full max-w-md space-y-6 bg-white p-10 rounded-2xl shadow-2xl border border-gray-100 ${className}`}>
          {children}
        </div>
      </main>
    </div>
  );
};
