import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  const { title, price, description, image } = product;

  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" image={image} alt={title} height="200" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="h6" component="p">
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
