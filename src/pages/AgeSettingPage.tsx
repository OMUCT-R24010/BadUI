import React, { useState } from 'react';
import { TextInput } from '../components/elements/TextInput';
import { SubmitButton } from '../components/elements/SubmitButton';
import { ErrorText } from '../components/elements/ErrorText';
import { FormWrapper } from '../components/layouts/FormWrapper';
import { Header } from '../components/layouts/Header';

interface AgeSettingPageProps {
  onNext: (age: number, birthDate: { month: number; day: number; year: number }) => void;
}

export const AgeSettingPage: React.FC<AgeSettingPageProps> = ({ onNext }) => {
  const [age, setAge] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState(2000);
  const [error, setError] = useState('');

  const calculateAge = (birthYear: number, birthMonth: number, birthDay: number): number => {
    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    return calculatedAge;
  };

  const handleSubmit = () => {
    const ageNum = parseInt(age);
    const monthNum = parseInt(month);
    const dayNum = parseInt(day);
    const yearNum = year;

    // 基本的なバリデーション
    if (isNaN(ageNum) || isNaN(monthNum) || isNaN(dayNum)) {
      setError('すべての項目を正しく入力してください');
      return;
    }

    if (monthNum < 1 || monthNum > 12) {
      setError('月は1〜12の範囲で入力してください');
      return;
    }

    if (dayNum < 1 || dayNum > 31) {
      setError('日は1〜31の範囲で入力してください');
      return;
    }

    // 今日の日付
    const today = new Date();
    const birthDate = new Date(yearNum, monthNum - 1, dayNum);

    // 1909年8月21日より前の日付チェック
    const minDate = new Date(1909, 7, 21); // 月は0始まり
    if (birthDate < minDate) {
      setError('生年月日は1909年8月21日以降である必要があります。最初からやり直してください。');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      return;
    }

    // 今日より後の日付チェック
    if (birthDate > today) {
      setError('生年月日は今日より前である必要があります。最初からやり直してください。');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      return;
    }

    // 年齢と生年月日の整合性チェック
    const calculatedAge = calculateAge(yearNum, monthNum, dayNum);
    if (calculatedAge !== ageNum) {
      setError(
        `年齢と生年月日が一致しません。（生年月日から計算すると${calculatedAge}歳です）最初からやり直してください。`
      );
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      return;
    }

    onNext(ageNum, { month: monthNum, day: dayNum, year: yearNum });
  };

  return (
    <>
      <Header title="Age Setting" />
      <FormWrapper>
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">年齢設定</h2>

        {error && <ErrorText>{error}</ErrorText>}

        <TextInput
          label="年齢"
          type="number"
          value={age}
          onChange={setAge}
          placeholder="例: 25"
        />

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">生年月日</h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <TextInput
              label="月 (MM)"
              type="number"
              value={month}
              onChange={setMonth}
              placeholder="01-12"
            />

            <TextInput
              label="日 (DD)"
              type="number"
              value={day}
              onChange={setDay}
              placeholder="01-31"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              年 (YY) - スライダーで選択
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min={-6}
                max={10000}
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center text-lg font-bold text-gray-900">
                {year < 0 ? `B.C. ${Math.abs(year)}` : `A.D. ${year}`}
              </div>
              <div className="text-xs text-gray-500 text-center">
                (B.C.6 〜 A.D.10000)
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-gray-700">
          <p><strong>注意事項:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>年齢と生年月日が一致している必要があります</li>
            <li>生年月日は1909年8月21日以降である必要があります</li>
            <li>生年月日は今日より前である必要があります</li>
            <li>条件を満たさない場合、最初からやり直しになります</li>
          </ul>
        </div>

        <div className="space-y-3">
          <SubmitButton onClick={handleSubmit}>次へ</SubmitButton>
        </div>
      </FormWrapper>
    </>
  );
};
