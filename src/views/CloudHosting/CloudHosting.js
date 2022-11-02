import React from 'react';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  // About,
  // Articles,
  Features,
  Hero,
  Head,
  Work,
  //  HowItWorks,
  //  MobileApp,
  //  Partners,
  //  Pricings,
  //  Reviews,
  //  Storage,
  //  Story,
  //  Support,
} from './components';

const CloudHosting = () => {
  const theme = useTheme();

  return (
    <Main>
      <Box
        position={'relative'}
        sx={{
          backgroundColor:
            theme.palette.mode === 'light'
              ? theme.palette.primary.main
              : theme.palette.alternate.main,
        }}
      >
        <Container>
          <Hero />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: '35%',
          }}
        >
          <polygon
            fill={theme.palette.background.paper}
            points="0,273 1921,273 1921,0 "
          />
        </Box>
      </Box>
      <Container
        sx={{
          position: 'relative',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '20%',
            zIndex: 1,
            top: 0,
            left: 0,
            height: '100%',
            backgroundSize: '18px 18px',
            backgroundImage: `radial-gradient(${alpha(
              theme.palette.primary.dark,
              0.4,
            )} 20%, transparent 20%)`,
            opacity: 0.2,
          },
        }}
      >
        <Box position={'relative'} zIndex={2}>
          <Head />
        </Box>
      </Container>
      <Box paddingTop={{ md: 8 }}>
        <Box bgcolor={'alternate.main'}>
          <Container>
            <Work />
          </Container>
        </Box>
      </Box>
      <Container>
        <Features />
      </Container>
    </Main>
  );
};

export default CloudHosting;
