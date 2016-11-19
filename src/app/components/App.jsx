import React from 'react';

const App = ({ children }) => (
    children
);

App.prototype.propTypes = {
  children: React.PropTypes.shape.isRequired,
};

export default App;
