import { Grid } from "@mui/material";
import CardContainer, { CardProps } from "./CardContainer";

const cardData: CardProps[] = [
    {
      title: "Stock",
      description: "Latest model with advanced features.",
      imageUrl: "https://via.placeholder.com/300",
      category: "pralki",
    },
    {
      title: "Yoga Mat",
      description: "Eco-friendly and comfortable yoga mat.",
      imageUrl: "https://via.placeholder.com/300",
      category: "Health",
    },
    {
      title: "Stock Market Guide",
      description: "Learn the basics of stock trading.",
      imageUrl: "https://via.placeholder.com/300",
      category: "Finance",
    },
    {
      title: "Online Course",
      description: "Master React with this in-depth course.",
      imageUrl: "https://via.placeholder.com/300",
      category: "Education",
    },
    {
      title: "Streaming Subscription",
      description: "Enjoy unlimited movies and shows.",
      imageUrl: "https://via.placeholder.com/300",
      category: "Entertainment",
    },
  ];
  

export function Products({ selectedCategory }: Props) {
    return (
        <Grid container>
            <CardContainer cards={cardData.filter((card) => (card.category === selectedCategory || selectedCategory == null))} />
        </Grid>
    );
}

type Props = {
    selectedCategory: string | null;
};
