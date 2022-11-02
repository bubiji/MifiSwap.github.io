import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Advantages,
  // Application,
  // Community,
  // Events,
  Hero,
  // Locations,
  // MapHero,
  // Reviews,
  Spaces,
  // Contact,
} from './components';

const Coworking = () => {
  const theme = useTheme();
  return (
    <Main>
      <Hero />
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Advantages />
        </Container>
      </Box>
      <Container>
        <Spaces />
      </Container>
    </Main>
  );
};

export default Coworking;
