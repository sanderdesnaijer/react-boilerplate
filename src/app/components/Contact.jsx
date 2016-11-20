import React, { PropTypes } from 'react';
import Layout from 'components/layout/Default';

const Contact = ({ children }) => (
  <Layout>
    contact component
    {children}
  </Layout>
);

Contact.prototype.propTypes = {
  children: PropTypes.shape,
};

export default Contact;
