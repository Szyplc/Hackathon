import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";

const CategoryPanel = ({
    categories,
    selectedCategory,
    setSelectedCategory,
}: {
    categories: string[];
    selectedCategory: string | null;
    setSelectedCategory: any;
}) => {
    const handleSelect = (category: string) => {
        if(category !== selectedCategory) {
            setSelectedCategory(category);
        }
        else {
            setSelectedCategory(null);
        }
    };

    return (
        <>
            <Typography variant="h6" marginTop={4}>
                Kategoria
            </Typography>
            <List>
                {categories.map((category) => (
                    <ListItem key={category} disablePadding>
                        <ListItemButton
                            selected={selectedCategory === category}
                            onClick={() => handleSelect(category)}
                            sx={{
                                bgcolor:
                                    selectedCategory === category
                                        ? "#1976d2"
                                        : "inherit",
                                color:
                                    selectedCategory === category
                                        ? "green"
                                        : "inherit",
                                "&:hover": {
                                    bgcolor: "#1976d2",
                                    color: "white",
                                },
                            }}
                        >
                            <ListItemText primary={category} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default CategoryPanel;
