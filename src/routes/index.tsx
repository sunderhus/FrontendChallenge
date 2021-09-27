import { homePageFactory } from 'pages/factories/homePageFactory';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={homePageFactory} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
