import React from 'react';

const Content = ({ children }) => (
  <main role="main" className="main-content">
    {children}
  </main>
);

Content.prototype.propTypes = {
  children: React.PropTypes.shape,
};

export default Content;
