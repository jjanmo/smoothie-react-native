import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Counter from './src/Counter';

function App() {
  return (
    <SafeView>
      <Counter />
    </SafeView>
  );
}

export default App;

const SafeView = styled(SafeAreaView)`
  flex: 1;
`;
