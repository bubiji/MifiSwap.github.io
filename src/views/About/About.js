import React from 'react';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Story,
  Features,
  // WhoWeAre,
} from './components';

const About = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Container>
        <Story />
      </Container>
      <Container>
        <Features />
      </Container>
    </Main>
  );
};

export default About;
