import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { calculateEffectiveCost, Product } from "../product/product";
import { energyPricePerKwh, waterPricePerL } from "../product/constants";

const ProductCard = (product: Product) => {
    const { name, price, imageUrl } = product;
    return (
        <Card
            sx={{ minWidth: 250, maxWidth: 250, borderRadius: 2, boxShadow: 3, minHeight: 250, maxHeight: 250 }}
        >
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                sx={{ objectFit: "contain" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {price} zł
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Efektywny koszt roczny:{" "}
                    {Math.round(calculateEffectiveCost(product) * 100) / 100} zł
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
