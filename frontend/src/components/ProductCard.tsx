import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../product/product";

const ProductCard = ({ name, price, imageUrl, costScore, ecoScore }: Product) => {
  return (
    <Card sx={{ minWidth: 250, maxWidth: 250, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia component="img" height="140" image={imageUrl} sx={{ objectFit: "contain" }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price} zł
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Wynik ekonomiczny: {costScore}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Wynik ekologiczny: {ecoScore}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
