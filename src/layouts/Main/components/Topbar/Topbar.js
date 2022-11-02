import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import logorw from '../../../../svg/logorw.png';
import logorb from '../../../../svg/logorb.png';

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
      sx={
        {
          maxWidth: '100%'
        }
      }
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="MifiSwap"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? logorb.src : logorw.src
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
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
        <Box marginLeft={4}>
          <Button
            component={'a'}
            href={'https://github.com/bubiji/mifi-swap-flutter'}
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
        <Box marginLeft={4}>
          <Button
            component={'a'}
            href={'https://github.com/bubiji/mifi-swap-flutter/releases/'}
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
        <Box marginLeft={4}>
          <Button
            component={'a'}
            href={'https://github.com/bubiji/mifi-swap-flutter/wiki'}
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
        {/* <Box marginLeft={4}>
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
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
