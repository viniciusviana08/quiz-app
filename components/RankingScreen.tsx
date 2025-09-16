import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type RankingScreenProps = {
  ranking: { name: string; score: number; total: number }[];
  onBack: () => void;
};

export default function RankingScreen({ ranking, onBack }: RankingScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking dos Fieis</Text>
      <ScrollView style={styles.list}>
        {ranking.length === 0 ? (
          <Text style={styles.empty}>Nenhum resultado ainda.</Text>
        ) : (
          ranking.map((item, idx) => (
            <View key={idx} style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.score}>
                {item.score} / {item.total}
              </Text>
            </View>
          ))
        )}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={onBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191A1D',
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 18,
    letterSpacing: 2,
    textShadowColor: '#B22222',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 10,
  },
  list: {
    width: '100%',
    marginBottom: 24,
  },
  item: {
    backgroundColor: '#232326',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#B22222',
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  score: {
    color: '#B22222',
    fontSize: 20,
    fontWeight: 'bold',
  },
  empty: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#B22222',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 14,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});