import React, { useState } from 'react';
import { TextInput } from '../components/elements/TextInput';
import { SubmitButton } from '../components/elements/SubmitButton';
import { ErrorText } from '../components/elements/ErrorText';
import { FormWrapper } from '../components/layouts/FormWrapper';
import { Header } from '../components/layouts/Header';
import type { SignUpFormData } from './SignUpStep1';

interface PasswordSettingPageProps {
  formData: SignUpFormData;
  onUpdate: (data: SignUpFormData) => void;
  onNext: () => void;
}

export const PasswordSettingPage: React.FC<PasswordSettingPageProps> = ({
  formData,
  onUpdate,
  onNext,
}) => {
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const getRestrictedChars = (email: string): Set<string> => {
    const chars = new Set<string>();
    for (const char of email) {
      chars.add(char.toLowerCase());
    }
    return chars;
  };

  const validatePassword = (password: string): string | null => {
    if (password.length < 6) {
      return 'パスワードは6文字以上で入力してください';
    }

    // 半角英数字記号のみ
    const asciiOnly = /^[\x20-\x7E]+$/.test(password);
    if (!asciiOnly) {
      return 'パスワードは半角英数字記号のみで入力してください';
    }

    // 大文字、小文字、数字、記号をすべて含む
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(password);

    if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSymbol) {
      return 'パスワードは大文字・小文字・数字・記号をすべて含む必要があります';
    }

    // メールアドレスと同じ文字をチェック
    const restrictedChars = getRestrictedChars(formData.email);
    for (const char of password.toLowerCase()) {
      if (restrictedChars.has(char)) {
        return `メールアドレスに含まれる文字（${Array.from(restrictedChars).join(', ')}）は使用できません`;
      }
    }

    return null;
  };

  const handleSubmit = () => {
    const validationError = validatePassword(newPassword);
    if (validationError) {
      setError(validationError);
      return;
    }

    if (newPassword !== newPasswordConfirm) {
      setError('パスワードが一致しません');
      return;
    }

    onUpdate({
      ...formData,
      password: newPassword,
      passwordConfirm: newPasswordConfirm,
    });
    onNext();
  };

  const restrictedChars = getRestrictedChars(formData.email);

  return (
    <>
      <Header title="Password Setting" />
      <FormWrapper>
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">パスワード設定</h2>

        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>注意:</strong> メールアドレス（{formData.email}）に含まれる以下の文字は使用できません：
          </p>
          <p className="text-sm font-mono text-red-600 mt-2">
            {Array.from(restrictedChars).join(', ')}
          </p>
        </div>

        {error && <ErrorText>{error}</ErrorText>}

        <TextInput
          label="新しいパスワード"
          type="password"
          value={newPassword}
          onChange={setNewPassword}
          placeholder="パスワードを入力"
        />

        <TextInput
          label="パスワード確認"
          type="password"
          value={newPasswordConfirm}
          onChange={setNewPasswordConfirm}
          placeholder="パスワードを再入力"
        />

        <div className="mb-6 text-xs text-gray-600 space-y-1">
          <p>• 6文字以上</p>
          <p>• 大文字・小文字・数字・記号をすべて含む</p>
          <p>• メールアドレスと同じ文字は使用不可</p>
        </div>

        <div className="space-y-3">
          <SubmitButton onClick={handleSubmit}>次へ</SubmitButton>
        </div>
      </FormWrapper>
    </>
  );
};
