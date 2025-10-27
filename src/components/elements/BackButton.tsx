import React from 'react';

interface BackButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
    >
      {children}
    </button>
  );
};
