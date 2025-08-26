import React, { memo, useCallback, useState } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { FaBars, FaHome, FaUser, FaCalendarAlt, FaImages, FaInfo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EdgeBall = memo(() => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleToggle = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  const scrollToBox = (boxId) => {
    const box = document.getElementById(boxId);
    if (box) {
      box.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Use theme's primary.main for submenu icons
  const submenuBgColor = theme.palette.primary.main;
  const submenuHoverColor = theme.palette.primary.dark || theme.palette.primary.main; // Fallback to main if dark not defined

  // Reverse edge ball color based on theme mode
  const toggleBgColor = theme.palette.mode === 'dark' ? '#94C05F' : '#6B3FA0'; // Green in dark, Purple in light
  const iconButtonColor = '#ffffff';

  return (
    <Box sx={{ position: 'fixed', bottom: '30px', right: '25px', zIndex: 10 }}>
      <IconButton
        aria-label="Toggle Navigation"
        onClick={handleToggle}
        sx={{
          width: '60px',
          height: '60px',
          bgcolor: toggleBgColor,
          color: iconButtonColor,
          borderRadius: '50%',
          boxShadow: theme.palette.mode === 'dark' ? '#94C05F' : '#6B3FA0',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'scale(1.1)', bgcolor: toggleBgColor },
        }}
      >
        <FaBars size={20} />
      </IconButton>
      <Box
        sx={{
          position: 'absolute',
          bottom: '70px',
          right: '0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          transform: open ? 'scale(1)' : 'scale(0)',
          transformOrigin: 'bottom right',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <IconButton
          aria-label="Home"
          onClick={() => scrollToBox('Home')}
          sx={{
            width: '50px',
            height: '50px',
            bgcolor: submenuBgColor,
            color: '#fff',
            borderRadius: '50%',
            '&:hover': { bgcolor: submenuHoverColor },
          }}
        >
          <FaHome size={20} />
        </IconButton>
        <IconButton
          aria-label="Profile"
          onClick={() => navigate('/signup')}
          sx={{
            width: '50px',
            height: '50px',
            bgcolor: submenuBgColor,
            color: '#fff',
            borderRadius: '50%',
            '&:hover': { bgcolor: submenuHoverColor },
          }}
        >
          <FaUser size={20} />
        </IconButton>
        <IconButton
          aria-label="Events"
          onClick={() => scrollToBox('Event')}
          sx={{
            width: '50px',
            height: '50px',
            bgcolor: submenuBgColor,
            color: '#fff',
            borderRadius: '50%',
            '&:hover': { bgcolor: submenuHoverColor },
          }}
        >
          <FaCalendarAlt size={20} />
        </IconButton>
        <IconButton
          aria-label="Gallery"
          onClick={() => scrollToBox('Gallery')}
          sx={{
            width: '50px',
            height: '50px',
            bgcolor: submenuBgColor,
            color: '#fff',
            borderRadius: '50%',
            '&:hover': { bgcolor: submenuHoverColor },
          }}
        >
          <FaImages size={20} />
        </IconButton>
        <IconButton
          aria-label="About"
          onClick={() => scrollToBox('About')}
          sx={{
            width: '50px',
            height: '50px',
            bgcolor: submenuBgColor,
            color: '#fff',
            borderRadius: '50%',
            '&:hover': { bgcolor: submenuHoverColor },
          }}
        >
          <FaInfo size={20} />
        </IconButton>
      </Box>
    </Box>
  );
});

export default EdgeBall;