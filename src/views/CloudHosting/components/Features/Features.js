/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { LazyLoadImage } from 'react-lazy-load-image-component';
// import cms from '../../../../svg/cms.png';
const cms =  {};

const mock = [
  {
    title: '研发器件选型指引',
    subtitle: ['需要完备的器件参数数据库提高研发选型效率', '器件推荐度管理指引研发选型', '器件和设计标准化，推进多产品平台的器件复用'],
  },
  {
    title: '新技术导入与演进',
    subtitle: ['追踪器件的技术演进，保持技术领先性', '把控器件市场动态和方向，贴合市场趋势'],
  },
  {
    title: '成本与全局物料管控',
    subtitle: ['器件管理是执行采购战略的工具', '器件品类缩减 (归一化，同源化）', '增加单一器件采购量，提高议价能力', '多供应商导入，加强供应商竞争'],
  },
  {
    title: '供应链和风险管理',
    subtitle: ['通过器件选型指引，帮助供应链管控市场风险', '严格执行标准器件多供应商战略', '器件LTB 和 PCN管理'],
  },
  {
    title: '质量与合规管理',
    subtitle: ['专业化器件质量体系和供应商评价机制，提高器件质量', '器件失效分析和内部质量预警', '器件合规性审查材料声明/RoHS'],
  },
];

const Features = () => {
  const theme = useTheme();

  const LeftSide = () => (
    <Grid container spacing={2}>
      {mock.map((item, i) => (
        <Grid item xs={12} sm={6} key={i}>
          <Box
            display={'block'}
            width={1}
            height={1}
            sx={{
              textDecoration: 'none',
              transition: 'all .2s ease-in-out',
              '&:hover': {
                transform: `translateY(-${theme.spacing(1 / 2)})`,
              },
            }}
          >
            <Box
              component={Card}
              width={1}
              height={1}
              display={'flex'}
              flexDirection={'column'}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
              bgcolor={'alternate.main'}
            >
              <CardContent>
                <Typography
                  variant={'h5'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary"
                  sx={{lineHeight: '1.5',fontSize: '1rem',letterSpacing: '0.1rem'}}>
                  {item.subtitle}
                </Typography>
              </CardContent>
              <Box flexGrow={1} />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  //const RightSide = () => (
  //  <Box>
  //    <Box marginBottom={2}>
  //      <Typography
  //        sx={{
  //          textTransform: 'uppercase',
  //          fontWeight: 'medium',
  //        }}
  //        gutterBottom
  //        color={'primary'}
  //      >
  //        SEAMLESS INTEGRATION
  //      </Typography>
  //    </Box>
  //    <Box marginBottom={2}>
  //      <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
  //        The powerful and flexible theme for all kinds of businesses
  //      </Typography>
  //      <Typography color="text.secondary" variant={'h6'}>
  //        Send one-off and automated email, push, and in-app messages to people.
  //        <br />
  //        Create better stories.
  //      </Typography>
  //    </Box>
  //    <Grid container spacing={1}>
  //      {[
  //        'Lifetime updates & introduction and working',
  //        'Tech support & mutual funds',
  //        'Tons of assets & lifetime updates',
  //        'Integration ready & tech support',
  //      ].map((item, i) => (
  //        <Grid item xs={12} key={i}>
  //          <Box component={ListItem} disableGutters width={'auto'} padding={0}>
  //            <Box
  //              component={ListItemAvatar}
  //              minWidth={'auto !important'}
  //              marginRight={2}
  //            >
  //              <Box
  //                component={Avatar}
  //                bgcolor={theme.palette.secondary.main}
  //                width={20}
  //                height={20}
  //              >
  //                <svg
  //                  width={12}
  //                  height={12}
  //                  xmlns="http://www.w3.org/2000/svg"
  //                  viewBox="0 0 20 20"
  //                  fill="currentColor"
  //                >
  //                  <path
  //                    fillRule="evenodd"
  //                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  //                    clipRule="evenodd"
  //                  />
  //                </svg>
  //              </Box>
  //            </Box>
  //            <ListItemText primary={item} />
  //          </Box>
  //        </Grid>
  //      ))}
  //    </Grid>
  //    <Box marginTop={4}>
  //      <Button
  //        variant={'contained'}
  //        size={'large'}
  //        endIcon={
  //          <Box
  //            component={'svg'}
  //            xmlns="http://www.w3.org/2000/svg"
  //            fill="none"
  //            viewBox="0 0 24 24"
  //            stroke="currentColor"
  //            width={24}
  //            height={24}
  //          >
  //            <path
  //              strokeLinecap="round"
  //              strokeLinejoin="round"
  //              strokeWidth={2}
  //              d="M17 8l4 4m0 0l-4 4m4-4H3"
  //            />
  //          </Box>
  //        }
  //      >
  //        Get started
  //      </Button>
  //    </Box>
  //  </Box>
  //);

  const RightSide = () => (
    <Box
      component={LazyLoadImage}
      effect="blur"
      src={cms.src}
      alt="Image Description"
      width={1}
      height={1}
      sx={{
        objectFit: 'cover',
        filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
      }}
    />
  );
  return (
    <Box>

      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
        >
        </Typography>
        <Typography fontWeight={700} variant={'h4'} sx={{letterSpacing: '0.4rem'}} align={'center'}>
        用器件管理系统（CMS），落地器件管理的最佳实践经验
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <LeftSide />
        </Grid>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <RightSide />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
