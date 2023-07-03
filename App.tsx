import React from 'react';
import MainAppNav from './src/navigation';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //

const App = () => {
  return (
    <Provider store={store}>
      <MainAppNav />
    </Provider>
  );
};

export default App;
