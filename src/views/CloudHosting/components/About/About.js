/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Avatar from '@mui/material/Avatar';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';

import LaptopSkeletonIllustration from 'svg/illustrations/LaptopSkeleton';
// import cms2 from '../../../../svg/cms2.png';
const cms2 = {};

const About = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box>
      <Box marginBottom={2}>
        <Typography component={'span'} variant="h4" sx={{ fontWeight: 700 }}>
          CMS 的架构和功能模块
        </Typography>
      </Box>
      <Typography variant="h6" component="p" color="text.secondary">
      </Typography>
    </Box>
  );

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <LeftSide />
        </Box>
      </Grid>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box width={1}>
          <Box
            sx={{
              position: 'relative',
              marginX: 'auto',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                marginX: 'auto',
              }}
            >
              <Box>
                <Box
                  position={'relative'}
                  zIndex={2}
                  maxWidth={1}
                  height={'auto'}
                  sx={{ verticalAlign: 'middle' }}
                >
                  <LaptopSkeletonIllustration />
                </Box>
                <Box
                  position={'absolute'}
                  top={'8.4%'}
                  left={'12%'}
                  width={'76%'}
                  height={'83%'}
                  border={`1px solid ${theme.palette.alternate.dark}`}
                  zIndex={3}
                  sx={{
                    '& .lazy-load-image-loaded': {
                      height: 1,
                      width: 1,
                    },
                  }}
                >
                  <Box
                    component={LazyLoadImage}
                    effect="blur"
                    src={cms2.src}
                    alt="Image Description"
                    width={1}
                    sx={{
                      objectFit: 'cover',
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.7)'
                          : 'none',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
