import React from 'react';
import PropTypes from 'prop-types';

export const TitleBook = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

TitleBook.propTypes = { title: PropTypes.string.isRequired};