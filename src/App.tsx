import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { WrapSafe } from './components';
import { StackNavigation } from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

function App() {
 
  return (
    <SafeAreaProvider>
      <StatusBar
          backgroundColor="#61dafb"
          barStyle={ 'dark-content' }
      />
      <WrapSafe>
        <StackNavigation />
      </WrapSafe>
    </SafeAreaProvider>
  );
}

export default App;
