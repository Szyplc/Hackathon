import { Card, Grid } from "@mui/material";

export function Products() {
    const products = [1, 2, 3];
    return (
        <Grid container>
            {products.map((product) => (
                <Grid key={product}>
                    <Card>
                        Product
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
