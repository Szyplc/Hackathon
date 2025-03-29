import { Grid } from "@mui/material";
import CardContainer from "./CardContainer";
import { products } from "../product/productData";

export function Products({ selectedCategory }: Props) {
    return (
        <Grid container>
            <CardContainer cards={getCardData(selectedCategory)} />
        </Grid>
    );
}

type Props = {
    selectedCategory: string | null;
};

function getCardData(category: string | null) {
    if (category == null) return [];
    return products.filter((product) => product.category === category).map((product) => ({
        title: product.name,
        description: `Price: $${product.price}`,
        imageUrl: "https://via.placeholder.com/300",
        category: product.category,
    }));
}
