import { Card, Grid } from "@mui/material";
import CardContainer from "./CardContainer";

const cardData: CardProps[] = [
    {
      title: "Smartphone",
      description: "Latest model with advanced features.",
      imageUrl: "https://via.placeholder.com/300",
      category: "Technology",
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
            <CardContainer cards={cardData} />
        </Grid>
    );
}

type Props = {
    selectedCategory: string | null;
};
