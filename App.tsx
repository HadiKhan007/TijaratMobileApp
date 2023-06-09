import React from 'react';
import MainAppNav from './src/navigation';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //

const App = () => {
  return <MainAppNav />;
};

export default App;
