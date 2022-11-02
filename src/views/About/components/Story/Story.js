/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import about1 from '../../../../svg/about1.png';
// import about2 from '../../../../svg/about2.png';
const about1 = {src: ''};
const about2 = {src: ''};

const Story = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'center'} xs={12} md={7}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700, letterSpacing: '0.1rem', mb: 5 }}>
              2021 年在半导体供应链危机的大背景下成立
            </Typography>
            <Typography component={'p'} sx={{lineHeight: '1.8',fontSize: '1.3rem',letterSpacing: '0.2rem'}}>
              <Box fontWeight={'700'}>公司地点：</Box>北京/厦门
              <Box fontWeight={'700'}>主要行业客户：</Box>通信、数据和新能源汽车
            </Typography>
          </Box>
          <Box sx={{width: '100%', display: 'flex'}}>
            <Box maxWidth={500} sx={{display: 'flex', flex: 1}} width={0}>
              <Box
                component={'img'}
                src={about1.src}
                width={0}
                sx={{
                  flex: 1,
                  filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
                }}
              />
              <Box
                component={'img'}
                src={about2.src}
                width={0}
                sx={{
                  ml: 5,
                  flex: 1,
                  filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
                }}
              />
            </Box>
          </Box>
          <Box>
            <Typography component={'p'} sx={{lineHeight: '2',fontSize: '1.2rem',letterSpacing: '0.2rem'}}>
              <Box fontWeight={'700'}>我们的解决方案：</Box>
              从电子设计到供应链必备的芯片大数据平台和器件管理系统
            </Typography>
          </Box>
          <Box>
            <Typography component={'p'} sx={{lineHeight: '2',fontSize: '1.2rem',letterSpacing: '0.2rem'}}>
              <Box fontWeight={'700'}>我们的使命：</Box> 提升电子整机产品研发效率和规避供应链风险
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={5}
        >
          <Box maxWidth={500} width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
