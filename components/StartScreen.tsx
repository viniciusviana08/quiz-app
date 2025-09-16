import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type StartScreenProps = {
  onStart: (name: string) => void;
  onRanking: () => void;
};

export default function StartScreen({ onStart, onRanking }: StartScreenProps) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/originals/38/03/b3/3803b31fafd8de3e140e6df509254438.png' }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Quiz do Corinthians</Text>
      <Text style={styles.subtitle}>Mostre que você é Fiel!</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity
        style={[styles.button, !name && styles.buttonDisabled]}
        onPress={() => onStart(name)}
        disabled={!name}
      >
        <Text style={styles.buttonText}>Iniciar Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rankingButton} onPress={onRanking}>
        <Text style={styles.rankingText}>Ver Ranking</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191A1D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    letterSpacing: 2,
    textShadowColor: '#B22222',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#B22222',
    marginBottom: 32,
    fontWeight: '600',
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#232326',
    color: '#fff',
    borderRadius: 12,
    padding: 16,
    fontSize: 18,
    width: '90%',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#B22222',
  },
  button: {
    backgroundColor: '#B22222',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 16,
    marginBottom: 18,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonDisabled: {
    backgroundColor: '#7a2323',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  rankingButton: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#232326',
    borderWidth: 1,
    borderColor: '#B22222',
  },
  rankingText: {
    color: '#B22222',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});