import React from 'react';
import Header from 'components/layout/Header';
import Content from 'components/layout/Content';
import Footer from 'components/layout/Footer';

const LayoutApp = ({ children }) => (
  <div className="app-container">
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </div>
);

LayoutApp.prototype.propTypes = {
  children: React.PropTypes.shape.isRequired,
};

export default LayoutApp;
