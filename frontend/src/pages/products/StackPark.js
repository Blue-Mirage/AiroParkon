// src/pages/StackPark.js
import { Box, Container, Typography, Card, CardMedia, Grid } from '@mui/material';
import { products } from '../../data/productsData'; // Adjust path

const StackPark = () => {
  const product = products.find(p => p.name === 'StackPark');

  return (
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
          {product.name}
        </Typography>
        <Grid container spacing={4} alignItems="center">
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
              Sub-Products
            </Typography>
            {product.subProducts.map((subProduct) => (
              <Box key={subProduct.id} sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                  {subProduct.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  {/* Space for written description from https://www.i-stron.com/stackpark.php */}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* Space for additional details or features */}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StackPark;