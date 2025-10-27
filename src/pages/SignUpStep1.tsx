import React, { useState } from 'react';
import { TextInput } from '../components/elements/TextInput';
import { SubmitButton } from '../components/elements/SubmitButton';
import { FormWrapper } from '../components/layouts/FormWrapper';
import { Header } from '../components/layouts/Header';

export interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface SignUpStep1Props {
  formData: SignUpFormData;
  onUpdate: (data: SignUpFormData) => void;
  onNext: () => void;
}

export const SignUpStep1: React.FC<SignUpStep1Props> = ({
  formData,
  onUpdate,
  onNext,
}) => {
  const [errors, setErrors] = useState<Partial<Record<keyof SignUpFormData, string>>>({});

  // Enterキーを押すと"Enter"と入力される
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: keyof SignUpFormData) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onUpdate({ ...formData, [field]: formData[field] + 'Enter' });
    }
  };

  const validateEmail = (email: string): boolean => {
    return email.includes('@') && email.length > 3;
  };

  const validatePassword = (password: string): boolean => {
    if (password.length < 6) return false;
    
    // 半角英数字記号のみチェック
    const asciiOnly = /^[\x20-\x7E]+$/.test(password);
    if (!asciiOnly) return false;

    // 大文字、小文字、数字、記号をすべて含むかチェック
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(password);

    return hasUpperCase && hasLowerCase && hasNumber && hasSymbol;
  };

  const handleSubmit = () => {
    const newErrors: Partial<Record<keyof SignUpFormData, string>> = {};

    if (formData.username.length < 3) {
      newErrors.username = 'ユーザー名は3文字以上で入力してください';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'メールアドレスの形式が正しくありません（@を含めてください）';
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = 'パスワードは6文字以上で、大文字・小文字・数字・記号をすべて含む必要があります';
    }

    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = 'パスワードが一致しません';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onNext();
    }
  };

  return (
    <>
      <Header title="Sign Up - Step 1" />
      <FormWrapper>
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">基本情報入力</h2>

        <TextInput
          label="Username"
          value={formData.username}
          onChange={(value) => onUpdate({ ...formData, username: value })}
          onKeyDown={(e) => handleKeyDown(e, 'username')}
          placeholder="ユーザー名を入力"
          error={errors.username}
        />

        <TextInput
          label="Email"
          type="email"
          value={formData.email}
          onChange={(value) => onUpdate({ ...formData, email: value })}
          onKeyDown={(e) => handleKeyDown(e, 'email')}
          placeholder="メールアドレスを入力"
          error={errors.email}
        />

        <TextInput
          label="Password"
          type="password"
          value={formData.password}
          onChange={(value) => onUpdate({ ...formData, password: value })}
          onKeyDown={(e) => handleKeyDown(e, 'password')}
          placeholder="パスワードを入力"
          error={errors.password}
        />

        <TextInput
          label="Password Confirm"
          type="password"
          value={formData.passwordConfirm}
          onChange={(value) => onUpdate({ ...formData, passwordConfirm: value })}
          onKeyDown={(e) => handleKeyDown(e, 'passwordConfirm')}
          placeholder="パスワードを再入力"
          error={errors.passwordConfirm}
        />

        <div className="space-y-3">
          <SubmitButton onClick={handleSubmit}>次へ</SubmitButton>
        </div>
      </FormWrapper>
    </>
  );
};
