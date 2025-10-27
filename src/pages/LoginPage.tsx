import React, { useState } from 'react';
import { TextInput } from '../components/elements/TextInput';
import { SubmitButton } from '../components/elements/SubmitButton';
import { ErrorText } from '../components/elements/ErrorText';
import { FormWrapper } from '../components/layouts/FormWrapper';
import { Header } from '../components/layouts/Header';

interface LoginPageProps {
  onNext: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNext }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleLogin = () => {
    // 常にエラーを表示（存在しないユーザー）
    setShowError(true);
  };

  return (
    <>
      <Header title="Login" />
      <FormWrapper>
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Login</h2>
        
        {showError && (
          <ErrorText>このユーザーは存在しません。アカウントを作成してください。</ErrorText>
        )}

        <TextInput
          label="Email or Username"
          type="text"
          value={email}
          onChange={setEmail}
          placeholder="Enter your email or username"
        />

        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Enter your password"
        />

        <div className="space-y-3">
          <SubmitButton onClick={handleLogin}>Login</SubmitButton>
          <button
            onClick={onNext}
            className="w-full text-center text-sm text-blue-600 hover:text-blue-800 underline transition-colors"
          >
            Make new account
          </button>
        </div>
      </FormWrapper>
    </>
  );
};
