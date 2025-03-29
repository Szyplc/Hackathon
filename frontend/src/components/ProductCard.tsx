import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { calculateEffectiveCost, Product } from "../product/product";
import { energyPricePerKwh, waterPricePerL } from "../product/constants";

const ProductCard = (product: Product) => {
    const { name, price, imageUrl, id } = product;
    return (
        <Card
            sx={{ minWidth: 250, maxWidth: 250, borderRadius: 2, boxShadow: 3 }} key={id}
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
                    Koszt energii rocznie:{" "}
                    {Math.round(
                        (product.energyUsePerYear || 0) * energyPricePerKwh
                    )}{" "}
                    zł
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Koszt wody rocznie:{" "}
                    {Math.round(
                        (product.waterUsePerYear || 0) * waterPricePerL
                    )}{" "}
                    zł
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Długość życia:{" "}
                    {product.lifeSpan} lat
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rocznie:{" "}
                    {Math.round(calculateEffectiveCost(product) * 100) / 100} zł
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rodzaj opakowania:{" "}
                    {product.packagingKindOfMaterial
                        ? product.packagingKindOfMaterial
                        : "Brak danych"}{" "}
                    {product.packagingMaterialFromRecycledMaterials
                        ? "(z recyklingu)"
                        : ""}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
