import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'IBM Cloud',
    href: 'https://cloud.ibm.com/',
  },
  {
    title: 'IBM Garage',
    href: 'https://www.ibm.com/garage/',
  }
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
