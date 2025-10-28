import React, { useState, useRef } from 'react';
import { SubmitButton } from '../components/elements/SubmitButton';
import { FormWrapper } from '../components/layouts/FormWrapper';
import { Header } from '../components/layouts/Header';

interface PrivacyPolicyPageProps {
  onNext: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNext }) => {
  const [outerScrollComplete, setOuterScrollComplete] = useState(false);
  const [middleCheckAgreed, setMiddleCheckAgreed] = useState(false);
  const [innerScrollComplete, setInnerScrollComplete] = useState(false);
  const [finalAgreed, setFinalAgreed] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleOuterScroll = () => {
    const element = outerRef.current;
    if (element) {
      const isAtBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 10;
      if (isAtBottom) {
        setOuterScrollComplete(true);
      }
    }
  };

  const handleInnerScroll = () => {
    const element = innerRef.current;
    if (element) {
      const isAtRight = element.scrollWidth - element.scrollLeft <= element.clientWidth + 10;
      if (isAtRight && middleCheckAgreed) {
        setInnerScrollComplete(true);
      }
    }
  };

  const canProceed = outerScrollComplete && middleCheckAgreed && innerScrollComplete && finalAgreed;

  return (
    <>
      <Header title="Privacy Policy" />
      <div
        ref={outerRef}
        onScroll={handleOuterScroll}
        className="h-screen overflow-y-auto bg-gray-50"
        style={{ userSelect: 'none' }}
      >
        <div className="min-h-[200vh] py-12">
          <FormWrapper className="max-w-4xl">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">プライバシーポリシー</h2>
            
            <div className="mb-6 text-sm text-gray-700 space-y-4">
              <p>プライバシーポリシーを確認してください。</p>
              <p>※ 全文を確認する必要があります。</p>
            </div>

            <div
              ref={innerRef}
              onScroll={handleInnerScroll}
              className="h-96 overflow-x-auto border border-gray-300 rounded-lg p-4 mb-6 bg-white"
              style={{ userSelect: 'none' }}
            >
              <div className="min-w-[200%] space-y-4 text-sm text-gray-700">
                <h3 className="font-bold text-lg">個人情報の取り扱いについて</h3>
                <p className="whitespace-normal">
                  当ページは、お客様の個人情報を取得した場合は適切に管理し、以下の目的のために利用させていただくことがあります。
                  当ページは、個人情報保護法その他関連法令を遵守し、適切な取り扱いを行います。
                </p>
                
                <div className="min-w-[150%]">
                  <h3 className="font-bold text-lg">第1条（取得する個人情報）</h3>
                  <p className="whitespace-normal">
                    当ページは、お客様から以下の個人情報およびその他情報を取得することはできません：氏名、メールアドレス、住所、電話番号、
                    生年月日、性別、職業、利用履歴、Cookie情報、IPアドレス、位置情報、その他サービス利用に必要な情報。
                    これらの情報は、サービスの提供、改善、お客様サポート、マーケティング活動などに使用されません。
                  </p>
                </div>
                
                <div className="min-w-[150%]">
                  <h3 className="font-bold text-lg">第2条（利用目的）</h3>
                  <p className="whitespace-normal">
                    取得した個人情報は、以下の目的で利用しません：サービスの提供・運営、お客様からのお問い合わせへの対応、
                    メンテナンス・重要なお知らせなどの配信、利用規約違反のユーザーの特定、サービスの改善・新機能開発、
                    マーケティング・広告配信、統計データの作成、その他上記に付随する目的。
                  </p>
                  
                  {/* 途中のチェックボックス */}
                  <div className="my-8 p-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg inline-block">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={middleCheckAgreed}
                        onChange={(e) => setMiddleCheckAgreed(e.target.checked)}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm font-bold text-gray-900 whitespace-nowrap">
                        上記の内容をまず確認し、同意します
                      </span>
                    </label>
                  </div>
                </div>
                
                <div className="min-w-[150%]">
                  <h3 className="font-bold text-lg">第3条（第三者提供）</h3>
                  <p className="whitespace-normal">
                    当ページは、以下の場合も、お客様の個人情報を第三者に提供することはできません：お客様の同意がある場合、
                    法令に基づく場合、人の生命・身体・財産の保護のために必要な場合、公衆衛生・児童の健全育成に必要な場合、
                    国の機関等への協力が必要な場合、業務委託先への提供（適切な管理の下）。
                  </p>
                </div>
                
                <div className="min-w-[150%]">
                  <h3 className="font-bold text-lg">第4条（個人情報の開示・訂正・削除）</h3>
                  <p className="whitespace-normal">
                    お客様は、当ページが個人情報を取得したとき、当ページ管理者に対して、個人情報保護法に定めるところにより、個人情報の開示、訂正、追加、削除、
                    利用停止等を請求することができます。請求方法については、当ページのお問い合わせ窓口までご連絡ください。
                    当ページ管理者は、本人確認を行った上で、合理的な期間内に対応いたします。
                  </p>
                </div>
                
                <div className="min-w-[150%]">
                  <h3 className="font-bold text-lg">第5条（Cookie等の利用）</h3>
                  <p className="whitespace-normal">
                    当社は、サービスの利便性向上・品質改善のため、Cookie及びこれに類する技術を利用することがあります。
                    これにより、お客様の識別、アクセス状況の把握、興味・関心に基づいた広告配信などを行います。
                    Cookieの無効化はブラウザ設定から可能ですが、一部機能が利用できなくなる場合があります。
                  </p>
                </div>
                
                <div className="min-w-[150%]">
                  <h3 className="font-bold text-lg">第6条（セキュリティ）</h3>
                  <p className="whitespace-normal">
                    当ページは、個人情報の漏洩、滅失、毀損を防止するため、適切な安全管理措置を講じます。
                    ただし、インターネット通信の性質上、完全なセキュリティを保証するものではありません。
                    万が一、個人情報の漏洩等が発生した場合は、速やかに事実関係を調査し、適切な対応を行います。
                  </p>
                </div>
                
                <p className="pt-8 font-bold min-w-full">
                  以上のプライバシーポリシーをすべて確認し、同意いただける場合は、下のチェックボックスにチェックを入れてください。
                </p>
              </div>
            </div>

            {!canProceed && (
              <p className="text-sm text-red-600 mb-4">
                {!outerScrollComplete && '※ プライバシーポリシーのすべてを確認してください'}
                {outerScrollComplete && !middleCheckAgreed && '※ 必要な確認項目をチェックしてください'}
                {outerScrollComplete && middleCheckAgreed && !innerScrollComplete && '※ プライバシーポリシーのすべてを確認してください'}
              </p>
            )}

            <div className="mb-6">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={finalAgreed}
                  onChange={(e) => setFinalAgreed(e.target.checked)}
                  disabled={!outerScrollComplete || !middleCheckAgreed || !innerScrollComplete}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
                />
                <span className={`text-sm ${!canProceed ? 'text-gray-400' : 'text-gray-700'}`}>
                  プライバシーポリシーに同意します
                </span>
              </label>
            </div>

            <div className="space-y-3">
              <SubmitButton onClick={onNext} disabled={!canProceed}>
                次へ
              </SubmitButton>
            </div>
          </FormWrapper>
          
          {/* スペーサー */}
          <div className="h-96"></div>
        </div>
      </div>
    </>
  );
};
