import React from 'react';
import { Box, Typography, Container, Grid, Link as MUILink } from '@mui/material';
import { FaTwitter, FaDiscord, FaTelegram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/Footer.png';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Box
  component="footer"
  sx={(theme) => ({
    position: 'static',
    bottom: 0,
    left: 0,
    right: 0,
    bgcolor: theme.palette.primary.main, // Uses your theme color dynamically
    color: theme.palette.primary.contrastText,
    py: 2,
    '&::after': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      height: '68px',
      bgcolor: 'rgba(0, 0, 0, 0.1)',
    },
  })}
>
      <Container maxWidth="lg">
        <Grid container spacing={9} sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo */}
          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', alignItems: 'center', pl: { xs: 0, sm: 0 }, ml: { xs: 0, sm: -15 } }}>
            <img src={logo} alt="BuddyMate Logo" style={{ height: '120px', filter: isDarkMode ? 'brightness(0) invert(1)' : 'none', transition: 'filter 0.3s ease'}} />
          </Grid>

          {/* Socials */}
          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' }, gap: 2 }}>
            <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
              <FaTwitter size={30} />
            </MUILink>
            <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
              <FaDiscord size={32} />
            </MUILink>
            <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
              <FaTelegram size={30} />
            </MUILink>
            <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
              <FaLinkedin size={30} />
            </MUILink>
            <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
              <FaFacebook size={30} />
            </MUILink>
          </Grid>

          {/* Links */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} sx={{ pt: { xs: 4, md: 0 } }}>
              <Grid item xs={6} sm={3}>
                <Typography variant="h6" sx={{ fontSize: '13px', fontWeight: 400, color: 'primary.contrastText', opacity: 0.6 }}>
                  Services
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, opacity: 0.8, fontSize: '14px' }}>
                  <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
                    Staking
                  </MUILink>
                  <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
                    Hardware
                  </MUILink>
                  <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
                    Monitoring
                  </MUILink>
                  <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
                    Status
                  </MUILink>
                  <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
                    Endpoints
                  </MUILink>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="h6" sx={{ fontSize: '13px', fontWeight: 400, color: 'primary.contrastText', opacity: 0.6 }}>
                  Resources
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, opacity: 0.8, fontSize: '14px' }}>
                  <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
                    Pricing
                  </MUILink>
                  <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
                    Listings
                  </MUILink>
                  <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
                    Reports
                  </MUILink>
                  <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
                    API
                  </MUILink>
                  <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
                    FAQ
                  </MUILink>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="h6" sx={{ fontSize: '13px', fontWeight: 400, color: 'primary.contrastText', opacity: 0.6 }}>
                  Company
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, opacity: 0.8, fontSize: '14px' }}>
                  <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
                    Blog
                  </MUILink>
                  <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
                    Newsroom
                  </MUILink>
                  <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
                    About us
                  </MUILink>
                  <MUILink href="#" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
                    Assets
                  </MUILink>
                  <MUILink component={Link} to="/legal" sx={{ color: 'primary.contrastText', '&:hover': { color: 'primary.light' } }}>
                    Privacy & Terms
                  </MUILink>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="h6" sx={{ fontSize: '13px', fontWeight: 400, color: 'primary.contrastText', opacity: 0.6 }}>
                  Address
                </Typography>
                <Box sx={{ opacity: 0.8, fontSize: '12px', lineHeight: 1.5 }}>
                  <Typography component="address" sx={{ fontStyle: 'normal', color: 'primary.contrastText' }}>
                    Survey No.56/B, Gala No.7<br />
                    Near Datta Mandir, Opposite Navali Fatak East<br />
                    Palghar East - 401404<br />
                    Maharashtra, India.
                    <br />
                    Mob: +91 9823365388, +91 7080658070<br />
                    Email: airoparkon@gmail.com
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}