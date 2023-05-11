import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ title, children }) => (
  <section>
    <h3>{title}</h3>
    {children}
  </section>
);

Title.propTypes = { title: PropTypes.string.isRequired, };