import React from 'react';
import Router from './routes';
import GlobalStyles from './styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};

export default App;
