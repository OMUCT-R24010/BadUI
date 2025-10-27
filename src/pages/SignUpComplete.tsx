import React from 'react';
import { FormWrapper } from '../components/layouts/FormWrapper';
import { Header } from '../components/layouts/Header';
import type { SignUpFormData } from './SignUpStep1';

interface SignUpCompleteProps {
  formData: SignUpFormData;
  age: number;
  birthDate: { month: number; day: number; year: number };
}

export const SignUpComplete: React.FC<SignUpCompleteProps> = ({ formData, age, birthDate }) => {
  return (
    <>
      <Header title="Registration Complete" />
      <FormWrapper>
        <div className="text-center mb-8">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <i className="bi bi-check-circle-fill text-5xl text-white"></i>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">登録が完了しました!</h2>
          <p className="text-gray-600">おめでとうございます。アカウントの作成が完了しました。</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">登録情報</h3>
          
          <div className="border-b pb-3">
            <p className="text-sm text-gray-600">ユーザー名</p>
            <p className="text-lg font-medium text-gray-900">{formData.username}</p>
          </div>
          
          <div className="border-b pb-3">
            <p className="text-sm text-gray-600">メールアドレス</p>
            <p className="text-lg font-medium text-gray-900">{formData.email}</p>
          </div>
          
          <div className="border-b pb-3">
            <p className="text-sm text-gray-600">年齢</p>
            <p className="text-lg font-medium text-gray-900">{age}歳</p>
          </div>
          
          <div className="border-b pb-3">
            <p className="text-sm text-gray-600">生年月日</p>
            <p className="text-lg font-medium text-gray-900">
              {birthDate.year < 0 ? `B.C. ${Math.abs(birthDate.year)}` : `A.D. ${birthDate.year}`}年{' '}
              {birthDate.month}月 {birthDate.day}日
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-800 text-center">
            🎉 すべての困難なステップを乗り越えました！🎉
          </p>
        </div>
      </FormWrapper>
    </>
  );
};
