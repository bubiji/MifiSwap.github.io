import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import logorw from '../../../../../../svg/logorw.png';
import logorb from '../../../../../../svg/logorb.png';

const SidebarNav = () => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light' ? logorb.src : logorw.src
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <Button
            component={'a'}
            href={'/'}
            fullWidth
            sx={{
              fontSize: '1.2rem',
              justifyContent: 'flex-center',
              color:
                    activeLink === '/'
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
              backgroundColor:
                    activeLink === '/'
                      ? alpha(theme.palette.primary.main, 0.1)
                      : 'transparent',
              fontWeight: activeLink === '/' ? 600 : 400,
            }}
          >
            {'Home'}
          </Button>
        </Box>
        <Box>
          <Button
            component={'a'}
            href={'/cloud-hosting'}
            fullWidth
            sx={{
              fontSize: '1.2rem',
              justifyContent: 'flex-center',
              color:
                    activeLink === '/cloud-hosting'
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
              backgroundColor:
                    activeLink === '/cloud-hosting'
                      ? alpha(theme.palette.primary.main, 0.1)
                      : 'transparent',
              fontWeight: activeLink === '/cloud-hosting' ? 600 : 400,
            }}
          >
            {'Products'}
          </Button>
        </Box>
        <Box>
          <Button
            component={'a'}
            href={'/desktop-app '}
            fullWidth
            sx={{
              fontSize: '1.2rem',
              justifyContent: 'flex-center',
              color:
                    activeLink === '/desktop-app'
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
              backgroundColor:
                    activeLink === '/desktop-app'
                      ? alpha(theme.palette.primary.main, 0.1)
                      : 'transparent',
              fontWeight: activeLink === '/desktop-app' ? 600 : 400,
            }}
          >
            {'Release'}
          </Button>
        </Box>
        <Box>
          <Button
            component={'a'}
            href={'/coworking'}
            fullWidth
            sx={{
              fontSize: '1.2rem',
              justifyContent: 'flex-center',
              color:
                    activeLink === '/coworking'
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
              backgroundColor:
                    activeLink === '/coworking'
                      ? alpha(theme.palette.primary.main, 0.1)
                      : 'transparent',
              fontWeight: activeLink === '/coworking' ? 600 : 400,
            }}
          >
            {'Documents'}
          </Button>
        </Box>
        {/* <Box>
          <Button
            component={'a'}
            href={'/about'}
            fullWidth
            sx={{
              fontSize: '1.2rem',
              justifyContent: 'flex-center',
              color:
                    activeLink === '/about'
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
              backgroundColor:
                    activeLink === '/about'
                      ? alpha(theme.palette.primary.main, 0.1)
                      : 'transparent',
              fontWeight: activeLink === '/about' ? 600 : 400,
            }}
          >
            {'关于我们'}
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
