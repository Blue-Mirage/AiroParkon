import { Box, Container, Typography, Card, CardMedia, Grid, CardContent } from '@mui/material';
import { products } from '../../data/productsData';
import { pitParkSubProducts } from '../../data/subproductsData';

const PitPark = () => {
  const product = products.find(p => p.name === 'PitPark');

  return (
    <Box sx={{ py: 6, backgroundColor: (theme) => theme.palette.background.paper }}>
      <Container maxWidth="lg">
        {/* Main Product Title */}
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mb: 4,
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          {product.name}
        </Typography>

        {/* Main Product Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                height: '400px',
                overflow: 'hidden',
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
                image={product.image}
                alt={product.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
              Overview
            </Typography>
            <Typography variant="body1" color="text.secondary">
              The PitPark system is an innovative automated parking solution designed for efficiency,
              space saving, and ease of use.
            </Typography>
          </Grid>
        </Grid>

        {/* Subproducts Section */}
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            mb: 4,
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          PitPark Variants
        </Typography>

        <Grid container spacing={4}>
          {pitParkSubProducts.map((sub, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  boxShadow: 3,
                  borderRadius: 2,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 200, objectFit: 'cover' }}
                  image={sub.image}
                  alt={sub.name}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    {sub.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {sub.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PitPark;
