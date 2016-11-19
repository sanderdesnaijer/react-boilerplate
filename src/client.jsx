import React from 'react';
import ReactDom from 'react-dom';
import Root from './app/components/Root';

require('./style/style.sass');

ReactDom.render(
  <Root />,
  document.getElementById('app')
);
