import React, { useState } from 'react';
import { SubmitButton } from '../components/elements/SubmitButton';
import { TextInput } from '../components/elements/TextInput';
import { ErrorText } from '../components/elements/ErrorText';
import { FormWrapper } from '../components/layouts/FormWrapper';
import { Header } from '../components/layouts/Header';

interface TermsOfServicePageProps {
  onNext: () => void;
}

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onNext }) => {
  const [agreementText, setAgreementText] = useState('');
  const [error, setError] = useState('');

  const correctAnswer = 'I agree to these terms of service.';

  const handleSubmit = () => {
    if (agreementText === correctAnswer) {
      onNext();
    } else {
      setError('入力内容が正しくありません。利用規約をよく読んで、正しく入力してください。');
    }
  };

  return (
    <>
      <Header title="Terms of Service" />
      <FormWrapper className="max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">利用規約</h2>
        
        <div className="mb-6 max-h-96 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-gray-50">
          <div className="space-y-4 text-sm text-gray-700">
            <h3 className="font-bold text-lg">第1条（目的）</h3>
            <p>
              本利用規約は、当ページが提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。
              登録ユーザーの皆さま（以下「ユーザー」といいます）には、本利用規約に従って、本サービスをご利用いただきます。
            </p>
            
            <h3 className="font-bold text-lg">第2条（利用登録）</h3>
            <p>
              Registration will be completed when an applicant applies for user registration using the method specified by our company and our company approves the application.
If our company determines that the applicant has any of the following reasons, we may not approve the user registration application,
and we shall not be obligated to disclose the reasons for this.
            </p>
            
            <h3 className="font-bold text-lg">第3条（ユーザーIDおよびパスワードの管理）</h3>
            <p>
              ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを管理するものとします。
              ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与することができます。
            </p>
            
            <h3 className="font-bold text-lg">第4条（禁止事項）</h3>
            <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
            </ul>
            
              <p className="font-bold text-center text-gray-900">
                If you have confirmed and agreed to the above and the following, please enter the following: I agree to these terms of service.
              </p>
            
            <h3 className="font-bold text-lg">第5条（本サービスの提供の停止等）</h3>
            <p>
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>ユーザーが法令または公序良俗に違反する行為を行った場合</li>
              <li>ユーザーが必要な情報の入力を正しく行わなかった場合</li>
              <li>ユーザーがページを再読み込みした場合</li>
            </ul>
            
            <h3 className="font-bold text-lg">第6条（著作権）</h3>
            <p>
              ユーザーは、自ら著作権等の必要な知的財産権を有するか、または必要な権利者の許諾を得た文章、画像や映像等の情報のみ、本サービスを利用し、投稿または編集することができるものとします。
            </p>
            
            <h3 className="font-bold text-lg">第7条（利用制限および登録抹消）</h3>
            <p>
              当社は、以下の場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
            </p>
          </div>
        </div>

        {error && <ErrorText>{error}</ErrorText>}

        <TextInput
          label="同意確認"
          value={agreementText}
          onChange={(value) => {
            setAgreementText(value);
            setError('');
          }}
          placeholder="同意する文を入力"
        />

        <div className="space-y-3">
          <SubmitButton onClick={handleSubmit}>
            次へ
          </SubmitButton>
        </div>
      </FormWrapper>
    </>
  );
};
