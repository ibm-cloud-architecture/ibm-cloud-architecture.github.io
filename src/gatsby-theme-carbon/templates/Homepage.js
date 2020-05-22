import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/garage-to-go.jpg';

const FirstLeftText = () => <p>Open for Takeout Only</p>;

const FirstRightText = () => (
  <p>
    <font size="5">
    One stop shop for communications, 
    code and other deliverables produced by the IBM
    Garage Solution Engineering group. 
    </font>
  </p>
);

const SecondLeftText = () => <p>IBM Garage Solution Engineering</p>;

const SecondRightText = () => (
  <p>
    <font size="4">
    The IBM Garage and Solution Engineering team provides prescriptive 
guidance, reference solution architectures and best practices 
to help clients build highly scalable and reliable cloud 
applications. The assets on this site were produced in the 
course of helping our clients. They are provided, as is, in the 
hope they can help with your cloud implementation.
    
    <a
      className={calloutLink}
      href="https://www.ibm.com/garage/"
    >
      IBM Garage →
    </a>
    </font>
  </p>
);

const BannerText = () => <h1><b><center><font color="black">IBM Garage To Go</font></center></b></h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#030303"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
