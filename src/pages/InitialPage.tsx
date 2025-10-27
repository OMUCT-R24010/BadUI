import React from 'react';
import { SubmitButton } from '../components/elements/SubmitButton';
import { FormWrapper } from '../components/layouts/FormWrapper';
import { Header } from '../components/layouts/Header';

interface InitialPageProps {
  onNext: () => void;
}

export const InitialPage: React.FC<InitialPageProps> = ({ onNext }) => {
  return (
    <>
      <Header title="Welcome" />
      <FormWrapper>
        <div className="text-center space-y-6">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
              <i className="bi bi-person-fill text-3xl text-white"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to BadUI</h2>
            <p className="text-sm text-gray-600">アカウントにログインしてください</p>
          </div>
          <SubmitButton onClick={onNext}>Login</SubmitButton>
        </div>
      </FormWrapper>
    </>
  );
};
