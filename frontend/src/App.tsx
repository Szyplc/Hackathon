import { Grid } from "@mui/material";
import { Products } from "./components/Products";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );

    return (
        <Grid container>
            <Grid size={2}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </Grid>
            <Grid size={10}>
                <Products selectedCategory={selectedCategory} />
            </Grid>
        </Grid>
    );
}

export default App;
