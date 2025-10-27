import React from 'react';
import { SubmitButton } from '../components/elements/SubmitButton';
import { FormWrapper } from '../components/layouts/FormWrapper';
import { Header } from '../components/layouts/Header';
import type { SignUpFormData } from './SignUpStep1';

interface SignUpStepConfirmProps {
  formData: SignUpFormData;
  onNext: () => void;
  onBack: () => void;
}

export const SignUpStepConfirm: React.FC<SignUpStepConfirmProps> = ({
  formData,
  onNext,
  onBack,
}) => {
  return (
    <>
      <Header title="Confirm Information" />
      <FormWrapper>
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">入力内容確認</h2>

        <div className="space-y-4 mb-6">
          <div className="border-b pb-3">
            <p className="text-sm text-gray-600">Username</p>
            <p className="text-lg font-medium text-gray-900">{formData.username}</p>
          </div>
          <div className="border-b pb-3">
            <p className="text-sm text-gray-600">Email</p>
            <p className="text-lg font-medium text-gray-900">{formData.email}</p>
          </div>
          <div className="border-b pb-3">
            <p className="text-sm text-gray-600">Password</p>
            <p className="text-lg font-medium text-gray-900">{'*'.repeat(formData.password.length)}</p>
          </div>
        </div>

        <div className="space-y-3">
          <SubmitButton onClick={onNext}>OK</SubmitButton>
          <button
            onClick={onBack}
            className="w-full px-6 py-3 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            修正
          </button>
        </div>
      </FormWrapper>
    </>
  );
};
