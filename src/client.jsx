import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './app/components/Root';

require('./style/style.sass');

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./app/components/Root', () => {
    const NextApp = require('./app/components/Root').default; // eslint-disable-line global-require

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
