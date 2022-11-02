import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  // GetStarted,
  //Features,
  // QuickStart,
  Services,
  // Benefits,
  Hero,
  // PromoNumbers,
  //Team
} from './components';

const IndexView = () => {
  const theme = useTheme();
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Hero />
        {/* <Team /> */}
        <Container>
          <Services />
        </Container>
        {/* <Box
          sx={{
            backgroundImage: `linear-gradient(to bottom, ${alpha(
              theme.palette.background.paper,
              0,
            )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
            backgroundRepeat: 'repeat-x',
            position: 'relative',
          }}
        >
          <Container>
            <PromoNumbers />
          </Container>
        </Box> */}
      </Main>
    </Box>
  );
};

export default IndexView;
