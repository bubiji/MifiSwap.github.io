/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import {styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '30px',
  padding: '40px',
  height: '100%',
}));

const mock = [
  {
    titles: ['OpenSource', '完全免費開源透明'],
    subtitle: ['開源透明的SWAP交易代碼', '交易在移動端本地完成', ' 交易策略自己掌握','安裝文件可自己編譯'],
    icon: (
      <svg t="1663209971088" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7545" width="24" height="24"><path d="M512 421.12a16 16 0 0 0-16 16v128a16 16 0 0 0 32 0v-128A16 16 0 0 0 512 421.12zM480 393.6h64a16 16 0 0 0 0-32h-16V256a16 16 0 0 0-32 0v105.6H480a16 16 0 0 0 0 32zM704 448a16 16 0 0 0-16 16v102.4a16 16 0 1 0 32 0V464.64A16 16 0 0 0 704 448zM672 419.84h64a16 16 0 0 0 0-32h-14.72V256a16 16 0 0 0-32 0v128h-17.28a16 16 0 0 0 0 32zM288 453.12h64a16 16 0 0 0 0-32h-16V256a16 16 0 0 0-32 0v165.12H288a16 16 0 0 0 0 32zM320 485.76a16 16 0 0 0-16 16v64a16 16 0 0 0 32 0v-64A16 16 0 0 0 320 485.76z" fill="#377dff" p-id="7546"></path><path d="M936.96 72.96H87.04a32 32 0 0 0-32 32v614.4a32 32 0 0 0 32 32h849.92a32 32 0 0 0 32-32v-614.4a32 32 0 0 0-32-32z m-32 614.4H119.04v-550.4h785.92zM352 880h320a32 32 0 0 0 0-64h-320a32 32 0 0 0 0 64z" fill="#377dff" p-id="7547"></path></svg>
    ),
  },
  {
    titles: ['OpenSWAP', '自定義換幣策略'],
    subtitle:
      ['提供多種開源Swap交易策略', '可自行利用最新算法或技術', ' 優化及定制開發自己的交易策略'],
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    titles: ['MifiSWAP', '基於Mixin網絡類Defi項目'],
    subtitle:
      ['原生極限的交易速度', '更少的手續費', '豐富的生態及深度','帶來更多學以致用的可能'],
    icon: (
      <svg t="1663209720525" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4715" width="24" height="24"><path d="M506.311111 153.979259c83.437037 0 151.324444 67.887407 151.324445 151.324445s-67.887407 151.324444-151.324445 151.324444-151.324444-67.887407-151.324444-151.324444 67.887407-151.324444 151.324444-151.324445m0-75.851852c-125.534815 0-227.176296 101.641481-227.176296 227.176297s101.641481 227.176296 227.176296 227.176296 227.176296-101.641481 227.176296-227.176296S631.845926 78.127407 506.311111 78.127407z" fill="#048FFA" p-id="4716"></path><path d="M614.020741 604.34963c115.674074 0 209.92 94.245926 209.92 209.92v2.085926c0 26.927407-22.755556 49.682963-49.682963 49.682963H235.140741c-26.927407 0-49.493333-22.755556-49.493334-49.493334v-2.085926c0-115.863704 94.245926-210.10963 210.10963-210.109629h218.263704m0-76.610371H395.567407c-158.340741 0-286.90963 128.379259-286.909629 286.90963v2.085926c0 69.404444 56.888889 126.293333 126.293333 126.293333h538.927408c69.594074 0 126.482963-56.888889 126.482962-126.482963v-2.085926c0.18963-158.53037-128.18963-286.72-286.34074-286.72z" fill="#048FFA" p-id="4717"></path><path d="M999.727407 777.102222c-10.42963 0-18.962963-8.533333-18.962963-18.962963 0-77.368889-21.428148-137.481481-63.715555-178.82074-64.474074-62.957037-157.771852-61.62963-158.53037-61.81926h-0.37926a19.000889 19.000889 0 0 1-1.327407-37.925926c5.499259-0.379259 134.068148-10.808889 134.068148-130.844444 0-118.897778-106.571852-122.69037-111.122963-122.69037-10.42963-0.18963-18.773333-8.912593-18.583704-19.342223 0.18963-10.42963 8.533333-18.583704 18.962963-18.583703h0.37926c51.38963 0.758519 148.48 35.460741 148.48 160.616296 0 75.662222-40.77037 120.225185-86.091852 144.308148 32.237037 10.24 68.835556 27.875556 100.503703 58.595556 50.062222 48.734815 75.472593 118.139259 75.472593 206.127407-0.18963 10.998519-8.722963 19.342222-19.152593 19.342222zM22.755556 777.102222c-10.42963 0-18.962963-8.533333-18.962963-18.962963 0-88.177778 25.41037-157.392593 75.472592-206.127407 31.668148-30.72 68.266667-48.545185 100.503704-58.595556-45.131852-24.082963-86.091852-68.645926-86.091852-144.308148 0-125.345185 97.09037-159.857778 148.48-160.616296 10.24 0.379259 19.152593 8.154074 19.342222 18.583704 0.18963 10.42963-8.154074 18.962963-18.583703 19.342222-4.551111 0.18963-111.122963 3.982222-111.122963 122.69037 0 120.035556 128.568889 130.465185 134.068148 130.844445a18.962963 18.962963 0 0 1 17.635555 19.911111c-0.568889 10.24-9.291852 18.583704-19.342222 18.014815-0.948148 0-93.866667-1.327407-158.340741 61.819259-42.287407 41.339259-63.715556 101.451852-63.715555 178.820741-0.379259 10.24-8.912593 18.583704-19.342222 18.583703z" fill="#0DB8F2" p-id="4718"></path></svg>
    ),
  },
];

const Services = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={8}>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
              letterSpacing: '0.8rem',
            }}
          >
            MifiSWAP Roadmap
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2} sx={
        {
          display: 'flex',
          justifyContent: 'center',
        }
      }>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Item elevation={16}>
              <Box width={1} height={1}>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Box
                    component={Avatar}
                    width={60}
                    height={60}
                    marginBottom={2}
                    bgcolor={alpha(theme.palette.primary.main, 0.1)}
                    color={theme.palette.primary.main}
                    sx={
                      {
                        mt: 5
                      }
                    }
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant={'h5'}
                    gutterBottom
                    sx={{ fontWeight: 600, color: 'black', width: '100%', mt: 5, mb: 5 }}
                    align={'center'}
                  >
                    {item.titles[0]}
                    <br />
                    {item.titles[1]}
                  </Typography>
                  <Box sx={{width: '100%', mb: 5}}>
                    {item.subtitle.map((sub,inx) => {
                      return <Box key={inx} sx={{width: '100%'}}>
                        <Box sx={
                          {
                            display:'flex',
                            alignItems: 'baseline',
                            mb: 2
                          }
                        }>
                          <svg t="1663210356003" className="icon" viewBox="0 0 1024 1024" style={{flexShrink:0}}version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9500" width="14" height="14"><path d="M512 298.666667c117.333333 0 213.333333 96 213.333333 213.333333s-96 213.333333-213.333333 213.333333-213.333333-96-213.333333-213.333333S394.666667 298.666667 512 298.666667z" p-id="9501"></path></svg>
                          <Typography align={'left'} color="text.secondary"
                            sx={{lineHeight: '1.5',fontSize: '1rem',letterSpacing: '0.1rem',ml: '3px'}}>
                            {sub}
                          </Typography>
                        </Box>
                      </Box>;
                    })}
                  </Box>
                </Box>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
