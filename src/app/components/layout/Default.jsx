import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

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
