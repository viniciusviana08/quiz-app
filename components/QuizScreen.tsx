// components/QuizScreen.tsx

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Definimos o formato de um objeto de pergunta para reutilizar o tipo
type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

// Definimos o formato exato das props que o componente espera
type QuizScreenProps = {
  currentQuestion: Question;
  selectedOption: string | null;
  isOptionsDisabled: boolean;
  onOptionPress: (option: string) => void;
  onNextQuestion: () => void;
};

// Aplicamos a tipagem aqui na assinatura da função
export default function QuizScreen({
  currentQuestion,
  selectedOption,
  isOptionsDisabled,
  onOptionPress,
  onNextQuestion,
}: QuizScreenProps) {

  const getOptionStyle = (option: string) => {
    if (selectedOption) {
      const isCorrect = option === currentQuestion.correctAnswer;
      if (isCorrect) {
        return styles.correctOption;
      }
      if (option === selectedOption && !isCorrect) {
        return styles.incorrectOption;
      }
    }
    return {};
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quiz do Corinthians</Text>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </View>
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.option, getOptionStyle(option)]}
            onPress={() => onOptionPress(option)}
            disabled={isOptionsDisabled}
            activeOpacity={0.8}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {selectedOption && (
        <TouchableOpacity style={styles.nextButton} onPress={onNextQuestion}>
          <Text style={styles.nextButtonText}>Próxima Pergunta</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

// Os estilos foram atualizados para refletir as mudanças sugeridas
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191A1D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
    letterSpacing: 2,
    textShadowColor: '#B22222',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 10,
  },
  questionContainer: {
    backgroundColor: '#232326',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    width: '95%',
    shadowColor: '#B22222',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B22222',
  },
  questionText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 0.5,
    lineHeight: 32,
  },
  optionsContainer: {
    width: '100%',
    gap: 16,
    alignItems: 'center',
  },
  option: {
    backgroundColor: '#fff',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 14,
    width: '95%',
    alignItems: 'center',
    marginBottom: 0,
    borderWidth: 2,
    borderColor: '#B22222',
    shadowColor: '#B22222',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,

  },
  optionText: {
    fontSize: 18,
    color: '#191A1D',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  nextButton: {
    backgroundColor: '#B22222',
    padding: 16,
    borderRadius: 12,
    marginTop: 32,
    width: '95%',
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  correctOption: {
    backgroundColor: '#B22222',
    borderColor: '#fff',
    borderWidth: 2,
  },
  incorrectOption: {
    backgroundColor: '#232326',
    borderColor: '#B22222',
    borderWidth: 2,
  },
});