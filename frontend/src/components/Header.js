import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/24/outline'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Box, Button, Select, MenuItem, Switch, Avatar } from '@mui/material';
import { DarkMode, LightMode, Mail } from '@mui/icons-material';
import logo from '../assets/Header.png';
import { useTheme } from '@mui/material/styles';


export default function Header({ darkMode, setDarkMode }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <AppBar position="sticky" sx={{backgroundColor: (theme) => theme.palette.primary.dark}}>
      <Toolbar className="flex justify-between">
        <Box sx={{ flexGrow: 1 }}>
          <img src={logo} alt="Airo Parkon Logo" style={{ height: '40px', filter: isDarkMode ? 'brightness(0) invert(1)' : 'none', transition: 'filter 0.3s ease' }} />
        </Box>
        <IconButton
          color="#4682B4"
          onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}