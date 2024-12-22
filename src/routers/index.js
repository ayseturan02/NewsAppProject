import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './Root';
import '../../firebaseConfig';
const App = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default App;
