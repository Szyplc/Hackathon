import { Card, Grid } from "@mui/material";

export function Products({ selectedCategory }: Props) {
    const products = [1, 2, 3];
    return (
        <Grid container>
            {products.map((product) => (
                <Grid key={product}>
                    <Card>Product</Card>
                </Grid>
            ))}
        </Grid>
    );
}

type Props = {
    selectedCategory: string | null;
};
