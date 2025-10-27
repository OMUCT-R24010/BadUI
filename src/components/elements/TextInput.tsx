import React from 'react';

interface TextInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  onKeyDown,
  placeholder,
  error,
  disabled = false,
}) => {
  return (
    <div className="mb-5">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
          error
            ? 'border-red-400 focus:ring-red-400 bg-red-50'
            : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500 bg-gray-50'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600 font-medium">{error}</p>
      )}
    </div>
  );
};
