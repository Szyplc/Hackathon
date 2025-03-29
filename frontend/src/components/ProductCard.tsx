import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const ProductCard = ({ title, description, imageUrl }: CardProps) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
