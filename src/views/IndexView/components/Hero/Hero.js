import React from 'react';
import Typed from 'react-typed';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

import Container from 'components/Container';
import web1 from '../../../../svg/web1.png';
import web2 from '../../../../svg/web2.png';
import web3 from '../../../../svg/web3.png';
import web4 from '../../../../svg/web4.png';
import web5 from '../../../../svg/web5.png';
import web6 from '../../../../svg/web6.png';
import webw1 from '../../../../svg/web11.png';
import webw2 from '../../../../svg/web22.png';
import webw3 from '../../../../svg/web33.png';
import webw4 from '../../../../svg/web44.png';
import webw5 from '../../../../svg/web55.png';
import webw6 from '../../../../svg/web66.png';

const images = [
  {
    group: [
      {
        cover: webw1.src,
        coverDark: web1.src
      },
      {
        cover: webw2.src,
        coverDark: web2.src
      },
    ],
  },
  {
    group: [
      {
        cover: webw3.src,
        coverDark: web3.src
      },
      {
        cover: webw4.src,
        coverDark: web4.src
      },
      {
        cover: webw5.src,
        coverDark: web5.src
      },
    ],
  },
  {
    group: [
      {
        cover: webw6.src,
        coverDark: web6.src
      },
      {
        cover: webw1.src,
        coverDark: web1.src
      },
      {
        cover: webw2.src,
        coverDark: web2.src
      },
      {
        cover: webw3.src,
        coverDark: web3.src
      },
    ],
  },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0,
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}
    >
      <Box paddingY={{ xs: 0, sm: '4rem', md: '4rem' }}>
        <Container>
          <Box maxWidth={{ xs: 1, sm: '50%' }}>
            <Typography
              variant="h3"
              color="text.primary"
              gutterBottom
              sx={{
                textAlign: 'center',
                fontWeight: 700,
              }}
            >
              未來盡在掌握
              <br />
              {' '}
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
              >
                <Typed
                 strings={['自己掌握SWAP', '自己掌握換幣策略', '自己掌握定投工具']}
                  typeSpeed={200}
                  loop={true}
                />
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'center' }}
              justifyContent={'center'}
              sx={
                {
                  mt: 12
                }
              }
            >
              <Button
                component={'a'}
                variant="contained"
                color="primary"
                size="large"
                href='https://github.com/bubiji/mifi-swap-flutter/releases/download/v1.0.3/mifiswap_v1.0.3.apk'
                sx={{width: '200px', fontSize: '1.3rem'}}
                endIcon={
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                    height={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </Box>
                }
              >
            Android Download 
              </Button>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            transform: 'rotate(-20deg)',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Box
            display={'flex'}
            width={'50rem'}
            left={'50%'}
            top={0}
            position={'absolute'}
            sx={{ transform: 'translate3d(20%, -50%, 0)' }}
          >
            {images.map((item, i) => (
              <Box key={i} marginTop={{ sm: -(i * 16) }} marginX={1}>
                {item.group.map((g, j) => (
                  <Box
                    key={j}
                    padding={1}
                    bgcolor={'background.paper'}
                    borderRadius={2}
                    boxShadow={3}
                    marginTop={2}
                  >
                    <Box
                      component={LazyLoadImage}
                      effect="blur"
                      src={
                        theme.palette.mode === 'dark' ? g.coverDark : g.cover
                      }
                      height={1}
                      width={1}
                      maxWidth={320}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default Hero;
