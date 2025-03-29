import { Grid } from "@mui/material";
import CardContainer from "./CardContainer";
import { products } from "../product/productData";
import { getOverallScore } from "../product/product";

export function Products({ economicValue, ecologicValue, selectedCategory }: Props) {
    return (
        <Grid container>
            <CardContainer cards={getCardData(economicValue, ecologicValue, selectedCategory)} />
        </Grid>
    );
}

type Props = {
    economicValue: number;
    ecologicValue: number;
    selectedCategory: string | null;
};

function getCardData(economicValue: number, ecologicValue: number, category: string | null) {
    if (category == null) return [];
    const result = products.filter((product) => product.category === category).map((product) => {
        product.score = getOverallScore(product, ecologicValue, economicValue);
        return product;
    }).sort((a, b) => b.score - a.score);
    return result;
}
