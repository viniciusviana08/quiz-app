import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

// Usando TypeScript para definir os "tipos" de props que esperamos receber
type ResultScreenProps = {
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void; // Esperamos receber uma função para o botão
};

export default function ResultScreen({ score, totalQuestions, onPlayAgain }: ResultScreenProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiRef = useRef<any>(null);

  useEffect(() => {
    if (score > 0) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [score]);

  return (
    <View style={styles.container}>
      {showConfetti && (
        <ConfettiCannon
          count={100}
          origin={{ x: -10, y: 0 }}
          fadeOut={true}
          autoStart={true}
          explosionSpeed={350}
          fallSpeed={2500}
        />
      )}
      <Text style={styles.title}>🏆 Fim de Jogo!</Text>
      <Text style={styles.scoreText}>
        Você acertou <Text style={styles.scoreHighlight}>{score}</Text> de <Text style={styles.scoreHighlight}>{totalQuestions}</Text> perguntas!
      </Text>
      <Text style={styles.corinthians}>Vai Corinthians!</Text>
      <TouchableOpacity style={styles.button} onPress={onPlayAgain} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Jogar Novamente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18181B', // fundo escuro moderno
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#F4F4F5',
    textShadowColor: '#B22222',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 8,
    letterSpacing: 1.5,
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 18,
    color: '#F4F4F5',
    fontWeight: '600',
    textAlign: 'center',
  },
  scoreHighlight: {
    color: '#B22222',
    fontWeight: 'bold',
    fontSize: 28,
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  corinthians: {
    fontSize: 30,
    color: '#B22222',
    fontWeight: 'bold',
    marginBottom: 40,
    letterSpacing: 2,
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  button: {
    backgroundColor: '#B22222',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 16,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#F4F4F5',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});