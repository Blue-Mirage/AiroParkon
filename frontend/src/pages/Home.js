import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { Link } from '@mui/material'; // Already imported if Carousel is from react-material-ui-carousel
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import { products } from '../data/productsData'; // Adjust path
import useMediaQuery from '@mui/material/useMediaQuery';

import B1 from '../assets/Back/1.jpg';
import B2 from '../assets/Back/2.jpg';
import B3 from '../assets/Back/3.jpg';
import B4 from '../assets/Back/4.jpg';
import B5 from '../assets/Back/5.jpg';

import Project1 from '../assets/Project/Proj1.jpg';
import Project2 from '../assets/Project/Proj2.jpg';
import Project3 from '../assets/Project/Proj3.jpeg';

import Client1 from '../assets/Client/Adani.png';
import Client2 from '../assets/Client/Birla.png';
import Client3 from '../assets/Client/Jio.png';
import Client4 from '../assets/Client/Tata.png';
import Client5 from '../assets/Client/Maruti.png';

import About from '../assets/About_Us.mp4';

const Home = () => {
  const theme = useTheme();
  const backgroundImages = [B1, B2, B3, B4, B5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile if < 600px
  const productsPerSlide = isMobile ? 1 : 3; // 1 product on mobile, 3 on larger screens
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const productGroups = chunkArray(products, productsPerSlide);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const keyInfo = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Products', value: '5+' },
    { label: 'Projects', value: '50+' },
    { label: 'Parking Spaces Installed', value: '1000+' },
  ];

  const clients = [
    { id: 1, name: 'Adani Enterprises', logo: Client1 },
    { id: 2, name: 'Aditya Birla Group', logo: Client2 },
    { id: 3, name: 'Jio Corporation', logo: Client3 },
    { id: 4, name: 'Tata Motors', logo: Client4 },
    { id: 5, name: 'Maruti Suzuki', logo: Client5 },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-image 1s ease-in-out',
          color: theme.palette.text.primary,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography
              variant="h1"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', md: '4rem' },
              }}
            >
              Welcome to Our Site
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1rem', md: '1.5rem' },
                maxWidth: '600px',
                color: theme.palette.text.secondary,
              }}
            >
              Discover amazing content and join our community!
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/explore"
              sx={{
                backgroundColor:
                  theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.light,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
                padding: '10px 20px',
                fontSize: '1.1rem',
              }}
            >
              Explore Now
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Our Products Section */}
<Box sx={{ py: 6, backgroundColor: (theme) => theme.palette.background.paper }}>
  <Container maxWidth="lg">
    <Typography
      variant="h4"
      sx={{
        textAlign: 'center',
        mb: 4,
        fontWeight: 'bold',
        color: 'primary.main',
      }}
    >
      Our Products
    </Typography>

    <Carousel
      autoPlay
      interval={3000}
      animation="slide"
      navButtonsAlwaysVisible
      navButtonsProps={{
        style: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        },
      }}
      indicatorContainerProps={{ style: { marginTop: '20px' } }}
      indicatorIconButtonProps={{ style: { color: theme.palette.primary.light } }}
      activeIndicatorIconButtonProps={{ style: { color: theme.palette.primary.main } }}
      sx={{ width: '100%' }}
    >
      {productGroups.map((group, index) => (
        <Box key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container spacing={2} justifyContent="center">
            {group.map((product) => (
              <Grid item xs={12} sm={4} key={product.id}>
                <Card
                  component={RouterLink}
                  to={product.route}
                  sx={{
                    textDecoration: 'none',
                    boxShadow: 3,
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    maxWidth: isMobile ? '100%' : '360px',
                    width: '100%',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: 240 }}
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.subProducts
                        .map((sub) => sub.name)
                        .join(', ') || 'Brief description about the product goes here.'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Carousel>
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Button
        component={RouterLink}
        to="/products"
        variant="contained"
        sx={{
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
          padding: '10px 20px',
        }}
      >
        View All Products
      </Button>
    </Box>
  </Container>
</Box>

      {/* Key Info Section (Middle - Green/Purple Background) */}
      <Box
        sx={{
          py: 8,
          backgroundColor: theme.palette.primary.main,
          color: '#fff',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {keyInfo.map((info, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    {info.value}
                  </Typography>
                  <Typography variant="body1">{info.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Know About Us Section */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
            Know About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              textAlign: 'center',
              color: theme.palette.text.secondary,
            }}
          >
            We are a leader in innovative solutions, providing fully customized services...
          </Typography>
          <Box sx={{ mt: 5 }}>
            <video
              src={About}
              muted
              loop
              playsInline
              style={{
                width: '100%',
                maxHeight: '600px',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
              ref={(el) => {
                if (el) {
                  const observer = new IntersectionObserver(
                    ([entry]) => {
                      if (entry.isIntersecting) {
                        el.play().catch(() => {});
                        observer.disconnect();
                      }
                    },
                    { threshold: 0.5 }
                  );
                  observer.observe(el);
                  return () => observer.disconnect();
                }
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Our Clients Section */}
      <Box sx={{ py: 6, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
            Our Clients
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {clients.map((client) => (
              <Grid item xs={6} sm={4} md={2} key={client.id}>
                <Box sx={{ textAlign: 'center' }}>
                  <img
                    src={client.logo}
                    alt={client.name}
                    style={{
                      maxWidth: '150px',
                      height: '100px',
                      objectFit: 'contain',
                      marginBottom: '8px',
                    }}
                  />
                  <Typography variant="body1" color="text.secondary">
                    {client.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
