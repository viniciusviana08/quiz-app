import { useState } from 'react';
import QuizScreen from '../components/QuizScreen';
import RankingScreen from '../components/RankingScreen';
import ResultScreen from '../components/ResultScreen';
import StartScreen from '../components/StartScreen';
import questions from '../questions.json';

type RankingItem = { name: string; score: number; total: number };

export default function HomePage() {
  const [step, setStep] = useState<'start' | 'quiz' | 'result' | 'ranking'>('start');
  const [name, setName] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [ranking, setRanking] = useState<RankingItem[]>([]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleStart = (userName: string) => {
    setName(userName);
    setStep('quiz');
  };

  const handleOptionPress = (option: string) => {
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(option);
    setIsOptionsDisabled(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsOptionsDisabled(false);
    } else {
      setRanking([
        ...ranking,
        {
          name,
          score,
          total: questions.length,
        },
      ]);
      setStep('result');
    }
  };

  const handlePlayAgain = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsOptionsDisabled(false);
    setScore(0);
    setStep('start');
  };

  const handleRanking = () => setStep('ranking');
  const handleBackFromRanking = () => setStep('start');

  if (step === 'start') {
    return <StartScreen onStart={handleStart} onRanking={handleRanking} />;
  }
  if (step === 'quiz') {
    return (
      <QuizScreen
        currentQuestion={currentQuestion}
        selectedOption={selectedOption}
        isOptionsDisabled={isOptionsDisabled}
        onOptionPress={handleOptionPress}
        onNextQuestion={handleNextQuestion}
      />
    );
  }
  if (step === 'result') {
    return (
      <ResultScreen
        score={score}
        totalQuestions={questions.length}
        onPlayAgain={handlePlayAgain}
      />
    );
  }
  if (step === 'ranking') {
    return <RankingScreen ranking={ranking} onBack={handleBackFromRanking} />;
  }
  return null;
}