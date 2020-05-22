import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = props => (
  <Header {...props}>
    IBM&nbsp;<span>Garage To Go</span>
  </Header>
);

export default CustomHeader;
