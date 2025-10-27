import { useState } from 'react';
import './App.css';
import { InitialPage } from './pages/InitialPage';
import { LoginPage } from './pages/LoginPage';
import { SignUpStep1 } from './pages/SignUpStep1';
import type { SignUpFormData } from './pages/SignUpStep1';
import { SignUpStepConfirm } from './pages/SignUpStepConfirm';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { PasswordSettingPage } from './pages/PasswordSettingPage';
import { AgeSettingPage } from './pages/AgeSettingPage';
import { SignUpComplete } from './pages/SignUpComplete';
import { Footer } from './components/layouts/Footer';

type Step =
  | 'initial'
  | 'login'
  | 'signup-step1'
  | 'signup-confirm'
  | 'terms'
  | 'privacy'
  | 'password'
  | 'age'
  | 'complete';

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('initial');
  const [formData, setFormData] = useState<SignUpFormData>({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [age, setAge] = useState<number>(0);
  const [birthDate, setBirthDate] = useState<{ month: number; day: number; year: number }>({
    month: 1,
    day: 1,
    year: 2000,
  });

  const renderStep = () => {
    switch (currentStep) {
      case 'initial':
        return <InitialPage onNext={() => setCurrentStep('login')} />;

      case 'login':
        return (
          <LoginPage
            onNext={() => setCurrentStep('signup-step1')}
          />
        );

      case 'signup-step1':
        return (
          <SignUpStep1
            formData={formData}
            onUpdate={setFormData}
            onNext={() => setCurrentStep('signup-confirm')}
          />
        );

      case 'signup-confirm':
        return (
          <SignUpStepConfirm
            formData={formData}
            onNext={() => setCurrentStep('terms')}
            onBack={() => setCurrentStep('signup-step1')}
          />
        );

      case 'terms':
        return (
          <TermsOfServicePage
            onNext={() => setCurrentStep('privacy')}
          />
        );

      case 'privacy':
        return (
          <PrivacyPolicyPage
            onNext={() => setCurrentStep('password')}
          />
        );

      case 'password':
        return (
          <PasswordSettingPage
            formData={formData}
            onUpdate={setFormData}
            onNext={() => setCurrentStep('age')}
          />
        );

      case 'age':
        return (
          <AgeSettingPage
            onNext={(newAge, newBirthDate) => {
              setAge(newAge);
              setBirthDate(newBirthDate);
              setCurrentStep('complete');
            }}
          />
        );

      case 'complete':
        return <SignUpComplete formData={formData} age={age} birthDate={birthDate} />;

      default:
        return <InitialPage onNext={() => setCurrentStep('login')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">{renderStep()}</div>
      <Footer />
    </div>
  );
}

export default App;
