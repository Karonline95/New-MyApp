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
      <NavigationContainer
        linking={linking}
        onReady={() => {
          console.log('Navigation ready');
        }}
        onStateChange={state => {
          console.log('NAV STATE:', JSON.stringify(state, null, 2));
        }}>
        <ApolloProvider client={client}>
          <RootStack />
        </ApolloProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
