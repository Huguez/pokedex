
import { StyleSheet, Text, View } from 'react-native';

function App() {
 
  return (
    <View style={styles.container}>
      <Text style={ styles.title }> Hello World!! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;
