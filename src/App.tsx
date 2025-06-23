import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { WrapSafe } from './components';
import { StackNavigation } from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';

function App() {
 
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <WrapSafe>
          <StackNavigation />
        </WrapSafe>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
