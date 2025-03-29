import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { Product } from "../product/product";

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const CardContainer = ({ cards }: { cards: Product[] }) => {
  return (
    <Grid container spacing={3}>
      {cards.map((card: any) => (
        <Grid component="div">
          <ProductCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardContainer;
