// src/pages/Products.js
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { products } from '../data/productsData'; // Adjust path

const Products = () => {
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
          Our Products
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 240 }}
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* Space for description */}
                  </Typography>
                  <Button
                    variant="contained"
                    component={Link}
                    to={product.route}
                    sx={{ mt: 'auto', backgroundColor: 'primary.main', '&:hover': { backgroundColor: 'primary.dark' } }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;