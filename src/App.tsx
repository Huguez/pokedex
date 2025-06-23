import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { WrapSafe } from './components';
import { StackNavigation } from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider  } from '@tanstack/react-query';


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={ queryClient }>
      <PaperProvider>
        <SafeAreaProvider>
          <WrapSafe>
            <StackNavigation />
          </WrapSafe>
        </SafeAreaProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}

export default App;
