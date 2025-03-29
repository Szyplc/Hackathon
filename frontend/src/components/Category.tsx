import { List, ListItem, ListItemButton, ListItemText, Typography, Paper } from "@mui/material";

const CategoryPanel = ({
    categories,
    selectedCategory,
    setSelectedCategory
}: { categories: string[], selectedCategory: string | null, setSelectedCategory: any }) => {

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    console.log("Selected category:", category);
  };

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        width: 300, 
        padding: 2, 
        border: selectedCategory ? "2px solid #1976d2" : "none" 
      }}
    >
      <Typography variant="h6" gutterBottom>
        Select a Category
      </Typography>
      <List>
        {categories.map((category) => (
          <ListItem key={category} disablePadding>
            <ListItemButton
              selected={selectedCategory === category}
              onClick={() => handleSelect(category)}
              sx={{
                bgcolor: selectedCategory === category ? "#1976d2" : "inherit",
                color: selectedCategory === category ? "green" : "inherit",
                "&:hover": {
                  bgcolor: "#1976d2",
                  color: "white",
                }
              }}
            >
              <ListItemText primary={category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default CategoryPanel;
