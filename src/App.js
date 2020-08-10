import React from 'react';
import './scss/app.scss';
import { StateProvider } from './contexts/GlobalState';
import AppShell from './components/AppShell';

const App = () => (
  <StateProvider>
    <AppShell />
  </StateProvider>
);

export default App;

