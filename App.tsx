if (__DEV__) {
  import('./ReactotronConfig');
}

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/RootStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/apollo';
import {linking} from './src/navigation/Deeplinks';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        <ApolloProvider client={client}>
          <RootStack />
        </ApolloProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
